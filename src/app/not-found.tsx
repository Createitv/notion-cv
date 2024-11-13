'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import * as THREE from 'three'
import Link from 'next/link'

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const textControls = useAnimation()

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.BufferGeometry()
    const particles = 5000
    const positions = new Float32Array(particles * 3)

    for (let i = 0; i < particles * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      transparent: true
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)
      points.rotation.x += 0.001
      points.rotation.y += 0.001
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const animateText = async () => {
      await textControls.start({ opacity: 1, y: 0 })
      await textControls.start({ scale: [1, 1.1, 1] })
    }
    animateText()
  }, [textControls])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div ref={containerRef} className="absolute inset-0" />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center">
        <motion.h1
          className="mb-4 text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={textControls}
          transition={{ duration: 0.8 }}
        >
          404
        </motion.h1>
        <motion.p
          className="mb-8 text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={textControls}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Page Not Found
        </motion.p>
        <motion.div
          className="relative"
          animate={{
            x: mousePosition.x / 50,
            y: mousePosition.y / 50,
          }}
          transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        >
          <Link
            href="/"
            className="rounded-full bg-white px-6 py-3 text-lg font-semibold text-black transition-all hover:bg-opacity-80"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900 opacity-30" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10" />
    </div>
  )
}