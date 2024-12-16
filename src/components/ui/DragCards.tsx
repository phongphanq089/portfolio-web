'use client'

import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

interface PropsType {
  containerRef: React.RefObject<HTMLDivElement>
  title: string
  top?: string
  left: string
  rotate?: string
  className?: string
  children: React.ReactNode
}

const DragCards = ({
  containerRef,
  top,
  left,
  rotate,
  className,
  children,
  title = 'About me',
}: PropsType) => {
  const [zIndex, setZIndex] = useState(0)

  const updateZIndex = () => {
    const els = document.querySelectorAll('.drag-elements')

    let maxZIndex = -Infinity

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue('z-index')
      )

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex
      }
    })

    setZIndex(maxZIndex + 1)
  }
  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        'drag-elements absolute min-w-[400px] bg-neutral-200 border border-color-6 rounded-sm cursor-move',
        className
      )}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    >
      <div className='flex items-center justify-between px-4 py-2 border-b border-color-6'>
        <h3 className='font-bold text-sm'>{title}</h3>
        <div className='flex items-center gap-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-minus'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M5 12l14 0' />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-square'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-x'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M18 6l-12 12' />
            <path d='M6 6l12 12' />
          </svg>
        </div>
      </div>
      {children}
    </motion.div>
  )
}

export default DragCards
