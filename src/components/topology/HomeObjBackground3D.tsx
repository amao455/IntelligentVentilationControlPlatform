import { type CSSProperties, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface HomeObjBackground3DProps {
  paused?: boolean;
  rotationSpeed?: number;
  opacity?: number;
  brightness?: number;
  disableRotation?: boolean;
  viewScale?: number;
  viewAzimuthDeg?: number;
  showRouteOverlay?: boolean;
  routeOverlayObjPath?: string;
  routeOverlayColor?: string;
  airflowLabels?: ReadonlyArray<TunnelAirflowLabel>;
  roadwayPointObjPath?: string;
  roadwayPointSerialReferenceObjPath?: string;
  roadwayPointOverlayVisible?: boolean;
  roadwayPointLabels?: ReadonlyArray<RoadwayPointAirflowLabel>;
  autoFillRoadwayPointLabels?: boolean;
  roadwayPointSerialNameMap?: Readonly<Record<string, number>>;
  roadwayPointShowSerial?: boolean;
  roadwaySerialHighlightObjPath?: string;
  roadwaySerialHighlightVisible?: boolean;
  sensorMarkers?: ReadonlyArray<TunnelSensorMarker>;
  visibleSensorMarkerIds?: ReadonlyArray<string>;
}

interface TunnelAirflowLabel {
  id: string;
  name: string;
  airflow: number | string;
  unit?: string;
  // Normalized anchor in model bounding box: [0, 1].
  anchor: {
    x: number;
    y: number;
    z: number;
  };
  // Additional Y offset in model units; when omitted, auto-lift is used.
  lift?: number;
  color?: string;
  background?: string;
  borderColor?: string;
  leaderColor?: string;
  markerColor?: string;
}

interface RoadwayPointAirflowLabel {
  id: string;
  name: string;
  airflow?: number | string;
  pointIndex: number;
  serialNo?: number;
  unit?: string;
  color?: string;
  background?: string;
  borderColor?: string;
  leaderColor?: string;
  markerColor?: string;
}

interface TunnelSensorMarker {
  id: string;
  label: string;
  count?: number;
  unit?: string;
  anchor: {
    x: number;
    y: number;
    z: number;
  };
  lift?: number;
  color?: string;
  background?: string;
  borderColor?: string;
}

interface TunnelNormalization {
  rotateX: number;
  rotateY: number;
  uniformScale: number;
  centerOffset: THREE.Vector3;
}

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

const LABEL_LEADER_LENGTH_PX = 20;
const SENSOR_LABEL_LEADER_OFFSET_PX = 8;
const SENSOR_LABEL_WIDTH_PX = 82;
const SENSOR_LABEL_HEIGHT_PX = 22;
const INDUSTRIAL_SCENE_CLEAR = 0x071111;
const INDUSTRIAL_LIGHT_CYAN = 0x28e6d2;
const INDUSTRIAL_LIGHT_BLUE = 0x35b9ff;
const INDUSTRIAL_LIGHT_AMBER = 0xffb84d;
const TUNNEL_SURFACE_COLOR = 0x7fc6c1;
const TUNNEL_EDGE_COLOR = 0x39f7df;

function centerObjectAtOrigin(object: THREE.Object3D): THREE.Vector3 {
  object.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(object);
  const center = box.getCenter(new THREE.Vector3());
  object.position.sub(center);
  object.updateMatrixWorld(true);
  return center;
}

function fitCameraToObject(
  object: THREE.Object3D,
  camera: THREE.PerspectiveCamera,
  controls: OrbitControls,
  viewScale = 1,
  viewAzimuthDeg = 0,
) {
  const box = new THREE.Box3().setFromObject(object);
  const sphere = box.getBoundingSphere(new THREE.Sphere());
  const radius = Math.max(sphere.radius, 1);
  const safeViewScale = Math.max(viewScale, 0.5);

  const verticalFov = THREE.MathUtils.degToRad(camera.fov);
  const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * camera.aspect);
  const distanceV = radius / Math.tan(verticalFov / 2);
  const distanceH = radius / Math.tan(horizontalFov / 2);
  const distance = (Math.max(distanceV, distanceH) * 1.15) / safeViewScale;
  const azimuthRad = THREE.MathUtils.degToRad(viewAzimuthDeg);

  camera.position.set(
    Math.sin(azimuthRad) * distance,
    radius * 0.45,
    Math.cos(azimuthRad) * distance,
  );
  camera.near = Math.max(distance / 1000, 0.1);
  camera.far = Math.max(distance * 20, 100000);
  camera.updateProjectionMatrix();
  camera.lookAt(0, 0, 0);

  controls.target.set(0, 0, 0);
  controls.minDistance = Math.max(radius * 0.1, 500);
  controls.maxDistance = distance * 6;
  controls.update();
}

function disposeObject(object: THREE.Object3D) {
  object.traverse((sceneObject) => {
    if (sceneObject instanceof THREE.Mesh) {
      sceneObject.geometry?.dispose();
      if (Array.isArray(sceneObject.material)) {
        sceneObject.material.forEach((material) => material.dispose());
      } else {
        sceneObject.material?.dispose();
      }
    }

    if (sceneObject instanceof THREE.LineSegments) {
      sceneObject.geometry?.dispose();
      if (Array.isArray(sceneObject.material)) {
        sceneObject.material.forEach((material) => material.dispose());
      } else {
        sceneObject.material?.dispose();
      }
    }
  });
}

function createConcreteTextureSet() {
  const makeTexture = (draw: (ctx: CanvasRenderingContext2D) => void) => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    draw(ctx);
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    return texture;
  };

  const map = makeTexture((ctx) => {
    ctx.fillStyle = "#243334";
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 8000; i += 1) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const size = Math.random() * 2 + 0.5;
      const brightness = Math.random() * 34 - 17;
      const gray = 47 + brightness;
      ctx.fillStyle = `rgb(${gray}, ${gray + 12}, ${gray + 11})`;
      ctx.fillRect(x, y, size, size);
    }
  });

  const normalMap = makeTexture((ctx) => {
    ctx.fillStyle = "rgb(128, 128, 255)";
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 3000; i += 1) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const size = Math.random() * 3 + 1;
      const r = 128 + (Math.random() - 0.5) * 40;
      const g = 128 + (Math.random() - 0.5) * 40;
      const b = 255 - Math.random() * 30;
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, y, size, size);
    }
  });

  const roughnessMap = makeTexture((ctx) => {
    ctx.fillStyle = "rgb(185, 198, 194)";
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 2000; i += 1) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const size = Math.random() * 4 + 1;
      const gray = 122 + Math.random() * 72;
      ctx.fillStyle = `rgb(${gray}, ${gray + 8}, ${gray + 6})`;
      ctx.fillRect(x, y, size, size);
    }
  });

  return { map, normalMap, roughnessMap };
}

function applyTunnelMaterial(
  object: THREE.Object3D,
  opacity: number,
) {
  const textures = createConcreteTextureSet();
  const base = new THREE.MeshStandardMaterial({
    map: textures.map,
    normalMap: textures.normalMap,
    normalScale: new THREE.Vector2(0.5, 0.5),
    roughnessMap: textures.roughnessMap,
    roughness: 0.82,
    metalness: 0.22,
    color: TUNNEL_SURFACE_COLOR,
    transparent: true,
    opacity: Math.min(0.92, opacity + 0.12),
    side: THREE.DoubleSide,
    emissive: 0x166f68,
    emissiveIntensity: 0.42,
    envMapIntensity: 0.65,
    aoMapIntensity: 0.5,
  });

  const meshes: THREE.Mesh[] = [];
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      meshes.push(child);
    }
  });

  meshes.forEach((child) => {
    const material = base.clone();
    const randomVariation = Math.random();
    material.roughness = 0.74 + randomVariation * 0.12;
    material.metalness = 0.18 + randomVariation * 0.08;
    material.emissiveIntensity = 0.34 + randomVariation * 0.18;
    material.color.multiplyScalar(0.98 + randomVariation * 0.16);
    child.material = material;
    child.castShadow = true;
    child.receiveShadow = true;

    const edgeGeometry = new THREE.EdgesGeometry(child.geometry, 14);
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: TUNNEL_EDGE_COLOR,
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
      depthTest: true,
      toneMapped: false,
    });
    const edgeLines = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    edgeLines.renderOrder = 8;
    child.add(edgeLines);
  });
}

function applyRouteMaterial(object: THREE.Object3D, colorValue: string) {
  const color = new THREE.Color(colorValue);
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        color,
        emissive: color.clone().multiplyScalar(0.8),
        emissiveIntensity: 1.1,
        roughness: 0.12,
        metalness: 0.02,
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide,
        depthWrite: false,
        depthTest: false,
        toneMapped: false,
      });
      child.renderOrder = 50;
    }
  });
}

function applyRoadwaySerialOverlayStyle(object: THREE.Object3D) {
  const serialMaterial = new THREE.MeshStandardMaterial({
    color: 0xffd24d,
    emissive: 0xff9f1a,
    emissiveIntensity: 1.45,
    roughness: 0.18,
    metalness: 0.05,
    transparent: true,
    opacity: 1,
    side: THREE.DoubleSide,
    depthWrite: false,
    depthTest: false,
    toneMapped: false,
  });

  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    child.material = serialMaterial.clone();
    child.renderOrder = 65;
  });
}

