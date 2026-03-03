"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function CursorBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const idRef = useRef(0);
  const lastTimeRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastTimeRef.current < 50) return; // ~20 bubbles/sec max
    lastTimeRef.current = now;

    const id = idRef.current++;
    const size = Math.random() * 22 + 8; // 8–30px

    setBubbles((prev) => [...prev.slice(-30), { id, x: e.clientX, y: e.clientY, size }]);

    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== id));
    }, 700);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="cursor-bubble"
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
          }}
        />
      ))}
    </div>
  );
}
