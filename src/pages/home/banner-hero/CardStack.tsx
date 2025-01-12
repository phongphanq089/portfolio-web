/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const cardData = [
  {
    id: 1,
    imgSrc:
      'https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66fa93b709501e1825fa0891_Images%20Hero%2002.jpg',
  },
  {
    id: 2,
    imgSrc:
      'https://cdn.prod.website-files.com/66f594a3776bdc5c680392e2/66fa93b709501e1825fa0891_Images%20Hero%2002.jpg',
  },
  {
    id: 3,
    imgSrc:
      'https://i-p.rmcdn.net/6680737dae957b0053a46105/4868815/image-c6c1102b-b9dc-4306-88da-9367784a3a45.png?w=896&e=webp&nll=true',
  },
]
const CardStack = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      style={{ perspective: '1000px' }}
      className='h-[30vh] w-[25vh] md:h-[40vh] md:w-[30vh] lg:h-[55vh] lg:w-[45vh] m-auto relative'
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