function alignOverlayToTunnel(
  overlayObject: THREE.Object3D,
  tunnelObject: THREE.Object3D,
) {
  const tunnelBox = new THREE.Box3().setFromObject(tunnelObject);
  const tunnelSize = tunnelBox.getSize(new THREE.Vector3());
  const tunnelCenter = tunnelBox.getCenter(new THREE.Vector3());
  const tunnelMaxDim = Math.max(tunnelSize.x, tunnelSize.y, tunnelSize.z) || 1;

  const overlayBox = new THREE.Box3().setFromObject(overlayObject);
  const overlaySize = overlayBox.getSize(new THREE.Vector3());
  const overlayMaxDim =
    Math.max(overlaySize.x, overlaySize.y, overlaySize.z) || 1;

  const ratio = tunnelMaxDim / overlayMaxDim;
  if (ratio > 5 || ratio < 0.2) {
    const safeRatio = clamp(ratio, 0.02, 500);
    overlayObject.scale.setScalar(safeRatio);
    overlayObject.updateMatrixWorld(true);

    const scaledBox = new THREE.Box3().setFromObject(overlayObject);
    const scaledCenter = scaledBox.getCenter(new THREE.Vector3());
    overlayObject.position.add(tunnelCenter.sub(scaledCenter));
    return;
  }

  overlayObject.position.copy(tunnelObject.position);
  overlayObject.rotation.copy(tunnelObject.rotation);
  overlayObject.scale.copy(tunnelObject.scale);
}

function applyTunnelNormalizationToOverlay(
  overlayObject: THREE.Object3D,
  normalization: TunnelNormalization,
) {
  overlayObject.rotation.set(normalization.rotateX, normalization.rotateY, 0);
  overlayObject.scale.setScalar(normalization.uniformScale);
  overlayObject.position.sub(normalization.centerOffset);
  overlayObject.updateMatrixWorld(true);
}

function normalizeAndAlignOverlayToTunnel(
  overlayObject: THREE.Object3D,
  tunnelObject: THREE.Object3D,
  normalization: TunnelNormalization | null,
) {
  if (normalization) {
    applyTunnelNormalizationToOverlay(overlayObject, normalization);
  }
  if (!isOverlayCloseToTunnel(overlayObject, tunnelObject)) {
    alignOverlayToTunnel(overlayObject, tunnelObject);
  }
}

function normalizeAndAlignRoadwayOverlayToTunnel(
  overlayObject: THREE.Object3D,
  tunnelObject: THREE.Object3D,
  normalization: TunnelNormalization | null,
) {
  if (normalization) {
    applyTunnelNormalizationToOverlay(overlayObject, normalization);
  }

  if (!isOverlayCloseToTunnel(overlayObject, tunnelObject)) {
    alignOverlayToTunnel(overlayObject, tunnelObject);
  }
}

function isOverlayCloseToTunnel(
  overlayObject: THREE.Object3D,
  tunnelObject: THREE.Object3D,
) {
  const overlayBox = new THREE.Box3().setFromObject(overlayObject);
  const tunnelBox = new THREE.Box3().setFromObject(tunnelObject);

  if (overlayBox.isEmpty() || tunnelBox.isEmpty()) {
    return false;
  }
  if (overlayBox.intersectsBox(tunnelBox)) {
    return true;
  }

  const overlayCenter = overlayBox.getCenter(new THREE.Vector3());
  const tunnelCenter = tunnelBox.getCenter(new THREE.Vector3());
  const tunnelDiag = tunnelBox.getSize(new THREE.Vector3()).length();
  return overlayCenter.distanceTo(tunnelCenter) <= tunnelDiag * 0.8;
}

function getLabelWorldPosition(
  bounds: THREE.Box3,
  anchor: TunnelAirflowLabel["anchor"] | TunnelSensorMarker["anchor"],
  lift?: number,
) {
  const clamped = {
    x: clamp(anchor.x, 0, 1),
    y: clamp(anchor.y, 0, 1),
    z: clamp(anchor.z, 0, 1),
  };
  const size = bounds.getSize(new THREE.Vector3());
  const min = bounds.min;
  const world = new THREE.Vector3(
    min.x + size.x * clamped.x,
    min.y + size.y * clamped.y,
    min.z + size.z * clamped.z,
  );
  world.y += lift ?? size.y * 0.035;
  return world;
}

function collectMeshes(object: THREE.Object3D): THREE.Mesh[] {
  const meshes: THREE.Mesh[] = [];
  object.traverse((child) => {
    if (child instanceof THREE.Mesh && child.geometry) {
      meshes.push(child);
    }
  });
  return meshes;
}

function getClosestVertexOnMeshes(
  meshes: ReadonlyArray<THREE.Mesh>,
  target: THREE.Vector3,
): THREE.Vector3 | null {
  let closestPoint: THREE.Vector3 | null = null;
  let closestDistanceSq = Number.POSITIVE_INFINITY;

  for (const mesh of meshes) {
    const position = mesh.geometry.getAttribute("position");
    if (!position) continue;

    const candidate = new THREE.Vector3();
    for (let index = 0; index < position.count; index += 1) {
      candidate.fromBufferAttribute(position, index).applyMatrix4(mesh.matrixWorld);
      const distanceSq = candidate.distanceToSquared(target);
      if (distanceSq < closestDistanceSq) {
        closestDistanceSq = distanceSq;
        closestPoint = candidate.clone();
      }
    }
  }

  return closestPoint;
}

function snapPointToModelSurface(
  model: THREE.Object3D,
  target: THREE.Vector3,
  searchDistance: number,
): THREE.Vector3 {
  const meshes = collectMeshes(model);
  if (meshes.length === 0) {
    return target.clone();
  }

  const directions = [
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, -1, 0),
    new THREE.Vector3(0, 0, 1),
    new THREE.Vector3(0, 0, -1),
    new THREE.Vector3(1, 0.35, 1).normalize(),
    new THREE.Vector3(-1, 0.35, 1).normalize(),
    new THREE.Vector3(1, 0.35, -1).normalize(),
    new THREE.Vector3(-1, 0.35, -1).normalize(),
  ];
  const raycaster = new THREE.Raycaster();
  let closestIntersection: THREE.Intersection | null = null;
  let closestDistanceSq = Number.POSITIVE_INFINITY;

  for (const direction of directions) {
    const origin = target.clone().addScaledVector(direction, searchDistance);
    raycaster.set(origin, direction.clone().multiplyScalar(-1));
    raycaster.far = searchDistance * 2.2;
    const hits = raycaster.intersectObjects(meshes, false);
    for (const hit of hits) {
      const distanceSq = hit.point.distanceToSquared(target);
      if (distanceSq < closestDistanceSq) {
        closestDistanceSq = distanceSq;
        closestIntersection = hit;
      }
    }
  }

  if (closestIntersection) {
    return closestIntersection.point.clone();
  }

  return getClosestVertexOnMeshes(meshes, target) ?? target.clone();
}

function createSensorMarkerNode(
  marker: TunnelSensorMarker,
  markerSize: number,
): { root: THREE.Group; labelAnchor: THREE.Object3D } {
  const color = new THREE.Color(marker.color ?? "#28e6d2");
  const root = new THREE.Group();
  root.name = `sensor-marker-${marker.id}`;

  const mastMaterial = new THREE.MeshBasicMaterial({
    color: color.clone().multiplyScalar(0.85),
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    toneMapped: false,
  });
  const mast = new THREE.Mesh(
    new THREE.CylinderGeometry(markerSize * 0.045, markerSize * 0.07, markerSize * 1.1, 12),
    mastMaterial,
  );
  mast.position.y = markerSize * 0.55;
  mast.renderOrder = 24;
  root.add(mast);

  const coreMaterial = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.98,
    depthWrite: false,
    toneMapped: false,
  });
  const core = new THREE.Mesh(
    new THREE.SphereGeometry(markerSize * 0.24, 20, 16),
    coreMaterial,
  );
  core.position.y = markerSize * 1.18;
  core.renderOrder = 26;
  root.add(core);

  const haloMaterial = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.34,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
  });
  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(markerSize * 0.42, markerSize * 0.035, 10, 36),
    haloMaterial,
  );
  halo.rotation.x = Math.PI / 2;
  halo.position.y = markerSize * 1.18;
  halo.renderOrder = 25;
  root.add(halo);

  const base = new THREE.Mesh(
    new THREE.TorusGeometry(markerSize * 0.3, markerSize * 0.025, 8, 28),
    haloMaterial.clone(),
  );
  base.rotation.x = Math.PI / 2;
  base.position.y = markerSize * 0.04;
  base.renderOrder = 23;
  root.add(base);

  const labelAnchor = new THREE.Object3D();
  labelAnchor.name = `sensor-label-anchor-${marker.id}`;
  labelAnchor.position.y = markerSize * 1.78;
  root.add(labelAnchor);

  return { root, labelAnchor };
}

interface RoadwayPointCollection {
  points: THREE.Vector3[];
  indexBySerial: Map<number, number>;
  indexByNormalizedSerial: Map<number, number>;
}

