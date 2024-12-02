/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const cardData = [
  {
    id: 1,
    imgSrc:
      'https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66fa93b7010975c6564112ea_Images%20Hero%2001.jpg',
  },
  {
    id: 2,
    imgSrc:
      'https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66fa93b709501e1825fa0891_Images%20Hero%2002.jpg',
  },
  {
    id: 3,
    imgSrc:
      'https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66fa93b7c6d1a72c0dc53f3b_Images%20Hero%2003.jpg',
  },
]
const CardStack = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      style={{
        perspective: '1000px',
        position: 'relative',
        height: '55vh',
        width: '45vh',
        margin: 'auto',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {cardData.map((card, index) => {
        const spacingMultiplier = 40
        const rotationMultiplier = 8

        const baseOffset = spacingMultiplier - index * spacingMultiplier * 0.8
        const hoverOffset = -spacingMultiplier + index * spacingMultiplier * 0.8
        const baseRotation =
          rotationMultiplier - index * rotationMultiplier * 0.6
        const hoverRotation =
          -rotationMultiplier + index * rotationMultiplier * 0.6

        return (
          <motion.div
            key={card.id}
            className={`hero-card mt-10 2xl:mt-20`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: cardData.length - index,
            }}
            animate={{
              translateX: isHovered ? hoverOffset : baseOffset,
              rotateZ: isHovered ? hoverRotation : baseRotation,
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              ease: 'easeInOut',
            }}
          >
            <img
              src={card.imgSrc}
              alt={`Hero Card ${card.id}`}
              className='image'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}

export default CardStack
