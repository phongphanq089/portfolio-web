'use client'
import React, { ReactNode, useState } from 'react'
import useMouse from '@react-hook/mouse-position'
import { motion } from 'framer-motion'

interface CursorVariant {
  opacity: number
  height: number
  width: number
  fontSize: string
  backgroundColor: string
  x: number
  y: number
  transition?: object
}

interface LayoutProps {
  cursorVariants: Record<
    string,
    (mouseX: number, mouseY: number) => CursorVariant
  >
  renderContent: (
    handleMouseEnter: (variant: string, text: string) => void,
    handleMouseLeave: () => void
  ) => ReactNode
}

const LayoutCursorWrapper = ({
  renderContent,
  cursorVariants,
}: LayoutProps) => {
  const [cursorText, setCursorText] = useState('')
  const [cursorVariant, setCursorVariant] = useState('default')

  const ref = React.useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  const mouseX =
    typeof window !== 'undefined' ? (mouse.clientX ?? window.innerWidth / 2) : 0
  const mouseY =
    typeof window !== 'undefined'
      ? (mouse.clientY ?? window.innerHeight / 2)
      : 0

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 20,
  }

  const handleMouseEnter = (variant: string, text: string) => {
    setCursorText(text)
    setCursorVariant(variant)
  }

  const handleMouseLeave = () => {
    setCursorText('')
    setCursorVariant('default')
  }

  return (
    <div className='relative overflow-hidden' ref={ref}>
      <motion.div
        className='fixed left-0 top-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center text-center'
        animate={cursorVariants[cursorVariant](
          mouseX as number,
          mouseY as number
        )}
        transition={spring}
      >
        <span className='text-white'>{cursorText}</span>
      </motion.div>
      {renderContent(handleMouseEnter, handleMouseLeave)}
    </div>
  )
}

export default LayoutCursorWrapper