function collectObjectMeshCenters(
  object: THREE.Object3D,
  serialNameMap?: Readonly<Record<string, number>>,
): RoadwayPointCollection {
  const meshPoints: Array<{ name: string; point: THREE.Vector3; serial: number | null }> = [];
  const serialMeshBoxes = new Map<number, { name: string; box: THREE.Box3 }>();
  const serialObjectAnchors = new Map<number, { name: string; point: THREE.Vector3 }>();
  const serialByName = new Map<string, number>();
  if (serialNameMap) {
    Object.entries(serialNameMap).forEach(([name, serial]) => {
      if (!Number.isFinite(serial)) return;
      const normalizedName = name.trim().toLowerCase();
      serialByName.set(normalizedName, Math.trunc(serial));
      serialByName.set(normalizedName.replace(/[\s_-]+/g, ""), Math.trunc(serial));
    });
  }
  const hasExplicitMapping = serialByName.size > 0;
  const parseSerialFromName = (value: string): number | null => {
    if (hasExplicitMapping) {
      const normalizedName = value.trim().toLowerCase();
      const directMapped = serialByName.get(normalizedName);
      if (directMapped != null) {
        return directMapped;
      }
      const compactMapped = serialByName.get(normalizedName.replace(/[\s_-]+/g, ""));
      if (compactMapped != null) {
        return compactMapped;
      }
      const textToken = value.match(/text\s*0*\d{1,4}/i)?.[0];
      if (textToken) {
        const tokenKey = textToken.replace(/\s+/g, "").toLowerCase();
        const tokenMapped = serialByName.get(tokenKey);
        if (tokenMapped != null) {
          return tokenMapped;
        }
      }
      const textNumberMatched = value.match(/text[^0-9]*0*(\d{1,4})/i);
      if (textNumberMatched) {
        const serialDigits = Number.parseInt(textNumberMatched[1], 10);
        if (Number.isFinite(serialDigits)) {
          const zeroPaddedKey = `text${String(serialDigits).padStart(3, "0")}`;
          const paddedMapped = serialByName.get(zeroPaddedKey);
          if (paddedMapped != null) {
            return paddedMapped;
          }
        }
      }
      return null;
    }

    const textSerialMatched = value.match(/(?:text|序号|编号)\s*0*(\d{1,4})/i);
    if (!textSerialMatched) return null;
    const parsed = Number.parseInt(textSerialMatched[1], 10);
    return Number.isFinite(parsed) ? parsed : null;
  };

  object.updateMatrixWorld(true);
  object.traverse((node) => {
    const lineage: Array<{
      node: THREE.Object3D;
      name: string;
      serial: number | null;
    }> = [];
    let cursor: THREE.Object3D | null = node;
    for (let depth = 0; cursor && depth < 6; depth += 1) {
      if (cursor.name) {
        lineage.push({
          node: cursor,
          name: cursor.name,
          serial: parseSerialFromName(cursor.name),
        });
      }
      cursor = cursor.parent;
    }
    const serial = lineage.find((item) => item.serial != null)?.serial ?? null;
    const name = lineage[0]?.name ?? node.name ?? "";
    const matchedSerialCarrier = serial != null
      ? lineage.find((item) => item.serial === serial)?.node ?? null
      : null;
    const serialAnchorPoint =
      hasExplicitMapping && matchedSerialCarrier
        ? matchedSerialCarrier.getWorldPosition(new THREE.Vector3())
        : null;

    if (node instanceof THREE.Mesh) {
      const meshBox = new THREE.Box3().setFromObject(node);
      const fallbackPoint = !meshBox.isEmpty()
        ? meshBox.getCenter(new THREE.Vector3())
        : node.getWorldPosition(new THREE.Vector3());
      const point = serialAnchorPoint ?? fallbackPoint;
      meshPoints.push({ name, point, serial });

      if (serial != null && serial > 0 && serialAnchorPoint) {
        if (!serialObjectAnchors.has(serial)) {
          serialObjectAnchors.set(serial, {
            name,
            point: serialAnchorPoint.clone(),
          });
        }
      }

      if (serial != null && serial > 0 && !meshBox.isEmpty()) {
        const existing = serialMeshBoxes.get(serial);
        if (existing) {
          existing.box.union(meshBox);
        } else {
          serialMeshBoxes.set(serial, { name, box: meshBox.clone() });
        }
      }
    }
  });

  const deduplicatedNamed: Array<{ name: string; point: THREE.Vector3; serial: number | null }> =
    [];
  const positionKeyIndexMap = new Map<string, number>();
  for (const item of meshPoints) {
    const key = `${item.point.x.toFixed(3)}|${item.point.y.toFixed(3)}|${item.point.z.toFixed(3)}`;
    const existingIndex = positionKeyIndexMap.get(key);
    if (existingIndex != null) {
      const existing = deduplicatedNamed[existingIndex];
      if (existing.serial == null && item.serial != null) {
        existing.serial = item.serial;
      }
      if (!existing.name && item.name) {
        existing.name = item.name;
      }
      continue;
    }
    positionKeyIndexMap.set(key, deduplicatedNamed.length);
    deduplicatedNamed.push({
      name: item.name,
      point: item.point,
      serial: item.serial,
    });
  }

  const namedPointMap = new Map<number, { name: string; point: THREE.Vector3 }>();
  for (const [serial, item] of serialObjectAnchors.entries()) {
    namedPointMap.set(serial, {
      name: item.name,
      point: item.point.clone(),
    });
  }
  for (const [serial, item] of serialMeshBoxes.entries()) {
    if (!namedPointMap.has(serial)) {
      namedPointMap.set(serial, {
        name: item.name,
        point: item.box.getCenter(new THREE.Vector3()),
      });
    }
  }
  for (const item of deduplicatedNamed) {
    if (item.serial != null && item.serial > 0 && !namedPointMap.has(item.serial)) {
      namedPointMap.set(item.serial, { name: item.name, point: item.point });
    }
  }

  const namedPoints = Array.from(namedPointMap.entries())
    .map(([serial, item]) => ({ name: item.name, point: item.point, serial }))
    .sort(
      (a, b) =>
        a.serial - b.serial ||
        a.name.localeCompare(b.name, "zh-CN", { numeric: true, sensitivity: "base" }),
    );

  const unnamedPoints = deduplicatedNamed
    .filter((item) => item.serial == null || item.serial <= 0)
    .sort((a, b) =>
      a.name.localeCompare(b.name, "zh-CN", { numeric: true, sensitivity: "base" }),
    );

  const expectedMappedSerialCount = hasExplicitMapping
    ? new Set(serialByName.values()).size
    : 0;
  const mappedCoverage =
    expectedMappedSerialCount > 0
      ? namedPoints.length / expectedMappedSerialCount
      : 1;
  const preferMappedOnly =
    hasExplicitMapping &&
    namedPoints.length > 0 &&
    mappedCoverage >= 0.75;
  const ordered = preferMappedOnly
    ? namedPoints
    : [...namedPoints, ...unnamedPoints];
  const orderedPoints: THREE.Vector3[] = [];
  const indexBySerial = new Map<number, number>();
  for (const item of ordered) {
    const nextIndex = orderedPoints.length;
    orderedPoints.push(item.point);
    if (item.serial != null && item.serial > 0 && !indexBySerial.has(item.serial)) {
      indexBySerial.set(item.serial, nextIndex);
    }
  }

  const sortedSerials = Array.from(indexBySerial.keys()).sort((a, b) => a - b);
  const indexByNormalizedSerial = new Map<number, number>();
  sortedSerials.forEach((serial, index) => {
    const mappedIndex = indexBySerial.get(serial);
    if (mappedIndex != null) {
      indexByNormalizedSerial.set(index + 1, mappedIndex);
    }
  });

  return {
    points: orderedPoints,
    indexBySerial,
    indexByNormalizedSerial,
  };
}

function collectNormalizedSerialReferencePoints(object: THREE.Object3D): Array<{
  serialNo: number;
  point: THREE.Vector3;
}> {
  const collection = collectObjectMeshCenters(object);
  const sortedRawSerials = Array.from(collection.indexBySerial.keys()).sort((a, b) => a - b);
  return sortedRawSerials
    .map((rawSerial, index) => {
      const mappedIndex = collection.indexBySerial.get(rawSerial);
      if (mappedIndex == null) return null;
      const point = collection.points[mappedIndex];
      if (!point) return null;
      return {
        serialNo: index + 1,
        point: point.clone(),
      };
    })
    .filter((item): item is { serialNo: number; point: THREE.Vector3 } => item != null);
}

function buildNearestSerialAssignmentByPointIndex(
  anchorPoints: ReadonlyArray<THREE.Vector3>,
  serialReferencePoints: ReadonlyArray<{ serialNo: number; point: THREE.Vector3 }>,
): Map<number, number> {
  const result = new Map<number, number>();
  if (anchorPoints.length === 0 || serialReferencePoints.length === 0) {
    return result;
  }

  const pairs: Array<{ pointIndex: number; serialNo: number; cost: number }> = [];
  anchorPoints.forEach((anchorPoint, pointIndex) => {
    serialReferencePoints.forEach((serialItem) => {
      const dx = anchorPoint.x - serialItem.point.x;
      const dz = anchorPoint.z - serialItem.point.z;
      const dy = anchorPoint.y - serialItem.point.y;
      // Serial model is vertically above sphere anchors, so prioritize XZ proximity.
      const cost = dx * dx + dz * dz + dy * dy * 0.05;
      pairs.push({
        pointIndex,
        serialNo: serialItem.serialNo,
        cost,
      });
    });
  });
  pairs.sort((a, b) => a.cost - b.cost);

  const assignedPointIndex = new Set<number>();
  const assignedSerialNo = new Set<number>();
  for (const pair of pairs) {
    if (assignedPointIndex.has(pair.pointIndex) || assignedSerialNo.has(pair.serialNo)) {
      continue;
    }
    result.set(pair.pointIndex, pair.serialNo);
    assignedPointIndex.add(pair.pointIndex);
    assignedSerialNo.add(pair.serialNo);
    if (
      assignedPointIndex.size >= anchorPoints.length ||
      assignedSerialNo.size >= serialReferencePoints.length
    ) {
      break;
    }
  }
  return result;
}

