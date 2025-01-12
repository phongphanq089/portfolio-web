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
    <div className='md:py-4 relative z-10'>
      <motion.svg
        ref={ref}
        width='838'
        height='151'
        viewBox='0 0 838 151'
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
                className='fill-[#3c3935] dark:fill-white'
              />
            </React.Fragment>
          )
        })}
      </motion.svg>
    </div>
  )
}

export default TextContainer
