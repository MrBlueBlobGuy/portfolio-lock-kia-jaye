"use client";

import { useEffect, useRef, useState } from "react";

export default function MouseInvertMask() {
  const maskRef = useRef(null);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const [isHero, setIsHero] = useState(false);

  const lerp = (a, b, t) => a + (b - a) * t;

  useEffect(() => {
    const handleMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const hero = document.getElementById("hero");

    const handleEnter = () => setIsHero(true);
    const handleLeave = () => setIsHero(false);

    hero?.addEventListener("mouseenter", handleEnter);
    hero?.addEventListener("mouseleave", handleLeave);

    let rafId;

    const animate = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.12);
      current.current.y = lerp(current.current.y, target.current.y, 0.12);

      if (maskRef.current) {
        maskRef.current.style.transform = `
          translate3d(${current.current.x}px, ${current.current.y}px, 0)
          translate(-50%, -50%)
        `;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      hero?.removeEventListener("mouseenter", handleEnter);
      hero?.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={maskRef}
      className={`mouse-mask ${isHero ? "expanded" : ""}`}
    >
      <span className="mask-text">
        {isHero ? "Explore" : "Scroll"}
      </span>
    </div>
  );
}