"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".anim").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
