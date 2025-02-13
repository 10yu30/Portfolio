"use client"

import type React from "react"
import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

function Stars({ count = 5000 }) {
  const points = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [count])

  useFrame((state, delta) => {
    points.current.rotation.x -= delta / 20
    points.current.rotation.y -= delta / 30
  })

  return (
    <Points ref={points}>
      <PointMaterial transparent color="#ffffff" size={0.02} sizeAttenuation={true} depthWrite={false} />
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
    </Points>
  )
}

function ShootingStars({ count = 20 }) {
  const group = useRef<THREE.Group>(null!)
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [count])

  useFrame((state, delta) => {
    group.current.children.forEach((star, i) => {
      star.position.x -= delta * 2
      star.position.y -= delta * 2
      if (star.position.x < -10) star.position.x = 10
      if (star.position.y < -10) star.position.y = 10
    })
  })

  return (
    <group ref={group}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} position={[positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]]}>
          <sphereGeometry args={[0.01, 8, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  )
}

const SpaceBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <ShootingStars />
      </Canvas>
    </div>
  )
}

export default SpaceBackground

