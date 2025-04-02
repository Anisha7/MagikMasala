"use client"

/// <reference types="@react-three/fiber" />

import React, { useRef } from "react"
import { useFrame, extend } from "@react-three/fiber"
import { Cylinder, Text, Box } from "@react-three/drei"
import * as THREE from "three"

// Extend JSX elements with Three.js materials
extend({ MeshPhongMaterial: THREE.MeshPhongMaterial })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshPhongMaterial: JSX.IntrinsicElements['mesh']
    }
  }
}

export default function SpiceJar() {
  const jarRef = useRef<THREE.Mesh>(null!)
  const labelRef = useRef<THREE.Mesh>(null!)
  
  const jarMaterial = new THREE.MeshStandardMaterial({ color: "#FF9800" })
  const lidMaterial = new THREE.MeshStandardMaterial({ color: "#4CAF50" })

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (jarRef.current) {
      jarRef.current.rotation.y = Math.sin(t / 2) / 4
      jarRef.current.position.y = Math.sin(t / 1.5) / 10
    }
    if (labelRef.current) {
      labelRef.current.rotation.y = Math.sin(t / 2) / 4
      labelRef.current.position.y = Math.sin(t / 1.5) / 10 + 0.5
    }
  })

  return (
    <Box scale={[0.1, 0.1, 0.1]}>
      <Cylinder ref={jarRef} args={[0.5, 0.5, 1.5, 32]} position={[0, 0, 0]} material={jarMaterial} />
      <Cylinder args={[0.52, 0.52, 0.1, 32]} position={[0, 0.8, 0]} material={lidMaterial} />
      <Text
        ref={labelRef}
        position={[0, 0.5, 0.52]}
        fontSize={0.2}
        color="#4A148C"
        anchorX="center"
        anchorY="middle"
      >
        Garam Masala
      </Text>
    </Box>
  )
}