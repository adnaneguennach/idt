"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis with a customized smooth, slow curve
    const lenis = new Lenis({
      duration: 1.5, // Slow down the scroll duration (Apple style)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Elegant curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      wheelMultiplier: 0.8, // Make the mouse wheel feel slightly heavier
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
