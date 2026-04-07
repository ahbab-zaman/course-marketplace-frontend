"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ThreeHeroProps {
  className?: string;
}

export function ThreeHero({ className }: ThreeHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadThreeScene = async () => {
      const THREE = await import("three");

      if (!containerRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.current.appendChild(renderer.domElement);

      // Create a geometric shape
      const geometry = new THREE.IcosahedronGeometry(2, 1);
      const material = new THREE.MeshStandardMaterial({
        color: 0x3b82f6,
        wireframe: true,
        emissive: 0x1d4ed8,
        emissiveIntensity: 0.3,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0x3b82f6, 1.5, 100);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      camera.position.z = 5;

      // Animation loop
      let animationId: number;
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        mesh.rotation.x += 0.003;
        mesh.rotation.y += 0.005;
        renderer.render(scene, camera);
      };
      animate();

      // Resize handler
      const handleResize = () => {
        if (!containerRef.current) return;
        camera.aspect =
          containerRef.current.clientWidth / containerRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
          containerRef.current.clientWidth,
          containerRef.current.clientHeight
        );
      };
      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
        if (containerRef.current?.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
        }
      };
    };

    loadThreeScene();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 -z-10 opacity-40", className)}
      aria-hidden="true"
    />
  );
}
