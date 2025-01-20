'use client'
/* eslint-disable @next/next/no-img-element */
import { bgCardResoure, cutHover } from '@/assets'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '@/sanity/config'

interface PropType {
  _ref: string
}

const CardResoure = ({ _ref }: PropType) => {
  const [ishover, setIsHover] = useState<boolean>(false)

  return (
    <motion.a
      className='relative w-full h-full inline-block'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      whileHover={{
        x: 10,
        rotate: 5,
      }}
      transition={{
        duration: 0.3,
        x: 0,
        type: 'spring',
      }}
      href='#'
    >
      <div
        className='w-full h-full'
        style={{
          filter:
            'drop-shadow(rgba(0, 0, 0, 0.5) 16px 10px 12px) drop-shadow(rgba(0, 0, 0, 0.55) 8px 12px 8px)',
        }}
      >
        <div className='realtive w-full h-full'>
          <div className='h-[60%] w-[80%] absolute top-[70px] left-[53%] -translate-x-1/2 bg-linear-gradient-1'>
            <div className='realtive h-full w-full flex flex-col p-2'>
              <h3 className='text-primary-color text-sm font-bold uppercase pl-2'>
                lunarui.dev
              </h3>
              <div className='wrapImgResize img16And9 rounded-md overflow-hidden mt-auto'>
                <img src={urlFor(_ref).url()} alt='phongphan' />
              </div>
            </div>
          </div>
          <img
            src={bgCardResoure.src}
            alt='phong phan'
            className='max-w-full object-cover h-full'
          />
          {ishover && (
            <div className='absolute w-[130px] left-[51.6%] h-[24px] bottom-[26px] -translate-x-1/2'>
              <img
                src={cutHover.src}
                alt='phong phan'
                className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
              />
            </div>
          )}
        </div>
      </div>
    </motion.a>
  )
}

export default CardResoure
