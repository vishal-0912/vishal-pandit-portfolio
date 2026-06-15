import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-0 hidden lg:block"
      style={{
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(250,61,29,0.04) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.15s ease, top 0.15s ease',
      }}
      aria-hidden="true"
    />
  );
}
