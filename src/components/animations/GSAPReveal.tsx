"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  useEffect(() => {
    let ctx: any;
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!ref.current) return;

      const fromAnimations = {
        fadeUp: { y: 60, opacity: 0 },
        fadeIn: { opacity: 0 },
        slideLeft: { x: -60, opacity: 0 },
        slideRight: { x: 60, opacity: 0 },
        scale: { scale: 0.8, opacity: 0 },
      };

      const toAnimations = {
        fadeUp: { y: 0, opacity: 1 },
        fadeIn: { opacity: 1 },
        slideLeft: { x: 0, opacity: 1 },
        slideRight: { x: 0, opacity: 1 },
        scale: { scale: 1, opacity: 1 },
      };

      ctx = gsap.context(() => {
        gsap.fromTo(
          ref.current,
          { ...fromAnimations[animation] },
          {
            ...toAnimations[animation],
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }, ref);
    };

    loadGSAP();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [animation, delay, duration, pathname]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
