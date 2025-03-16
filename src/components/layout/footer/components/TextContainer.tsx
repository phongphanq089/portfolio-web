'use client'

import { pathArr } from '@/setting'
import { useInView, motion } from 'framer-motion'
import React, { useRef } from 'react'

const TextContainer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const variants = {
    visible: (i: any) => ({
      translateY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.03,
      },
    }),

    hidden: { translateY: 200 },
  }
  return (
    <motion.svg
      ref={ref}
      width='331'
      height='55'
      viewBox='0 0 331 55'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial='hidden'
      className='h-fit footer-logo w-full'
      animate={isInView ? 'visible' : 'hidden'}
    >
      {pathArr.map((path, index) => {
        return (
          <React.Fragment key={index}>
            <motion.path
              custom={index}
              variants={variants}
              d={path}
              className='fill-[#ff3c00]'
            />
          </React.Fragment>
        )
      })}
    </motion.svg>
  )
}

export default TextContainer
