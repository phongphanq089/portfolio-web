'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CursorViewHover = ({ isVisible }: { isVisible: boolean }) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <motion.div
      className={`fixed z-50 bg-black text-white rounded-full flex items-center justify-center transition-transform custom-cursor text-sm ${
        isVisible ? 'opacity-1 isCursor' : 'noCursor opacity-0'
      }`}
      style={{
        top: position.y - 20,
        left: position.x - 20,
        width: '60px',
        height: '60px',
        transform: 'translate(-50%, -50%)',
      }}
    >
      View
    </motion.div>
  )
}

export default CursorViewHover
