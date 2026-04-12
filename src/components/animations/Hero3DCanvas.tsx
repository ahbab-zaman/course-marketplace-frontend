"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24; // Pulled back for full-screen view
    camera.position.x = 0;
    camera.position.y = 0;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Clear container and mount renderer
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. CENTRAL GLOSSY SPHERE
    const coreGeometry = new THREE.SphereGeometry(2.5, 64, 64);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,       
      emissive: 0x003631,    // tertiary-container
      emissiveIntensity: 0.2,
      roughness: 0.05,
      metalness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.95,
      transmission: 0.9,     
      ior: 1.5,
      thickness: 0.5,
    });
    const coreSphere = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreSphere);

    // 2. INNER VOLUMETRIC GLOW (Halo)
    const haloGeometry = new THREE.SphereGeometry(3.2, 32, 32);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0x00a99c,       // on-tertiary-container
      transparent: true,
      opacity: 0.1,
      blending: THREE.NormalBlending,
      side: THREE.BackSide,
      depthWrite: false
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    mainGroup.add(halo);

    // 3. NEBULA PARTICLE CLOUD (The sweep)
    const particleCount = 3500;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);

    const colorTeal = new THREE.Color(0x00a99c);    // on-tertiary-container
    const colorEarthy = new THREE.Color(0x775843);  // secondary

    for (let i = 0; i < particleCount; i++) {
        // Create an elongated torus/swirl shape
        const angle = Math.random() * Math.PI * 2;
        const radius = 4 + Math.random() * 14; // Wider spread for full screen
        
        // Add sweeping height variation
        const height = (Math.random() - 0.5) * 6 * (1 - (radius - 4)/14); 
        
        particlePos[i * 3] = Math.cos(angle) * radius;
        particlePos[i * 3 + 1] = height; 
        particlePos[i * 3 + 2] = Math.sin(angle) * (radius * 0.4); // squished in Z

        const mixedColor = colorTeal.clone().lerp(colorEarthy, Math.random());
        
        // Add random high intensity spots for stars
        if(Math.random() > 0.98) {
            particleColors[i * 3] = 0.2;
            particleColors[i * 3 + 1] = 0.2;
            particleColors[i * 3 + 2] = 0.2; // darker dots to stand out on light bg
            particleSizes[i] = 1.8;
        } else {
            particleColors[i * 3] = mixedColor.r;
            particleColors[i * 3 + 1] = mixedColor.g;
            particleColors[i * 3 + 2] = mixedColor.b;
            particleSizes[i] = 0.6 + Math.random() * 0.6;
        }
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));

    // Custom shader material to use the size attribute
    const particleMaterial = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 }
        },
        vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            void main() {
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (400.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            void main() {
                float dist = length(gl_PointCoord - vec2(0.5));
                if (dist > 0.5) discard;
                float alpha = (0.5 - dist) * 2.0;
                gl_FragColor = vec4(vColor, alpha * 0.85);
            }
        `,
        blending: THREE.NormalBlending, // very important for light bg
        depthWrite: false,
        transparent: true
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    
    // Tilt the nebula field
    particles.rotation.z = Math.PI / 10;
    particles.rotation.x = Math.PI / 6;
    mainGroup.add(particles);

    // 4. FLOATING ORBS (Planets/Satellites)
    const orbsGroup = new THREE.Group();
    mainGroup.add(orbsGroup);

    interface OrbData {
        mesh: THREE.Mesh;
        angle: number;
        radius: number;
        speed: number;
        yOffset: number;
    }
    const orbs: OrbData[] = [];

    for(let i = 0; i < 6; i++) {
        const randSize = 0.2 + Math.random() * 0.5;
        const orbGeo = new THREE.SphereGeometry(randSize, 32, 32);
        
        const isBright = Math.random() > 0.5;
        
        const orbMat = new THREE.MeshPhysicalMaterial({
            color: isBright ? 0xffffff : 0x775843,
            roughness: 0.1,
            metalness: 0.8,
            emissive: isBright ? 0x00a99c : 0x26170c, // teal vs very dark brown
            emissiveIntensity: isBright ? 0.6 : 0.2, // lower intensity for light bg
            clearcoat: 1.0
        });
        const orbMesh = new THREE.Mesh(orbGeo, orbMat);
        
        const radius = 6 + Math.random() * 8; // Wider orbit
        const angle = Math.random() * Math.PI * 2;
        const yOffset = (Math.random() - 0.5) * 8;
        
        orbsGroup.add(orbMesh);
        
        orbs.push({
            mesh: orbMesh,
            angle: angle,
            radius: radius,
            speed: 0.005 + Math.random() * 0.015,
            yOffset: yOffset
        });
        
        // Add a point light to some bright orbs
        if(isBright && Math.random() > 0.5) {
            const orbLight = new THREE.PointLight(0x00a99c, 2, 8);
            orbMesh.add(orbLight);
        }
    }

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0); // Bright ambient for light mode
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00a99c, 150, 30); // Teal light
    pointLight1.position.set(-6, 2, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffd4ba, 150, 30); // Warm light (secondary-container)
    pointLight2.position.set(6, -2, -5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 100, 20); // Front white highlight
    pointLight3.position.set(0, 0, 8);
    scene.add(pointLight3);

    // ANIMATION LOOP
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      // Floating core
      coreSphere.position.y = Math.sin(elapsedTime * 1.2) * 0.15;
      coreSphere.rotation.y = elapsedTime * 0.1;
      coreSphere.rotation.z = elapsedTime * 0.05;
      
      halo.position.y = coreSphere.position.y;
      
      // Rotate the nebula cloud very slowly
      particleMaterial.uniforms.time.value = elapsedTime;
      particles.rotation.y = elapsedTime * 0.05;
      
      // Orbiting sequence
      orbs.forEach((orb) => {
          orb.angle += orb.speed;
          orb.mesh.position.x = Math.cos(orb.angle) * orb.radius;
          orb.mesh.position.z = Math.sin(orb.angle) * (orb.radius * 0.6); // slight ellipse
          orb.mesh.position.y = orb.yOffset + Math.sin(elapsedTime * 2 + orb.angle) * 0.5;
      });

      // Overall scene steady float
      mainGroup.position.y = Math.cos(elapsedTime * 0.5) * 0.3;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.05;
      mainGroup.rotation.y = Math.cos(elapsedTime * 0.1) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Cleanup geometries and materials
      coreGeometry.dispose();
      coreMaterial.dispose();
      haloGeometry.dispose();
      haloMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}