function createDefaultAirflowByPointIndex(pointIndex: number): number {
  // Deterministic pseudo distribution between ~18 and ~33 m^3/s.
  const value = 18 + ((pointIndex * 1.73) % 14) + (pointIndex % 3) * 0.35;
  return Number(value.toFixed(1));
}

function buildRoadwayPointLabels(
  pointCount: number,
  providedLabels: ReadonlyArray<RoadwayPointAirflowLabel>,
  autoFillMissing = true,
): RoadwayPointAirflowLabel[] {
  const labelsByIndex = new Map<number, RoadwayPointAirflowLabel>();
  const labelsWithSerialOnly: RoadwayPointAirflowLabel[] = [];
  for (const label of providedLabels) {
    const hasValidPointIndex =
      Number.isInteger(label.pointIndex) &&
      label.pointIndex >= 0 &&
      label.pointIndex < pointCount;
    const hasValidSerial = Number.isInteger(label.serialNo) && (label.serialNo ?? 0) > 0;
    if (!hasValidPointIndex && !hasValidSerial) continue;
    if (hasValidPointIndex && !labelsByIndex.has(label.pointIndex)) {
      labelsByIndex.set(label.pointIndex, label);
      continue;
    }
    if (hasValidSerial) labelsWithSerialOnly.push(label);
  }

  if (!autoFillMissing) {
    return [...labelsByIndex.values(), ...labelsWithSerialOnly].sort((a, b) => {
      const serialA = a.serialNo ?? Number.MAX_SAFE_INTEGER;
      const serialB = b.serialNo ?? Number.MAX_SAFE_INTEGER;
      if (serialA !== serialB) return serialA - serialB;
      return a.pointIndex - b.pointIndex;
    });
  }

  const result: RoadwayPointAirflowLabel[] = [];
  for (let i = 0; i < pointCount; i += 1) {
    const provided = labelsByIndex.get(i);
    if (provided) {
      result.push(provided);
      continue;
    }

    const indexText = String(i + 1).padStart(3, "0");
    result.push({
      id: `roadway-auto-${indexText}`,
      name: `巷道-${indexText}`,
      airflow: createDefaultAirflowByPointIndex(i),
      pointIndex: i,
    });
  }
  result.push(...labelsWithSerialOnly);
  return result;
}

