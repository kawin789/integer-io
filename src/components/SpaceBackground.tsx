import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  opacity: number;
  twinkle: number;
}

interface Asteroid {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  depth: number;
}

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();
  const starsRef = useRef<Star[]>([]);
  const asteroidsRef = useRef<Asteroid[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      starsRef.current = [];
      // Further reduced for mobile performance
      const starCount = window.innerWidth < 768 ? 60 : 100;
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.15,
          opacity: Math.random() * 0.6 + 0.25,
          twinkle: Math.random() * Math.PI * 2
        });
      }
    };

    const createAsteroids = () => {
      asteroidsRef.current = [];
      const asteroidCount = window.innerWidth < 768 ? 2 : 4;
      for (let i = 0; i < asteroidCount; i++) {
        asteroidsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 1.5,
          speed: Math.random() * 0.2 + 0.08,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.012,
          depth: Math.random() * 0.25 + 0.75
        });
      }
    };

    const drawStar = (star: Star) => {
      ctx.save();
      
      const scale = 1000 / (1000 + star.z);
      const x = star.x * scale;
      const y = star.y * scale;
      const size = star.size * scale;
      
      star.twinkle += 0.02;
      const twinkleOpacity = star.opacity * (0.5 + 0.5 * Math.sin(star.twinkle));
      
      ctx.globalAlpha = twinkleOpacity;
      
      const starColor = isDark ? '#ffffff' : '#4338ca';
      ctx.fillStyle = starColor;
      ctx.shadowBlur = 12 * scale;
      ctx.shadowColor = starColor;
      
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
      
      // Cross lines for star effect
      ctx.strokeStyle = starColor;
      ctx.lineWidth = 0.5 * scale;
      ctx.beginPath();
      ctx.moveTo(x - size * 2, y);
      ctx.lineTo(x + size * 2, y);
      ctx.moveTo(x, y - size * 2);
      ctx.lineTo(x, y + size * 2);
      ctx.stroke();
      
      ctx.restore();
    };

    const drawAsteroid = (asteroid: Asteroid) => {
      ctx.save();
      ctx.translate(asteroid.x, asteroid.y);
      ctx.rotate(asteroid.rotation);
      ctx.scale(asteroid.depth, asteroid.depth);
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, asteroid.size);
      if (isDark) {
        gradient.addColorStop(0, '#a855f7');
        gradient.addColorStop(0.3, '#8b5cf6');
        gradient.addColorStop(0.6, '#7c3aed');
        gradient.addColorStop(1, '#581c87');
      } else {
        gradient.addColorStop(0, '#ddd6fe');
        gradient.addColorStop(0.3, '#c4b5fd');
        gradient.addColorStop(0.6, '#a78bfa');
        gradient.addColorStop(1, '#8b5cf6');
      }
      
      ctx.fillStyle = gradient;
      ctx.shadowBlur = 10;
      ctx.shadowColor = isDark ? '#8b5cf6' : '#7c3aed';
      
      ctx.beginPath();
      const points = 4;
      for (let i = 0; i < points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const radius = asteroid.size * (0.85 + Math.random() * 0.15);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fill();
      
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = isDark ? 'rgba(139, 92, 246, 0.25)' : 'rgba(124, 58, 237, 0.15)';
      ctx.fill();
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach(star => {
        star.z -= star.speed * 1.0;
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
        drawStar(star);
      });

      asteroidsRef.current.forEach(asteroid => {
        asteroid.x -= asteroid.speed * 0.85;
        asteroid.rotation += asteroid.rotationSpeed;
        
        if (asteroid.x < -asteroid.size * 2) {
          asteroid.x = canvas.width + asteroid.size * 2;
          asteroid.y = Math.random() * canvas.height;
        }
        
        drawAsteroid(asteroid);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    createAsteroids();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createStars();
      createAsteroids();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: isDark 
          ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 30%, #16213e 70%, #0f0f23 100%)' 
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 30%, #cbd5e1 70%, #94a3b8 100%)'
      }}
    />
  );
};

export default SpaceBackground;