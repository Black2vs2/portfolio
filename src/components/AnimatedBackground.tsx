import { useEffect, useRef } from 'react';

interface Block {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blocksRef = useRef<Block[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Vibrant colors for blocks
    const colors = [
      '#8B5CF6', // Purple
      '#06B6D4', // Cyan
      '#EC4899', // Pink
      '#3B82F6', // Blue
      '#F59E0B', // Amber
      '#10B981', // Emerald
      '#6366F1', // Indigo
      '#F97316', // Orange
    ];

    // Initialize blocks
    const initBlocks = () => {
      const blockCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
      blocksRef.current = Array.from({ length: blockCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 60 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      }));
    };
    initBlocks();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blocksRef.current.forEach((block) => {
        // Calculate distance to mouse
        const dx = mouseRef.current.x - block.x;
        const dy = mouseRef.current.y - block.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        // Mouse influence
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          block.vx += (dx / distance) * force * 0.1;
          block.vy += (dy / distance) * force * 0.1;
        }

        // Apply velocity with damping
        block.vx *= 0.98;
        block.vy *= 0.98;

        // Update position
        block.x += block.vx;
        block.y += block.vy;

        // Bounce off edges
        if (block.x < -block.size) block.x = canvas.width + block.size;
        if (block.x > canvas.width + block.size) block.x = -block.size;
        if (block.y < -block.size) block.y = canvas.height + block.size;
        if (block.y > canvas.height + block.size) block.y = -block.size;

        // Update rotation
        block.rotation += block.rotationSpeed;

        // Draw block
        ctx.save();
        ctx.translate(block.x, block.y);
        ctx.rotate(block.rotation);

        // Create gradient for depth
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, block.size);
        gradient.addColorStop(0, block.color);
        gradient.addColorStop(1, block.color + '00');

        // Draw rounded square
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.15;
        const roundedSize = block.size / 2;
        ctx.beginPath();
        ctx.roundRect(-roundedSize, -roundedSize, block.size, block.size, 10);
        ctx.fill();

        // Draw border for definition
        ctx.strokeStyle = block.color;
        ctx.globalAlpha = 0.3;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'linear-gradient(to bottom right, #eff6ff, #faf5ff, #fdf2f8)' }}
    />
  );
};

export default AnimatedBackground;
