import { useEffect, useRef } from 'react';

interface HomeObjBackgroundProps {
  paused?: boolean;
  rotationSpeed?: number;
  opacity?: number;
  brightness?: number;
}

export function HomeObjBackground({
  paused = false,
  rotationSpeed = 0.06,
  opacity = 0.58,
  brightness = 1,
}: HomeObjBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布尺寸
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // 粒子系统
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
    }> = [];

    // 初始化粒子
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: Math.random() * (paused ? 0 : rotationSpeed * 30) + 0.5,
      });
    }

    // 动画循环
    let animationId: number;
    const animate = () => {
      // 半透明背景
      ctx.fillStyle = `rgba(10, 25, 41, ${0.1 * opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 绘制网格
      ctx.strokeStyle = `rgba(120, 180, 240, ${0.08 * opacity * brightness})`;
      ctx.lineWidth = 1;

      // 垂直线
      for (let x = 0; x < canvas.width; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // 水平线
      for (let y = 0; y < canvas.height; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      if (!paused) {
        // 更新和绘制粒子
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.z -= p.vz;

          // 重置粒子
          if (p.z < 0) {
            p.z = 1000;
            p.x = Math.random() * canvas.width;
            p.y = Math.random() * canvas.height;
          }

          // 3D投影
          const scale = 1000 / (1000 + p.z);
          const x2d = canvas.width / 2 + (p.x - canvas.width / 2) * scale;
          const y2d = canvas.height / 2 + (p.y - canvas.height / 2) * scale;
          const size = scale * 2.5;

          // 绘制粒子
          const alpha = (1 - p.z / 1000) * opacity * brightness;
          ctx.fillStyle = `rgba(120, 180, 240, ${alpha * 0.8})`;
          ctx.beginPath();
          ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
          ctx.fill();

          // 绘制光晕
          const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size * 3);
          gradient.addColorStop(0, `rgba(120, 180, 240, ${alpha * 0.3})`);
          gradient.addColorStop(1, 'rgba(120, 180, 240, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x2d, y2d, size * 3, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [paused, rotationSpeed, opacity, brightness]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
