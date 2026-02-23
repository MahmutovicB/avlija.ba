"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
    const meshRef = useRef<THREE.Points>(null);
    const count = 150;

    const [positions, sizes, colors] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const siz = new Float32Array(count);
        const col = new Float32Array(count * 3);

        const greens = [
            new THREE.Color("#7eaa34"),
            new THREE.Color("#a3cc66"),
            new THREE.Color("#5a8a1a"),
            new THREE.Color("#FBBF24"),
        ];

        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
            siz[i] = Math.random() * 3 + 1;
            const c = greens[Math.floor(Math.random() * greens.length)];
            col[i * 3] = c.r;
            col[i * 3 + 1] = c.g;
            col[i * 3 + 2] = c.b;
        }

        return [pos, siz, col];
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.elapsedTime;
        const posArray = meshRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            posArray[i3 + 1] += Math.sin(time * 0.3 + i * 0.1) * 0.003;
            posArray[i3] += Math.cos(time * 0.2 + i * 0.05) * 0.002;
        }

        meshRef.current.geometry.attributes.position.needsUpdate = true;
        meshRef.current.rotation.y = time * 0.02;
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                    count={count}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[colors, 3]}
                    count={count}
                />
                <bufferAttribute
                    attach="attributes-size"
                    args={[sizes, 1]}
                    count={count}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                vertexColors
                transparent
                opacity={0.7}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

function FloatingOrbs() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.elapsedTime;
        groupRef.current.rotation.y = t * 0.05;
    });

    return (
        <group ref={groupRef}>
            {[...Array(5)].map((_, i) => (
                <mesh
                    key={i}
                    position={[
                        Math.sin(i * 1.2) * 4,
                        Math.cos(i * 0.8) * 2,
                        Math.sin(i * 0.5) * 3 - 2,
                    ]}
                >
                    <sphereGeometry args={[0.15 + i * 0.05, 16, 16]} />
                    <meshStandardMaterial
                        color={i % 2 === 0 ? "#7eaa34" : "#FBBF24"}
                        transparent
                        opacity={0.3}
                        emissive={i % 2 === 0 ? "#7eaa34" : "#FBBF24"}
                        emissiveIntensity={0.5}
                    />
                </mesh>
            ))}
        </group>
    );
}

export default function HeroScene() {
    // Gracefully bail out if WebGL is not available
    try {
        const canvas = document.createElement("canvas");
        const gl =
            canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl");
        if (!gl) return null;
    } catch {
        return null;
    }

    return (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 60 }}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
            }}
            gl={{ alpha: true, antialias: true }}
        >
            <ambientLight intensity={0.4} />
            <pointLight position={[5, 5, 5]} intensity={0.6} color="#7eaa34" />
            <pointLight position={[-5, -3, 3]} intensity={0.3} color="#FBBF24" />
            <Particles />
            <FloatingOrbs />
        </Canvas>
    );
}
