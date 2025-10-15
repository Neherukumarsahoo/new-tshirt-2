'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { Suspense, useMemo } from 'react'
import { useDesigner } from '../state/DesignerProvider'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const MODEL_PATH = '/poloshirt3.glb'

type MaterialMap = Record<string, THREE.MeshStandardMaterial>

function PoloModel() {
  const { colors } = useDesigner()
  const { scene } = useGLTF(MODEL_PATH)

  const mats: MaterialMap = useMemo(() => {
    const map: MaterialMap = {}
    scene.traverse((obj: any) => {
      if (obj.isMesh && obj.material) {
        const mat = obj.material as THREE.MeshStandardMaterial
        if (mat && mat.name) {
          map[mat.name] = mat
        }
      }
    })
    return map
  }, [scene])

  // Apply colors based on provided Blender material names from screenshot
  useMemo(() => {
    if (mats['body']) mats['body'].color = new THREE.Color(colors.body)
    if (mats['neck']) mats['neck'].color = new THREE.Color(colors.neck)
    if (mats['neck - border']) mats['neck - border'].color = new THREE.Color(colors.neckBorder)
    if (mats['cuff']) mats['cuff'].color = new THREE.Color(colors.cuff)
    if (mats['buttons']) mats['buttons'].color = new THREE.Color(colors.buttons)
    if (mats['ribbed - hem']) mats['ribbed - hem'].color = new THREE.Color(colors.ribbedHem)
  }, [colors, mats])

  return <primitive object={scene} />
}

export default function Viewer3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1.5, 3.2], fov: 45 }}>
        <color attach="background" args={[0xf5f5f5]} />
        <hemisphereLight intensity={0.75} groundColor={0x444444} />
        <directionalLight position={[5, 10, 5]} intensity={1.0} />
        <Suspense fallback={null}>
          <PoloModel />
        </Suspense>
        <OrbitControls enablePan={false} minPolarAngle={Math.PI/3} maxPolarAngle={Math.PI/2} enableDamping dampingFactor={0.08} />
      </Canvas>
    </div>
  )
}

useGLTF.preload(MODEL_PATH)
