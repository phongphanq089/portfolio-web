'use client'
import { ReactNode, RefObject, useRef, useState } from 'react'
import { motion } from 'motion/react'

export default function FramerMagnetic({ children }: { children: ReactNode }) {
  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: any) => {
    if (ref.current) {
      const { clientX, clientY } = e
      const { height, width, left, top } = ref.current.getBoundingClientRect()
      const middleX = clientX - (left + width / 3)
      const middleY = clientY - (top + height / 3)
      setPosition({ x: middleX, y: middleY })
    }
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <motion.div
      style={{ position: 'relative' }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  )
}