export function HomeObjBackground3D({
  paused = false,
  rotationSpeed = 0.06,
  opacity = 0.35,
  brightness = 1.2,
  disableRotation = false,
  viewScale = 1,
  viewAzimuthDeg = 0,
  showRouteOverlay = false,
  routeOverlayObjPath,
  routeOverlayColor = "#52c41a",
  airflowLabels = [],
  roadwayPointObjPath,
  roadwayPointSerialReferenceObjPath,
  roadwayPointOverlayVisible = false,
  roadwayPointLabels = [],
  autoFillRoadwayPointLabels = true,
  roadwayPointSerialNameMap,
  roadwayPointShowSerial = true,
  roadwaySerialHighlightObjPath,
  roadwaySerialHighlightVisible = false,
  sensorMarkers = [],
  visibleSensorMarkerIds,
}: HomeObjBackground3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelLayerRef = useRef<HTMLDivElement | null>(null);
  const labelElementsRef = useRef<Record<string, HTMLDivElement | null>>({});
  const sensorMarkerLabelLayerRef = useRef<HTMLDivElement | null>(null);
  const sensorMarkerLabelElementsRef = useRef<Record<string, HTMLDivElement | null>>({});
  const airflowLabelsRef = useRef<ReadonlyArray<TunnelAirflowLabel>>(airflowLabels);
  const sensorMarkersRef = useRef<ReadonlyArray<TunnelSensorMarker>>(sensorMarkers);
  const roadwayPointLabelLayerRef = useRef<HTMLDivElement | null>(null);
  const roadwayPointLabelElementsRef = useRef<Record<string, HTMLDivElement | null>>(
    {},
  );
  const roadwayPointLabelsRef = useRef<ReadonlyArray<RoadwayPointAirflowLabel>>(
    roadwayPointLabels,
  );
  const resolvedRoadwayPointLabelsRef = useRef<
    ReadonlyArray<RoadwayPointAirflowLabel>
  >([]);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const modelBoundsRef = useRef<THREE.Box3 | null>(null);
  const routeOverlayRef = useRef<THREE.Group | null>(null);
  const sensorMarkerGroupRef = useRef<THREE.Group | null>(null);
  const sensorMarkerLabelAnchorsRef = useRef<Record<string, THREE.Object3D | undefined>>({});
  const sensorMarkerNodesRef = useRef<Record<string, THREE.Object3D | undefined>>({});
  const sensorMarkerSnapCacheRef = useRef<Record<string, THREE.Vector3 | undefined>>({});
  const visibleSensorMarkerIdsRef = useRef<ReadonlyArray<string> | undefined>(
    visibleSensorMarkerIds,
  );
  const visibleSensorMarkerIdSetRef = useRef<Set<string> | null>(
    visibleSensorMarkerIds ? new Set(visibleSensorMarkerIds) : null,
  );
  const sensorMarkerBaseRotationYRef = useRef(0);
  const roadwayPointOverlayRef = useRef<THREE.Object3D | null>(null);
  const roadwayPointOverlayPathRef = useRef<string | undefined>(undefined);
  const roadwayPointWorldPositionsRef = useRef<THREE.Vector3[]>([]);
  const roadwayPointIndexBySerialRef = useRef<Map<number, number>>(new Map());
  const roadwayPointIndexByNormalizedSerialRef = useRef<Map<number, number>>(
    new Map(),
  );
  const roadwayPointNearestSerialByIndexRef = useRef<Map<number, number>>(new Map());
  const roadwayPointSerialReferencePathRef = useRef<string | undefined>(undefined);
  const roadwayPointSerialReferencePointsRef = useRef<
    Array<{ serialNo: number; point: THREE.Vector3 }>
  >([]);
  const roadwayPointSerialReferenceLoadingRef = useRef(false);
  const roadwaySerialHighlightRef = useRef<THREE.Object3D | null>(null);
  const roadwaySerialHighlightPathRef = useRef<string | undefined>(undefined);
  const roadwaySerialHighlightLoadingRef = useRef(false);
  const tunnelNormalizationRef = useRef<TunnelNormalization | null>(null);
  const routeOverlayLoadingRef = useRef(false);
  const roadwayPointLoadingRef = useRef(false);
  const animationIdRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingError, setLoadingError] = useState<string | null>(null);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [resolvedRoadwayPointLabels, setResolvedRoadwayPointLabels] = useState<
    ReadonlyArray<RoadwayPointAirflowLabel>
  >([]);

  useEffect(() => {
    airflowLabelsRef.current = airflowLabels;
  }, [airflowLabels]);

  useEffect(() => {
    sensorMarkersRef.current = sensorMarkers;
  }, [sensorMarkers]);

  useEffect(() => {
    visibleSensorMarkerIdsRef.current = visibleSensorMarkerIds;
    visibleSensorMarkerIdSetRef.current = visibleSensorMarkerIds
      ? new Set(visibleSensorMarkerIds)
      : null;
  }, [visibleSensorMarkerIds]);

  useEffect(() => {
    roadwayPointLabelsRef.current = roadwayPointLabels;
  }, [roadwayPointLabels]);

  useEffect(() => {
    resolvedRoadwayPointLabelsRef.current = resolvedRoadwayPointLabels;
  }, [resolvedRoadwayPointLabels]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = null;
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000000);
    camera.position.set(0, 32000, 68000);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(INDUSTRIAL_SCENE_CLEAR, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI;
    controls.enableRotate = !disableRotation;
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;

    const handleControlStart = () => {
      isInteractingRef.current = true;
    };
    const handleControlEnd = () => {
      isInteractingRef.current = false;
    };
    controls.addEventListener("start", handleControlStart);
    controls.addEventListener("end", handleControlEnd);

    scene.add(new THREE.AmbientLight(INDUSTRIAL_LIGHT_CYAN, brightness * 0.82));

    const directionalLight1 = new THREE.DirectionalLight(
      INDUSTRIAL_LIGHT_CYAN,
      brightness * 2.1,
    );
    directionalLight1.position.set(50000, 50000, 50000);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(
      INDUSTRIAL_LIGHT_BLUE,
      brightness * 1.26,
    );
    directionalLight2.position.set(-50000, 30000, -50000);
    scene.add(directionalLight2);

    const backLight = new THREE.DirectionalLight(INDUSTRIAL_LIGHT_AMBER, brightness * 0.62);
    backLight.position.set(0, -30000, -50000);
    scene.add(backLight);

    const pointLight = new THREE.PointLight(INDUSTRIAL_LIGHT_CYAN, brightness * 3.2, 200000);
    pointLight.position.set(0, 30000, 0);
    scene.add(pointLight);

    const accentLight1 = new THREE.PointLight(INDUSTRIAL_LIGHT_BLUE, brightness * 2.05, 150000);
    accentLight1.position.set(40000, 20000, 40000);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(INDUSTRIAL_LIGHT_AMBER, brightness * 0.95, 150000);
    accentLight2.position.set(-40000, 20000, -40000);
    scene.add(accentLight2);

    const loader = new OBJLoader();
    loader.load(
      "/models/IntegralTunnel.obj",
      (object) => {
        modelRef.current = object;
        applyTunnelMaterial(object, opacity);

        const preBox = new THREE.Box3().setFromObject(object);
        const preSize = preBox.getSize(new THREE.Vector3());
        const rotateX =
          preSize.y < preSize.x * 0.1 && preSize.y < preSize.z * 0.1
            ? Math.PI / 2
            : 0;
        const rotateY = Math.PI / 6;

        object.rotation.x = rotateX;
        object.rotation.y = rotateY;

        const rawBox = new THREE.Box3().setFromObject(object);
        const rawSize = rawBox.getSize(new THREE.Vector3());
        const maxDim = Math.max(rawSize.x, rawSize.y, rawSize.z) || 1;
        const targetSize = 120000;
        const scale = targetSize / maxDim;
        object.scale.setScalar(scale);

        const centerOffset = centerObjectAtOrigin(object);
        scene.add(object);
        modelBoundsRef.current = new THREE.Box3().setFromObject(object).clone();
        fitCameraToObject(object, camera, controls, viewScale, viewAzimuthDeg);

        tunnelNormalizationRef.current = {
          rotateX,
          rotateY,
          uniformScale: scale,
          centerOffset: centerOffset.clone(),
        };
        setModelLoaded(true);
      },
      (xhr) => {
        if (xhr.lengthComputable) {
          setLoadingProgress((xhr.loaded / xhr.total) * 100);
        }
      },
      (error) => {
        setLoadingError(error instanceof Error ? error.message : "模型加载失败");
      },
    );

    const updateAirflowLabelPositions = () => {
      const bounds = modelBoundsRef.current;
      const layer = labelLayerRef.current;
      const labels = airflowLabelsRef.current;
      if (!bounds || !layer || labels.length === 0) {
        return;
      }

      const width = container.clientWidth;
      const height = container.clientHeight;

      for (const item of labels) {
        const el = labelElementsRef.current[item.id];
        if (!el) continue;

        const world = getLabelWorldPosition(bounds, item.anchor, item.lift);
        const projected = world.clone().project(camera);
        const visible =
          projected.z >= -1 &&
          projected.z <= 1 &&
          projected.x >= -1.05 &&
          projected.x <= 1.05 &&
          projected.y >= -1.05 &&
          projected.y <= 1.05;

        if (!visible) {
          el.style.opacity = "0";
          el.style.transform = `translate(-50%, calc(-100% - ${LABEL_LEADER_LENGTH_PX}px)) scale(0.92)`;
          continue;
        }

        const x = (projected.x * 0.5 + 0.5) * width;
        const y = (-projected.y * 0.5 + 0.5) * height;

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.opacity = "1";
        el.style.transform = `translate(-50%, calc(-100% - ${LABEL_LEADER_LENGTH_PX}px)) scale(1)`;
      }
    };

    const updateSensorMarkerLabelPositions = () => {
      const layer = sensorMarkerLabelLayerRef.current;
      const markers = sensorMarkersRef.current;
      const labelAnchors = sensorMarkerLabelAnchorsRef.current;
      const markerNodes = sensorMarkerNodesRef.current;
      const visibleIdSet = visibleSensorMarkerIdSetRef.current;
      if (!layer || markers.length === 0) {
        return;
      }

      const width = container.clientWidth;
      const height = container.clientHeight;
      const projectedItems: Array<{
        marker: TunnelSensorMarker;
        element: HTMLDivElement;
        x: number;
        y: number;
        sequence: number;
      }> = [];

      for (const marker of markers) {
        const el = sensorMarkerLabelElementsRef.current[marker.id];
        const anchor = labelAnchors[marker.id];
        const node = markerNodes[marker.id];
        if (!el || !anchor || !node) continue;
        if (visibleIdSet && !visibleIdSet.has(marker.id)) {
          el.style.opacity = "0";
          continue;
        }
        if (!node.visible) {
          el.style.opacity = "0";
          continue;
        }

        const world = anchor.getWorldPosition(new THREE.Vector3());
        const projected = world.clone().project(camera);
        const visible =
          projected.z >= -1 &&
          projected.z <= 1 &&
          projected.x >= -1.05 &&
          projected.x <= 1.05 &&
          projected.y >= -1.05 &&
          projected.y <= 1.05;

        if (!visible) {
          el.style.opacity = "0";
          el.style.transform = "translate(-50%, -100%) scale(0.92)";
          continue;
        }

        const x = (projected.x * 0.5 + 0.5) * width;
        const y = (-projected.y * 0.5 + 0.5) * height;
        const sequenceMatched = marker.id.match(/-(\d+)$/);
        const sequence = sequenceMatched
          ? Number.parseInt(sequenceMatched[1], 10)
          : projectedItems.length + 1;

        projectedItems.push({
          marker,
          element: el,
          x,
          y,
          sequence: Number.isFinite(sequence) ? sequence : projectedItems.length + 1,
        });
      }

      projectedItems.sort((a, b) => a.y - b.y || a.x - b.x);
      const placed: Array<{ left: number; right: number; top: number; bottom: number }> = [];
      for (const item of projectedItems) {
        const side = item.sequence % 2 === 0 ? 1 : -1;
        const tier = Math.floor(((item.sequence - 1) % 12) / 2);
        const baseOffsetX = side * (24 + (tier % 3) * 12);
        const baseOffsetY = -SENSOR_LABEL_LEADER_OFFSET_PX - 8 - Math.floor(tier / 3) * 10;
        let labelX = clamp(item.x + baseOffsetX, 40, width - 40);
        let labelY = clamp(item.y + baseOffsetY, 30, height - 20);
        let rect = {
          left: labelX - SENSOR_LABEL_WIDTH_PX / 2,
          right: labelX + SENSOR_LABEL_WIDTH_PX / 2,
          top: labelY - SENSOR_LABEL_HEIGHT_PX,
          bottom: labelY,
        };

        for (let attempt = 0; attempt < 6; attempt += 1) {
          const overlaps = placed.some(
            (placedRect) =>
              rect.left < placedRect.right + 4 &&
              rect.right > placedRect.left - 4 &&
              rect.top < placedRect.bottom + 4 &&
              rect.bottom > placedRect.top - 4,
          );
          if (!overlaps) break;

          labelY = clamp(labelY - 10, 28, height - 20);
          if (labelY <= 30 && attempt > 2) {
            labelX = clamp(labelX + side * 14, 40, width - 40);
          }
          rect = {
            left: labelX - SENSOR_LABEL_WIDTH_PX / 2,
            right: labelX + SENSOR_LABEL_WIDTH_PX / 2,
            top: labelY - SENSOR_LABEL_HEIGHT_PX,
            bottom: labelY,
          };
        }

        placed.push(rect);

        const leaderDx = item.x - labelX;
        const leaderDy = item.y - labelY;
        const leaderLength = Math.max(
          6,
          Math.sqrt(leaderDx * leaderDx + leaderDy * leaderDy),
        );
        const leaderAngle = Math.atan2(leaderDy, leaderDx) * (180 / Math.PI);

        item.element.style.left = `${labelX}px`;
        item.element.style.top = `${labelY}px`;
        item.element.style.opacity = "1";
        item.element.style.transform = "translate(-50%, -100%) scale(1)";
        item.element.style.setProperty("--sensor-leader-width", `${leaderLength}px`);
        item.element.style.setProperty("--sensor-leader-angle", `${leaderAngle}deg`);
        item.element.style.setProperty("--sensor-leader-color", item.marker.color ?? "#28e6d2");
        item.element.style.setProperty(
          "--sensor-leader-opacity",
          leaderLength > 8 ? "0.72" : "0",
        );
      }
    };

    const updateRoadwayPointLabelPositions = () => {
      const labels = resolvedRoadwayPointLabelsRef.current;
      const points = roadwayPointWorldPositionsRef.current;
      const indexBySerial = roadwayPointIndexBySerialRef.current;
      const indexByNormalizedSerial = roadwayPointIndexByNormalizedSerialRef.current;
      const layer = roadwayPointLabelLayerRef.current;
      if (!layer || labels.length === 0 || points.length === 0) {
        return;
      }

      const width = container.clientWidth;
      const height = container.clientHeight;

      for (const item of labels) {
        const el = roadwayPointLabelElementsRef.current[item.id];
        if (!el) continue;
        const hasSerial = Number.isInteger(item.serialNo) && (item.serialNo ?? 0) > 0;
        const mappedBySerial = hasSerial
          ? (indexBySerial.get(item.serialNo!) ??
            indexByNormalizedSerial.get(item.serialNo!))
          : undefined;
        const mappedIndex = mappedBySerial ?? item.pointIndex;
        if (mappedIndex == null) {
          el.style.opacity = "0";
          continue;
        }
        const point = points[mappedIndex];
        if (!point) {
          el.style.opacity = "0";
          continue;
        }

        const projected = point.clone().project(camera);
        const visible =
          projected.z >= -1 &&
          projected.z <= 1 &&
          projected.x >= -1.05 &&
          projected.x <= 1.05 &&
          projected.y >= -1.05 &&
          projected.y <= 1.05;

        if (!visible) {
          el.style.opacity = "0";
          el.style.transform = `translate(-50%, calc(-100% - ${LABEL_LEADER_LENGTH_PX}px)) scale(0.92)`;
          continue;
        }

        const x = (projected.x * 0.5 + 0.5) * width;
        const y = (-projected.y * 0.5 + 0.5) * height;

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.opacity = "1";
        el.style.transform = `translate(-50%, calc(-100% - ${LABEL_LEADER_LENGTH_PX}px)) scale(1)`;
      }
    };

    const animate = () => {
      controls.update();
      if (
        !paused &&
        !disableRotation &&
        modelRef.current &&
        !isInteractingRef.current
      ) {
        modelRef.current.rotation.y += rotationSpeed * 0.01;
        if (routeOverlayRef.current) {
          routeOverlayRef.current.rotation.y = modelRef.current.rotation.y;
        }
        if (sensorMarkerGroupRef.current) {
          sensorMarkerGroupRef.current.rotation.y =
            modelRef.current.rotation.y - sensorMarkerBaseRotationYRef.current;
        }
      }
      updateAirflowLabelPositions();
      updateSensorMarkerLabelPositions();
      updateRoadwayPointLabelPositions();
      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const host = containerRef.current;
      if (!host) return;
      const nextWidth = host.clientWidth;
      const nextHeight = host.clientHeight;
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
      if (modelRef.current) {
        fitCameraToObject(modelRef.current, camera, controls, viewScale, viewAzimuthDeg);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }

      controls.removeEventListener("start", handleControlStart);
      controls.removeEventListener("end", handleControlEnd);
      controls.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      disposeObject(scene);
      modelRef.current = null;
      modelBoundsRef.current = null;
      routeOverlayRef.current = null;
      sensorMarkerGroupRef.current = null;
      sensorMarkerLabelAnchorsRef.current = {};
      sensorMarkerNodesRef.current = {};
      sensorMarkerSnapCacheRef.current = {};
      sensorMarkerBaseRotationYRef.current = 0;
      roadwayPointOverlayRef.current = null;
      roadwayPointOverlayPathRef.current = undefined;
      roadwayPointWorldPositionsRef.current = [];
      roadwayPointIndexBySerialRef.current = new Map();
      roadwayPointIndexByNormalizedSerialRef.current = new Map();
      roadwayPointNearestSerialByIndexRef.current = new Map();
      roadwayPointSerialReferencePathRef.current = undefined;
      roadwayPointSerialReferencePointsRef.current = [];
      roadwayPointSerialReferenceLoadingRef.current = false;
      roadwaySerialHighlightRef.current = null;
      roadwaySerialHighlightPathRef.current = undefined;
      roadwaySerialHighlightLoadingRef.current = false;
      tunnelNormalizationRef.current = null;
      routeOverlayLoadingRef.current = false;
      roadwayPointLoadingRef.current = false;
    };
  }, [
    paused,
    rotationSpeed,
    opacity,
    brightness,
    disableRotation,
    viewScale,
    viewAzimuthDeg,
  ]);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (!showRouteOverlay) {
      if (routeOverlayRef.current) {
        routeOverlayRef.current.visible = false;
      }
      return;
    }

    if (routeOverlayRef.current) {
      routeOverlayRef.current.visible = true;
      return;
    }

    if (
      !modelLoaded ||
      !routeOverlayObjPath ||
      routeOverlayLoadingRef.current ||
      !modelRef.current
    ) {
      return;
    }

    routeOverlayLoadingRef.current = true;
    let cancelled = false;
    const loader = new OBJLoader();

    loader.load(
      routeOverlayObjPath,
      (overlayObject) => {
        if (cancelled || !sceneRef.current || !modelRef.current) {
          disposeObject(overlayObject);
          routeOverlayLoadingRef.current = false;
          return;
        }

        applyRouteMaterial(overlayObject, routeOverlayColor);
        normalizeAndAlignOverlayToTunnel(
          overlayObject,
          modelRef.current,
          tunnelNormalizationRef.current,
        );

        overlayObject.visible = true;
        overlayObject.name = "gas-escape-route-overlay";
        sceneRef.current.add(overlayObject);
        routeOverlayRef.current = overlayObject;
        routeOverlayLoadingRef.current = false;
      },
      undefined,
      (error) => {
        if (!cancelled) {
          setLoadingError(
            error instanceof Error ? error.message : "逃生路线模型加载失败",
          );
        }
        routeOverlayLoadingRef.current = false;
      },
    );

    return () => {
      cancelled = true;
    };
  }, [modelLoaded, routeOverlayObjPath, routeOverlayColor, showRouteOverlay]);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (sensorMarkerGroupRef.current) {
      scene.remove(sensorMarkerGroupRef.current);
      disposeObject(sensorMarkerGroupRef.current);
      sensorMarkerGroupRef.current = null;
      sensorMarkerLabelAnchorsRef.current = {};
      sensorMarkerNodesRef.current = {};
      sensorMarkerBaseRotationYRef.current = 0;
    }

    if (
      !modelLoaded ||
      sensorMarkers.length === 0 ||
      !modelBoundsRef.current ||
      !modelRef.current
    ) {
      return;
    }

    const bounds = modelBoundsRef.current;
    const boundsSize = bounds.getSize(new THREE.Vector3());
    const markerSize = Math.max(boundsSize.length() * 0.0024, 150);
    const surfaceSearchDistance = Math.max(boundsSize.length() * 0.42, markerSize * 24);
    const markerGroup = new THREE.Group();
    markerGroup.name = "tunnel-sensor-markers";
    markerGroup.renderOrder = 24;

    const nextLabelAnchors: Record<string, THREE.Object3D | undefined> = {};
    const nextMarkerNodes: Record<string, THREE.Object3D | undefined> = {};
    const visibleIdSet = visibleSensorMarkerIdSetRef.current;
    for (const marker of sensorMarkers) {
      const { root, labelAnchor } = createSensorMarkerNode(marker, markerSize);
      const cachedSurfacePoint = sensorMarkerSnapCacheRef.current[marker.id];
      const surfacePoint = cachedSurfacePoint
        ? cachedSurfacePoint.clone()
        : snapPointToModelSurface(
          modelRef.current,
          getLabelWorldPosition(bounds, marker.anchor, 0),
          surfaceSearchDistance,
        );
      if (!cachedSurfacePoint) {
        sensorMarkerSnapCacheRef.current[marker.id] = surfacePoint.clone();
      }
      surfacePoint.y += marker.lift ?? markerSize * 0.08;
      root.position.copy(surfacePoint);
      root.visible = visibleIdSet ? visibleIdSet.has(marker.id) : true;
      markerGroup.add(root);
      nextLabelAnchors[marker.id] = labelAnchor;
      nextMarkerNodes[marker.id] = root;
    }

    sensorMarkerBaseRotationYRef.current = modelRef.current?.rotation.y ?? 0;
    sensorMarkerLabelAnchorsRef.current = nextLabelAnchors;
    sensorMarkerNodesRef.current = nextMarkerNodes;
    scene.add(markerGroup);
    sensorMarkerGroupRef.current = markerGroup;

    return () => {
      if (sceneRef.current && sensorMarkerGroupRef.current === markerGroup) {
        sceneRef.current.remove(markerGroup);
      }
      disposeObject(markerGroup);
      if (sensorMarkerGroupRef.current === markerGroup) {
        sensorMarkerGroupRef.current = null;
        sensorMarkerLabelAnchorsRef.current = {};
        sensorMarkerNodesRef.current = {};
        sensorMarkerBaseRotationYRef.current = 0;
      }
    };
  }, [modelLoaded, sensorMarkers]);

  useEffect(() => {
    const visibleIdSet = visibleSensorMarkerIdSetRef.current;

    Object.entries(sensorMarkerNodesRef.current).forEach(([id, node]) => {
      if (node) {
        node.visible = visibleIdSet ? visibleIdSet.has(id) : true;
      }
    });

    Object.entries(sensorMarkerLabelElementsRef.current).forEach(([id, element]) => {
      if (element && visibleIdSet && !visibleIdSet.has(id)) {
        element.style.opacity = "0";
      }
    });
  }, [visibleSensorMarkerIds]);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const shouldPrepare =
      modelLoaded && !!roadwaySerialHighlightObjPath && !!modelRef.current;
    const hasVisibleRequest = shouldPrepare && roadwaySerialHighlightVisible;

    if (
      roadwaySerialHighlightRef.current &&
      roadwaySerialHighlightPathRef.current === roadwaySerialHighlightObjPath
    ) {
      roadwaySerialHighlightRef.current.visible = !!hasVisibleRequest;
      return;
    }

    if (roadwaySerialHighlightRef.current) {
      scene.remove(roadwaySerialHighlightRef.current);
      disposeObject(roadwaySerialHighlightRef.current);
      roadwaySerialHighlightRef.current = null;
      roadwaySerialHighlightPathRef.current = undefined;
    }

    if (!hasVisibleRequest || roadwaySerialHighlightLoadingRef.current) {
      return;
    }

    roadwaySerialHighlightLoadingRef.current = true;
    let cancelled = false;
    const loader = new FBXLoader();
    loader.load(
      roadwaySerialHighlightObjPath!,
      (serialObject) => {
        if (cancelled || !sceneRef.current || !modelRef.current) {
          disposeObject(serialObject);
          roadwaySerialHighlightLoadingRef.current = false;
          return;
        }

        normalizeAndAlignRoadwayOverlayToTunnel(
          serialObject,
          modelRef.current,
          tunnelNormalizationRef.current,
        );

        applyRoadwaySerialOverlayStyle(serialObject);
        serialObject.visible = true;
        serialObject.name = "roadway-serial-highlight-overlay";

        sceneRef.current.add(serialObject);
        roadwaySerialHighlightRef.current = serialObject;
        roadwaySerialHighlightPathRef.current = roadwaySerialHighlightObjPath;
        roadwaySerialHighlightLoadingRef.current = false;
      },
      undefined,
      () => {
        roadwaySerialHighlightLoadingRef.current = false;
      },
    );

    return () => {
      cancelled = true;
    };
  }, [modelLoaded, roadwaySerialHighlightObjPath, roadwaySerialHighlightVisible]);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const refreshResolvedRoadwayPointLabels = () => {
      const baseLabels = buildRoadwayPointLabels(
        roadwayPointWorldPositionsRef.current.length,
        roadwayPointLabelsRef.current,
        autoFillRoadwayPointLabels,
      );
      const nearestSerialByIndex = roadwayPointNearestSerialByIndexRef.current;
      if (nearestSerialByIndex.size === 0) {
        setResolvedRoadwayPointLabels(baseLabels);
        return;
      }
      const patchedLabels = baseLabels.map((label) => {
        const serialNo = nearestSerialByIndex.get(label.pointIndex);
        return serialNo != null ? { ...label, serialNo } : label;
      });
      setResolvedRoadwayPointLabels(patchedLabels);
    };

    const rebuildNearestSerialByCachedReference = (): boolean => {
      if (
        !roadwayPointSerialReferenceObjPath ||
        roadwayPointWorldPositionsRef.current.length === 0
      ) {
        roadwayPointNearestSerialByIndexRef.current = new Map();
        return true;
      }
      if (
        roadwayPointSerialReferencePathRef.current !== roadwayPointSerialReferenceObjPath ||
        roadwayPointSerialReferencePointsRef.current.length === 0
      ) {
        return false;
      }
      roadwayPointNearestSerialByIndexRef.current = buildNearestSerialAssignmentByPointIndex(
        roadwayPointWorldPositionsRef.current,
        roadwayPointSerialReferencePointsRef.current,
      );
      return true;
    };

    const shouldLoad =
      modelLoaded &&
      !!roadwayPointObjPath &&
      !!modelRef.current;

    if (!shouldLoad) {
      if (roadwayPointOverlayRef.current) {
        roadwayPointOverlayRef.current.visible = false;
      }
      roadwayPointWorldPositionsRef.current = [];
      roadwayPointIndexBySerialRef.current = new Map();
      roadwayPointIndexByNormalizedSerialRef.current = new Map();
      roadwayPointNearestSerialByIndexRef.current = new Map();
      setResolvedRoadwayPointLabels([]);
      return;
    }

    let cancelled = false;
    const loadSerialReferenceForNearestMapping = () => {
      if (
        !roadwayPointSerialReferenceObjPath ||
        roadwayPointWorldPositionsRef.current.length === 0 ||
        !modelRef.current ||
        roadwayPointSerialReferenceLoadingRef.current
      ) {
        return;
      }
      if (
        roadwayPointSerialReferencePathRef.current === roadwayPointSerialReferenceObjPath &&
        roadwayPointSerialReferencePointsRef.current.length > 0
      ) {
        roadwayPointNearestSerialByIndexRef.current = buildNearestSerialAssignmentByPointIndex(
          roadwayPointWorldPositionsRef.current,
          roadwayPointSerialReferencePointsRef.current,
        );
        refreshResolvedRoadwayPointLabels();
        return;
      }

      roadwayPointSerialReferenceLoadingRef.current = true;
      const serialLoader = new FBXLoader();
      serialLoader.load(
        roadwayPointSerialReferenceObjPath,
        (serialObject) => {
          if (cancelled || !modelRef.current) {
            disposeObject(serialObject);
            roadwayPointSerialReferenceLoadingRef.current = false;
            return;
          }
          normalizeAndAlignRoadwayOverlayToTunnel(
            serialObject,
            modelRef.current,
            tunnelNormalizationRef.current,
          );

          roadwayPointSerialReferencePathRef.current = roadwayPointSerialReferenceObjPath;
          roadwayPointSerialReferencePointsRef.current =
            collectNormalizedSerialReferencePoints(serialObject);
          roadwayPointNearestSerialByIndexRef.current = buildNearestSerialAssignmentByPointIndex(
            roadwayPointWorldPositionsRef.current,
            roadwayPointSerialReferencePointsRef.current,
          );
          refreshResolvedRoadwayPointLabels();
          disposeObject(serialObject);
          roadwayPointSerialReferenceLoadingRef.current = false;
        },
        undefined,
        () => {
          roadwayPointSerialReferenceLoadingRef.current = false;
        },
      );
    };

    if (
      roadwayPointOverlayRef.current &&
      roadwayPointOverlayPathRef.current === roadwayPointObjPath
    ) {
      roadwayPointOverlayRef.current.visible = roadwayPointOverlayVisible;
      roadwayPointOverlayRef.current.traverse((node) => {
        if (node instanceof THREE.Mesh) {
          node.visible = roadwayPointOverlayVisible;
        }
      });
      if (roadwayPointWorldPositionsRef.current.length === 0) {
        const collection = collectObjectMeshCenters(
          roadwayPointOverlayRef.current,
          roadwayPointSerialNameMap,
        );
        roadwayPointWorldPositionsRef.current = collection.points;
        roadwayPointIndexBySerialRef.current = collection.indexBySerial;
        roadwayPointIndexByNormalizedSerialRef.current =
          collection.indexByNormalizedSerial;
      }
      const hasCachedNearest = rebuildNearestSerialByCachedReference();
      refreshResolvedRoadwayPointLabels();
      if (!hasCachedNearest) {
        loadSerialReferenceForNearestMapping();
      }
      return () => {
        cancelled = true;
      };
    }

    if (roadwayPointOverlayRef.current) {
      scene.remove(roadwayPointOverlayRef.current);
      disposeObject(roadwayPointOverlayRef.current);
      roadwayPointOverlayRef.current = null;
      roadwayPointOverlayPathRef.current = undefined;
      roadwayPointWorldPositionsRef.current = [];
      roadwayPointIndexBySerialRef.current = new Map();
      roadwayPointIndexByNormalizedSerialRef.current = new Map();
      roadwayPointNearestSerialByIndexRef.current = new Map();
      setResolvedRoadwayPointLabels([]);
    }

    if (roadwayPointLoadingRef.current) return;
    roadwayPointLoadingRef.current = true;

    const loader = new FBXLoader();
    loader.load(
      roadwayPointObjPath!,
      (pointObject) => {
        if (cancelled || !sceneRef.current || !modelRef.current) {
          disposeObject(pointObject);
          roadwayPointLoadingRef.current = false;
          return;
        }

        normalizeAndAlignRoadwayOverlayToTunnel(
          pointObject,
          modelRef.current,
          tunnelNormalizationRef.current,
        );

        const collection = collectObjectMeshCenters(
          pointObject,
          roadwayPointSerialNameMap,
        );
        applyRoadwaySerialOverlayStyle(pointObject);
        pointObject.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.visible = roadwayPointOverlayVisible;
          }
        });
        pointObject.visible = roadwayPointOverlayVisible;
        pointObject.name = "roadway-point-overlay";

        sceneRef.current.add(pointObject);
        roadwayPointOverlayRef.current = pointObject;
        roadwayPointOverlayPathRef.current = roadwayPointObjPath;
        roadwayPointWorldPositionsRef.current = collection.points;
        roadwayPointIndexBySerialRef.current = collection.indexBySerial;
        roadwayPointIndexByNormalizedSerialRef.current =
          collection.indexByNormalizedSerial;
        const hasCachedNearest = rebuildNearestSerialByCachedReference();
        refreshResolvedRoadwayPointLabels();
        if (!hasCachedNearest) {
          loadSerialReferenceForNearestMapping();
        }
        roadwayPointLoadingRef.current = false;
      },
      undefined,
      () => {
        roadwayPointLoadingRef.current = false;
      },
    );

    return () => {
      cancelled = true;
    };
  }, [
    modelLoaded,
    roadwayPointLabels,
    roadwayPointObjPath,
    roadwayPointSerialReferenceObjPath,
    roadwayPointOverlayVisible,
    autoFillRoadwayPointLabels,
    roadwayPointSerialNameMap,
  ]);

  return (
    <>
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "auto",
          cursor: modelLoaded && !disableRotation ? "grab" : "default",
        }}
        onMouseDown={(e) => {
          if (!disableRotation && e.currentTarget.style.cursor === "grab") {
            e.currentTarget.style.cursor = "grabbing";
          }
        }}
        onMouseUp={(e) => {
          if (modelLoaded && !disableRotation) {
            e.currentTarget.style.cursor = "grab";
          }
        }}
      />

      {sensorMarkers.length > 0 && (
        <div
          ref={sensorMarkerLabelLayerRef}
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 4,
          }}
        >
          {sensorMarkers.map((marker) => {
            const markerColor = marker.color ?? "#28e6d2";
            return (
              <div
                key={marker.id}
                ref={(node) => {
                  sensorMarkerLabelElementsRef.current[marker.id] = node;
                }}
                style={{
                  position: "absolute",
                  left: "-9999px",
                  top: "-9999px",
                  transform: "translate(-50%, -100%) scale(0.92)",
                  opacity: 0,
                  transition: "opacity 180ms ease, transform 180ms ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "5px 8px",
                  borderRadius: 8,
                  border: `1px solid ${marker.borderColor ?? markerColor}`,
                  background:
                    marker.background ??
                    "linear-gradient(135deg, rgba(7, 20, 36, 0.9) 0%, rgba(13, 43, 67, 0.84) 100%)",
                  boxShadow:
                    "0 8px 18px rgba(2, 12, 25, 0.42), inset 0 1px 0 rgba(210, 245, 255, 0.18)",
                  backdropFilter: "blur(3px)",
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                  "--sensor-leader-width": "14px",
                  "--sensor-leader-angle": "90deg",
                  "--sensor-leader-color": markerColor,
                  "--sensor-leader-opacity": "0",
                } as CSSProperties}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "100%",
                    width: "var(--sensor-leader-width)",
                    height: 1,
                    transformOrigin: "0 50%",
                    transform: "rotate(var(--sensor-leader-angle))",
                    background:
                      "linear-gradient(90deg, var(--sensor-leader-color) 0%, rgba(255,255,255,0.72) 100%)",
                    boxShadow: "0 0 8px var(--sensor-leader-color)",
                    opacity: "var(--sensor-leader-opacity)",
                    pointerEvents: "none",
                  }}
                />
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: markerColor,
                    boxShadow: `0 0 10px ${markerColor}`,
                  }}
                />
                <span
                  style={{
                    color: "#f1fbff",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {marker.label}
                </span>
                {marker.count != null && marker.count > 1 && (
                  <span
                    style={{
                      color: markerColor,
                      fontSize: 12,
                      fontWeight: 800,
                    }}
                  >
                    {marker.count}
                    {marker.unit ?? "台"}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {airflowLabels.length > 0 && (
        <div
          ref={labelLayerRef}
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          {airflowLabels.map((item) => {
            const airflowText =
              typeof item.airflow === "number"
                ? item.airflow.toFixed(1)
                : item.airflow;
            return (
              <div
                key={item.id}
                ref={(node) => {
                  labelElementsRef.current[item.id] = node;
                }}
                style={{
                  position: "absolute",
                  left: "-9999px",
                  top: "-9999px",
                  transform: `translate(-50%, calc(-100% - ${LABEL_LEADER_LENGTH_PX}px)) scale(0.92)`,
                  opacity: 0,
                  transition: "opacity 180ms ease, transform 180ms ease",
                  padding: "6px 10px",
                  borderRadius: 8,
                  border: `1px solid ${item.borderColor ?? "rgba(129, 186, 246, 0.72)"}`,
                  background:
                    item.background ??
                    "linear-gradient(180deg, rgba(11, 36, 64, 0.9) 0%, rgba(20, 57, 94, 0.82) 100%)",
                  boxShadow:
                    "0 6px 16px rgba(7, 21, 38, 0.36), inset 0 1px 0 rgba(176, 220, 255, 0.18)",
                  backdropFilter: "blur(2px)",
                  whiteSpace: "nowrap",
                  lineHeight: 1.2,
                }}
              >
                <div
                  style={{
                    color: item.color ?? "#cfe9ff",
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 2,
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    color: "#ffffff",
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: 0.2,
                  }}
                >
                  {airflowText} {item.unit ?? "m³/s"}
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "100%",
                    width: 2,
                    height: LABEL_LEADER_LENGTH_PX,
                    transform: "translateX(-50%)",
                    background:
                      item.leaderColor ??
                      "linear-gradient(180deg, rgba(124, 196, 255, 0.88) 0%, rgba(95, 170, 242, 0.9) 100%)",
                    boxShadow: "0 0 10px rgba(118, 188, 255, 0.75)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: `calc(100% + ${LABEL_LEADER_LENGTH_PX}px)`,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    background: item.markerColor ?? "#8ed0ff",
                    border: "1px solid rgba(186, 229, 255, 0.95)",
                    boxShadow:
                      "0 0 0 2px rgba(86, 153, 219, 0.28), 0 0 12px rgba(143, 212, 255, 0.85)",
                  }}
                />
              </div>
            );
          })}
        </div>
      )}

      {resolvedRoadwayPointLabels.length > 0 && (
        <div
          ref={roadwayPointLabelLayerRef}
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 3,
          }}
        >
          {resolvedRoadwayPointLabels.map((item) => {
            const serialText = String(
              Number.isInteger(item.serialNo) && (item.serialNo ?? 0) > 0
                ? item.serialNo
                : item.pointIndex + 1,
            ).padStart(2, "0");
            const showSerialBadge = roadwayPointShowSerial;
            const airflowText =
              typeof item.airflow === "number"
                ? item.airflow.toFixed(1)
                : item.airflow;
            const showAirflowText =
              airflowText != null &&
              String(airflowText).trim().length > 0;
            return (
              <div
                key={item.id}
                ref={(node) => {
                  roadwayPointLabelElementsRef.current[item.id] = node;
                }}
                style={{
                  position: "absolute",
                  left: "-9999px",
                  top: "-9999px",
                  transform: `translate(-50%, calc(-100% - ${LABEL_LEADER_LENGTH_PX}px)) scale(0.92)`,
                  opacity: 0,
                  transition: "opacity 180ms ease, transform 180ms ease",
                  padding: "7px 10px",
                  borderRadius: 10,
                  border: `1px solid ${item.borderColor ?? "rgba(132, 220, 255, 0.86)"}`,
                  background:
                    item.background ??
                    "linear-gradient(135deg, rgba(8, 20, 42, 0.92) 0%, rgba(20, 48, 88, 0.9) 45%, rgba(9, 29, 56, 0.94) 100%)",
                  boxShadow:
                    "0 10px 24px rgba(3, 11, 25, 0.46), 0 0 20px rgba(77, 168, 255, 0.3), inset 0 1px 0 rgba(210, 240, 255, 0.26)",
                  backdropFilter: "blur(3px)",
                  whiteSpace: "nowrap",
                  lineHeight: 1.2,
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: showSerialBadge ? 6 : 0,
                    marginBottom: showAirflowText ? 2 : 0,
                  }}
                >
                  {showSerialBadge && (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: 22,
                        height: 16,
                        padding: "0 4px",
                        borderRadius: 8,
                        color: "#092235",
                        background:
                          "linear-gradient(180deg, rgba(161, 241, 255, 0.96) 0%, rgba(106, 210, 255, 0.9) 100%)",
                        border: "1px solid rgba(205, 247, 255, 0.95)",
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: 0.2,
                        boxShadow: "0 0 14px rgba(120, 225, 255, 0.58)",
                      }}
                    >
                      {serialText}
                    </span>
                  )}
                  <span
                    style={{
                      color: item.color ?? "#f0fbff",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: 0.2,
                      textShadow: "0 0 8px rgba(123, 201, 255, 0.42)",
                    }}
                  >
                    {item.name}
                  </span>
                </div>
                {showAirflowText && (
                  <div
                    style={{
                      color: "#9ee8ff",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: 0.25,
                      textShadow: "0 0 10px rgba(78, 205, 255, 0.45)",
                    }}
                  >
                    {airflowText} {item.unit ?? "m³/s"}
                  </div>
                )}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "100%",
                    width: 2,
                    height: LABEL_LEADER_LENGTH_PX,
                    transform: "translateX(-50%)",
                    background:
                      item.leaderColor ??
                      "linear-gradient(180deg, rgba(142, 232, 255, 0.92) 0%, rgba(92, 170, 240, 0.88) 100%)",
                    boxShadow: "0 0 10px rgba(110, 205, 255, 0.6)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: `calc(100% + ${LABEL_LEADER_LENGTH_PX}px)`,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    background: item.markerColor ?? "#74d2ff",
                    border: "1px solid rgba(223, 239, 255, 0.92)",
                    boxShadow:
                      "0 0 0 2px rgba(56, 137, 206, 0.28), 0 0 16px rgba(117, 220, 255, 0.86)",
                  }}
                />
              </div>
            );
          })}
        </div>
      )}

      {!modelLoaded && !loadingError && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "rgba(120, 180, 240, 0.8)",
            fontSize: "14px",
            textAlign: "center",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <div>正在加载巷道模型...</div>
          <div style={{ marginTop: "8px", fontSize: "12px" }}>
            {loadingProgress > 0 ? `${loadingProgress.toFixed(0)}%` : "准备中..."}
          </div>
        </div>
      )}

      {loadingError && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "rgba(255, 100, 100, 0.85)",
            fontSize: "14px",
            textAlign: "center",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <div>模型加载失败</div>
          <div style={{ marginTop: "8px", fontSize: "12px" }}>{loadingError}</div>
        </div>
      )}
    </>
  );
}
