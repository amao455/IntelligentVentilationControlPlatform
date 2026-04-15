import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
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
}

interface TunnelNormalization {
  rotateX: number;
  rotateY: number;
  uniformScale: number;
  centerOffset: THREE.Vector3;
}

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

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
    ctx.fillStyle = "#8a9aa8";
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 8000; i += 1) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const size = Math.random() * 2 + 0.5;
      const brightness = Math.random() * 60 - 30;
      const gray = 138 + brightness;
      ctx.fillStyle = `rgb(${gray}, ${gray + 10}, ${gray + 18})`;
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
    ctx.fillStyle = "rgb(220, 220, 220)";
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 2000; i += 1) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const size = Math.random() * 4 + 1;
      const gray = 180 + Math.random() * 60;
      ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
      ctx.fillRect(x, y, size, size);
    }
  });

  return { map, normalMap, roughnessMap };
}

function applyTunnelMaterial(object: THREE.Object3D, opacity: number) {
  const textures = createConcreteTextureSet();
  const base = new THREE.MeshStandardMaterial({
    map: textures.map,
    normalMap: textures.normalMap,
    normalScale: new THREE.Vector2(0.5, 0.5),
    roughnessMap: textures.roughnessMap,
    roughness: 0.9,
    metalness: 0.08,
    color: 0xb0c0d0,
    transparent: true,
    opacity,
    side: THREE.DoubleSide,
    emissive: 0x3a7db8,
    emissiveIntensity: 0.15,
    envMapIntensity: 0.4,
    aoMapIntensity: 0.5,
  });

  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const material = base.clone();
      const randomVariation = Math.random();
      material.roughness = 0.85 + randomVariation * 0.1;
      material.metalness = 0.05 + randomVariation * 0.07;
      material.emissiveIntensity = 0.12 + randomVariation * 0.08;
      material.color.multiplyScalar(1 - randomVariation * 0.08);
      child.material = material;
      child.castShadow = true;
      child.receiveShadow = true;
    }
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
}: HomeObjBackground3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const routeOverlayRef = useRef<THREE.Group | null>(null);
  const tunnelNormalizationRef = useRef<TunnelNormalization | null>(null);
  const routeOverlayLoadingRef = useRef(false);
  const animationIdRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingError, setLoadingError] = useState<string | null>(null);
  const [modelLoaded, setModelLoaded] = useState(false);

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
    renderer.setClearColor(0x11365e, 1);
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

    scene.add(new THREE.AmbientLight(0x6bb5f0, brightness * 1.2));

    const directionalLight1 = new THREE.DirectionalLight(
      0x9cd0ff,
      brightness * 1.5,
    );
    directionalLight1.position.set(50000, 50000, 50000);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(
      0x4a9de8,
      brightness,
    );
    directionalLight2.position.set(-50000, 30000, -50000);
    scene.add(directionalLight2);

    const backLight = new THREE.DirectionalLight(0x5a8fc7, brightness * 0.8);
    backLight.position.set(0, -30000, -50000);
    scene.add(backLight);

    const pointLight = new THREE.PointLight(0x9cd0ff, brightness * 3, 200000);
    pointLight.position.set(0, 30000, 0);
    scene.add(pointLight);

    const accentLight1 = new THREE.PointLight(0x4a9de8, brightness * 2, 150000);
    accentLight1.position.set(40000, 20000, 40000);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0x6bb5f0, brightness * 2, 150000);
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
      }
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
      routeOverlayRef.current = null;
      tunnelNormalizationRef.current = null;
      routeOverlayLoadingRef.current = false;
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
        const normalization = tunnelNormalizationRef.current;
        if (normalization) {
          applyTunnelNormalizationToOverlay(overlayObject, normalization);
        }
        if (!isOverlayCloseToTunnel(overlayObject, modelRef.current)) {
          alignOverlayToTunnel(overlayObject, modelRef.current);
        }

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
