'use client'
/* eslint-disable @next/next/no-img-element */
import { useAnimate } from 'framer-motion'
import React, { useRef } from 'react'

interface MouseImageTrailProps {
  children: React.ReactNode
  images: string[]
  renderImageBuffer: number
  rotationRange: number
}

interface Position {
  x: number
  y: number
}

export const MouseImageTrail = ({
  children,
  images,
  renderImageBuffer,
  rotationRange,
}: MouseImageTrailProps) => {
  const [scope, animate] = useAnimate()

  const lastRenderPosition = useRef<Position>({ x: 0, y: 0 })
  const imageRenderCount = useRef<number>(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    )

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX
      lastRenderPosition.current.y = clientY

      renderNextImage()
    }
  }

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const deltaX = x2 - x1
    const deltaY = y2 - y1

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

    return distance
  }

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length
    const selector = `[data-mouse-move-index="${imageIndex}"]`

    const el = document.querySelector<HTMLImageElement>(selector)

    if (el) {
      el.style.top = `${lastRenderPosition.current.y}px`
      el.style.left = `${lastRenderPosition.current.x}px`
      el.style.zIndex = imageRenderCount.current.toString()

      const rotation = Math.random() * rotationRange

      animate(
        selector,
        {
          opacity: [0, 1],
          transform: [
            `translate(-50%, -25%) scale(0.5) ${
              imageIndex % 2
                ? `rotate(${rotation}deg)`
                : `rotate(-${rotation}deg)`
            }`,
            `translate(-50%, -50%) scale(1) ${
              imageIndex % 2
                ? `rotate(-${rotation}deg)`
                : `rotate(${rotation}deg)`
            }`,
          ],
        },
        { type: 'spring', damping: 15, stiffness: 200 }
      )

      animate(
        selector,
        {
          opacity: [1, 0],
        },
        { ease: 'linear', duration: 0.5, delay: 5 }
      )

      imageRenderCount.current = imageRenderCount.current + 1
    }
  }
  return (
    <div
      ref={scope}
      className='realtive overflow-hidden h-ful w-full'
      onMouseMove={handleMouseMove}
    >
      {children}
      {images.map((img, index) => (
        <img
          className='pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0 z-20'
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  )
}
