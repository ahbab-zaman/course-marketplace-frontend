"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GSAPRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale";
  delay?: number;
  duration?: number;
}

export function GSAPReveal({
  children,
  className,
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
}: GSAPRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!ref.current) return;

      const animations = {
        fadeUp: { y: 60, opacity: 0 },
        fadeIn: { opacity: 0 },
        slideLeft: { x: -60, opacity: 0 },
        slideRight: { x: 60, opacity: 0 },
        scale: { scale: 0.8, opacity: 0 },
      };

      gsap.from(ref.current, {
        ...animations[animation],
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    };

    loadGSAP();
  }, [animation, delay, duration]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
