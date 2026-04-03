import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface HomeObjBackground3DProps {
  paused?: boolean;
  rotationSpeed?: number;
  opacity?: number;
  brightness?: number;
  disableRotation?: boolean;
  viewScale?: number;
  viewAzimuthDeg?: number;
}

function centerObjectAtOrigin(object: THREE.Object3D) {
  object.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(object);
  const center = box.getCenter(new THREE.Vector3());
  object.position.sub(center);
  object.updateMatrixWorld(true);
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
  camera.near = Math.max(distance / 1000, 0.1); // 降低近裁剪面，允许更近距离观察
  camera.far = Math.max(distance * 20, 100000);
  camera.updateProjectionMatrix();
  camera.lookAt(0, 0, 0);

  controls.target.set(0, 0, 0);
  controls.minDistance = Math.max(radius * 0.1, 500); // 大幅降低最小距离限制，允许更近距离观察
  controls.maxDistance = distance * 6;
  controls.update();
}

export function HomeObjBackground3D({
  paused = false,
  rotationSpeed = 0.06,
  opacity = 0.35,
  brightness = 1.2,
  disableRotation = false,
  viewScale = 1,
  viewAzimuthDeg = 0,
}: HomeObjBackground3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
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
      powerPreference: 'high-performance',
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
    controls.addEventListener('start', handleControlStart);
    controls.addEventListener('end', handleControlEnd);

    const ambientLight = new THREE.AmbientLight(0x6bb5f0, brightness * 1.2);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x9cd0ff, brightness * 1.5);
    directionalLight1.position.set(50000, 50000, 50000);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x4a9de8, brightness * 1.0);
    directionalLight2.position.set(-50000, 30000, -50000);
    scene.add(directionalLight2);

    const backLight = new THREE.DirectionalLight(0x5a8fc7, brightness * 0.8);
    backLight.position.set(0, -30000, -50000);
    scene.add(backLight);

    const pointLight = new THREE.PointLight(0x9cd0ff, brightness * 3.0, 200000);
    pointLight.position.set(0, 30000, 0);
    scene.add(pointLight);

    // 添加额外的点光源增强炫酷效果
    const accentLight1 = new THREE.PointLight(0x4a9de8, brightness * 2.0, 150000);
    accentLight1.position.set(40000, 20000, 40000);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(0x6bb5f0, brightness * 2.0, 150000);
    accentLight2.position.set(-40000, 20000, -40000);
    scene.add(accentLight2);

    const loadingManager = new THREE.LoadingManager();
    const loader = new OBJLoader(loadingManager);
    const modelPath = '/models/IntegralTunnel.obj';

    loader.load(
      modelPath,
      (object) => {
        modelRef.current = object;

        // 创建程序化纹理 - 模拟混凝土表面
        const createConcreteTexture = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 512;
          canvas.height = 512;
          const ctx = canvas.getContext('2d');
          if (!ctx) return null;

          // 基础灰色背景
          ctx.fillStyle = '#8a9aa8';
          ctx.fillRect(0, 0, 512, 512);

          // 添加噪点模拟混凝土颗粒
          for (let i = 0; i < 8000; i++) {
            const x = Math.random() * 512;
            const y = Math.random() * 512;
            const size = Math.random() * 2 + 0.5;
            const brightness = Math.random() * 60 - 30;
            const gray = 138 + brightness;
            ctx.fillStyle = `rgb(${gray}, ${gray + 10}, ${gray + 18})`;
            ctx.fillRect(x, y, size, size);
          }

          // 添加裂纹效果
          ctx.strokeStyle = 'rgba(70, 80, 90, 0.3)';
          ctx.lineWidth = 1;
          for (let i = 0; i < 15; i++) {
            ctx.beginPath();
            const startX = Math.random() * 512;
            const startY = Math.random() * 512;
            ctx.moveTo(startX, startY);
            let x = startX;
            let y = startY;
            for (let j = 0; j < 5; j++) {
              x += (Math.random() - 0.5) * 80;
              y += (Math.random() - 0.5) * 80;
              ctx.lineTo(x, y);
            }
            ctx.stroke();
          }

          const texture = new THREE.CanvasTexture(canvas);
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(4, 4);
          return texture;
        };

        // 创建法线贴图 - 增加表面凹凸感
        const createNormalMap = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 512;
          canvas.height = 512;
          const ctx = canvas.getContext('2d');
          if (!ctx) return null;

          // 基础法线颜色 (128, 128, 255) 表示平面
          ctx.fillStyle = 'rgb(128, 128, 255)';
          ctx.fillRect(0, 0, 512, 512);

          // 添加随机凹凸
          for (let i = 0; i < 3000; i++) {
            const x = Math.random() * 512;
            const y = Math.random() * 512;
            const size = Math.random() * 3 + 1;
            const r = 128 + (Math.random() - 0.5) * 40;
            const g = 128 + (Math.random() - 0.5) * 40;
            const b = 255 - Math.random() * 30;
            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(x, y, size, size);
          }

          const texture = new THREE.CanvasTexture(canvas);
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(4, 4);
          return texture;
        };

        // 创建粗糙度贴图
        const createRoughnessMap = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 512;
          canvas.height = 512;
          const ctx = canvas.getContext('2d');
          if (!ctx) return null;

          // 基础高粗糙度
          ctx.fillStyle = 'rgb(220, 220, 220)';
          ctx.fillRect(0, 0, 512, 512);

          // 添加变化
          for (let i = 0; i < 2000; i++) {
            const x = Math.random() * 512;
            const y = Math.random() * 512;
            const size = Math.random() * 4 + 1;
            const gray = 180 + Math.random() * 60;
            ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
            ctx.fillRect(x, y, size, size);
          }

          const texture = new THREE.CanvasTexture(canvas);
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.set(4, 4);
          return texture;
        };

        const concreteTexture = createConcreteTexture();
        const normalMap = createNormalMap();
        const roughnessMap = createRoughnessMap();

        // 创建增强的巷道材质
        const tunnelMaterial = new THREE.MeshStandardMaterial({
          map: concreteTexture,
          normalMap: normalMap,
          normalScale: new THREE.Vector2(0.5, 0.5), // 法线强度
          roughnessMap: roughnessMap,
          roughness: 0.9, // 基础粗糙度
          metalness: 0.08, // 降低金属度，更像混凝土
          color: 0xb0c0d0, // 稍微提亮基础色
          transparent: true,
          opacity,
          side: THREE.DoubleSide,
          emissive: 0x3a7db8, // 调整自发光颜色
          emissiveIntensity: 0.15, // 进一步降低发光强度
          envMapIntensity: 0.4, // 降低环境反射
          aoMapIntensity: 0.5, // 环境光遮蔽强度
        });

        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const material = tunnelMaterial.clone();
            child.material = material;
            child.castShadow = true;
            child.receiveShadow = true;

            // 为不同部分添加更多变化
            const randomVariation = Math.random();
            if (material instanceof THREE.MeshStandardMaterial) {
              // 粗糙度变化 (0.85 - 0.95)
              material.roughness = 0.85 + randomVariation * 0.1;
              // 金属度变化 (0.05 - 0.12)
              material.metalness = 0.05 + randomVariation * 0.07;
              // 颜色细微变化
              const colorVariation = 1 - randomVariation * 0.08;
              material.color.multiplyScalar(colorVariation);
              // 自发光强度变化
              material.emissiveIntensity = 0.12 + randomVariation * 0.08;
            }
          }
        });

        const preBox = new THREE.Box3().setFromObject(object);
        const preSize = preBox.getSize(new THREE.Vector3());
        if (preSize.y < preSize.x * 0.1 && preSize.y < preSize.z * 0.1) {
          object.rotation.x = Math.PI / 2;
        }
        object.rotation.y = Math.PI / 6;

        const rawBox = new THREE.Box3().setFromObject(object);
        const rawSize = rawBox.getSize(new THREE.Vector3());
        const maxDim = Math.max(rawSize.x, rawSize.y, rawSize.z) || 1;
        const targetSize = 120000;
        const scale = targetSize / maxDim;
        object.scale.setScalar(scale);

        centerObjectAtOrigin(object);
        scene.add(object);
        fitCameraToObject(object, camera, controls, viewScale, viewAzimuthDeg);

        setModelLoaded(true);
      },
      (xhr) => {
        if (xhr.lengthComputable) {
          setLoadingProgress((xhr.loaded / xhr.total) * 100);
        }
      },
      (error) => {
        setLoadingError(error instanceof Error ? error.message : '模型加载失败');
      },
    );

    const animate = () => {
      if (controlsRef.current) {
        controlsRef.current.update();
      }

      if (!paused && !disableRotation && modelRef.current && !isInteractingRef.current) {
        modelRef.current.rotation.y += rotationSpeed * 0.01;
      }

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!container || !camera || !renderer) return;

      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);

      if (modelRef.current && controlsRef.current) {
        fitCameraToObject(modelRef.current, camera, controlsRef.current, viewScale, viewAzimuthDeg);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (controlsRef.current) {
        controlsRef.current.removeEventListener('start', handleControlStart);
        controlsRef.current.removeEventListener('end', handleControlEnd);
        controlsRef.current.dispose();
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
      }

      if (sceneRef.current) {
        sceneRef.current.traverse((sceneObject) => {
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
    };
  }, [paused, rotationSpeed, opacity, brightness, disableRotation, viewScale, viewAzimuthDeg]);

  return (
    <>
      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'auto',
          cursor: modelLoaded && !disableRotation ? 'grab' : 'default',
        }}
        onMouseDown={(e) => {
          if (!disableRotation && e.currentTarget.style.cursor === 'grab') {
            e.currentTarget.style.cursor = 'grabbing';
          }
        }}
        onMouseUp={(e) => {
          if (modelLoaded && !disableRotation) {
            e.currentTarget.style.cursor = 'grab';
          }
        }}
      />

      {!modelLoaded && !loadingError && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'rgba(120, 180, 240, 0.8)',
            fontSize: '14px',
            textAlign: 'center',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          <div>正在加载巷道模型...</div>
          <div style={{ marginTop: '8px', fontSize: '12px' }}>
            {loadingProgress > 0 ? `${loadingProgress.toFixed(0)}%` : '准备中...'}
          </div>
        </div>
      )}

      {loadingError && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'rgba(255, 100, 100, 0.85)',
            fontSize: '14px',
            textAlign: 'center',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          <div>模型加载失败</div>
          <div style={{ marginTop: '8px', fontSize: '12px' }}>{loadingError}</div>
        </div>
      )}
    </>
  );
}
