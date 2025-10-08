'use client'

import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Sphere, useTexture } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Earth() {
  const meshRef = useRef()
  const cloudsRef = useRef()
  
  // Load textures - these are free to use from NASA
  const [colorMap, cloudsMap] = useTexture([
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png',
  ])
  
  // Auto-rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.18
    }
  })

  return (
    <group>
      {/* Main Earth sphere */}
      <Sphere ref={meshRef} args={[2.5, 64, 64]}>
        <meshStandardMaterial
          map={colorMap}
          metalness={0.1}
          roughness={0.7}
          emissive="#88ccff"
          emissiveIntensity={0.15}
        />
      </Sphere>
      
      {/* Clouds layer */}
      <Sphere ref={cloudsRef} args={[2.53, 64, 64]}>
        <meshStandardMaterial
          map={cloudsMap}
          transparent
          opacity={0.6}
          depthWrite={false}
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </Sphere>
      
      {/* Outer glow */}
      <Sphere args={[2.7, 32, 32]}>
        <meshBasicMaterial
          color="#88ddff"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  )
}

function Loader() {
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial color="#38A3A5" wireframe />
    </mesh>
  )
}

export default function GlobeScene() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 3, 5]} intensity={3} color="#ffffff" />
      <directionalLight position={[-3, -2, -3]} intensity={2} color="#aaddff" />
      <directionalLight position={[0, 5, 3]} intensity={2} color="#ffeecc" />
      <pointLight position={[0, 5, 0]} intensity={1.5} color="#ffffff" />
      <pointLight position={[5, 0, 5]} intensity={1} color="#ccddff" />
      
      <Suspense fallback={<Loader />}>
        <Earth />
      </Suspense>
      
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  )
}
