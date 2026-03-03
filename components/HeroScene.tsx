"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron ref={meshRef} args={[1.8, 4]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#38D6C4"
          emissive="#38D6C4"
          emissiveIntensity={0.15}
          roughness={0.2}
          metalness={0.8}
          distort={0.25}
          speed={2}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
};

const FloatingParticles = () => {
  const count = 80;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push({
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 8,
        z: (Math.random() - 0.5) * 6,
        speed: Math.random() * 0.5 + 0.2,
      });
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    positions.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(state.clock.elapsedTime * p.speed) * 0.3,
        p.y + Math.cos(state.clock.elapsedTime * p.speed * 0.8) * 0.3,
        p.z
      );
      dummy.scale.setScalar(0.02 + Math.sin(state.clock.elapsedTime + i) * 0.01);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#38D6C4" transparent opacity={0.6} />
    </instancedMesh>
  );
};

const OrbitingRing = ({
  radius,
  speed,
  tilt,
}: {
  radius: number;
  speed: number;
  tilt: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <Torus ref={ref} args={[radius, 0.01, 16, 100]} rotation={[tilt, 0, 0]}>
      <meshBasicMaterial color="#38D6C4" transparent opacity={0.3} />
    </Torus>
  );
};

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#38D6C4" />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#0099ff" />
        <AnimatedSphere />
        <FloatingParticles />
        <OrbitingRing radius={2.8} speed={0.3} tilt={1.2} />
        <OrbitingRing radius={3.2} speed={-0.2} tilt={0.8} />
      </Canvas>
    </div>
  );
}
