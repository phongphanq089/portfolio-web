/* eslint-disable @next/next/no-img-element */
'use client'
import { useTransform, motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { quadrangle } from '@/assets'

interface cardParallaxService {
  index: number
  title: string
  description: string
  service: {
    text: string
  }[]
}

const CardParallax = (props: cardParallaxService) => {
  const { index, title, description, service } = props

  const container = useRef(null)
  return (
    <div
      ref={container}
      className={'container-xxl cardContainer-parallax'}
      style={{
        backgroundColor: 'var(--color-6)',
        top: `calc(-5vh + ${index * 150}px)`,
        borderTop: '1px solid var(--light)',
      }}
    >
      <motion.div className={' card'}>
        <div className='flex items-center gap-3 mb-1 sm:mb-5'>
          <img
            src={quadrangle.src}
            alt='quadrangle.svg'
            className='w-[30px] h-auto'
          />
          <h1 className='text-white text-md sm:text-2xl font-[900]'>{title}</h1>
        </div>
        <div className={'body'}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-10'>
            <div>
              <span className='text-white text-sm max-w-[600px] block'>
                {description}
              </span>
            </div>
            <div className='p-4  relative z-10'>
              <div className='flex flex-col gap-3 relative z-10'>
                {service?.map((item, index) => {
                  return (
                    <span
                      key={`${item.text}-${index}`}
                      className='text-white text-md lg:text-xl font-[900]'
                    >
                      {item.text}
                    </span>
                  )
                })}
              </div>
              <span className='text-[200px] lg:text-[300px] text-white font-[900] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0 opacity-5'>{`0${
                index + 1
              }`}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CardParallax
