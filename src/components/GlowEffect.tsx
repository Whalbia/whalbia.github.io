"use client";

import { useEffect, useState } from "react";

export default function GlowEffect() {
  const [position, setPosition] = useState({ x: -300, y: -300 });
  const [isHoverDevice, setIsHoverDevice] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    setIsHoverDevice(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsHoverDevice(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isHoverDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 300, y: e.clientY - 300 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHoverDevice]);

  if (!isHoverDevice) return null;

  return (
    <div
      className="fixed pointer-events-none z-0"
      style={{
        width: 600,
        height: 600,
        left: position.x,
        top: position.y,
        background:
          "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
        transition: "left 0.3s, top 0.3s",
      }}
    />
  );
}
