"use client"

import type React from "react"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import type * as THREE from "three"

function Bubble({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    meshRef.current.position.y += delta * 0.1
    if (meshRef.current.position.y > 10) {
      meshRef.current.position.y = -10
    }
  })
  return (
    <Sphere ref={meshRef} args={[0.1, 16, 16]} position={position}>
      <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
    </Sphere>
  )
}

function Bubbles() {
  return (
    <>
      {Array.from({ length: 50 }).map((_, i) => (
        <Bubble key={i} position={[Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 10 - 5]} />
      ))}
    </>
  )
}

const OceanBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <Bubbles />
      </Canvas>
    </div>
  )
}

export default OceanBackground

