/* eslint-disable @next/next/no-img-element */
import { creativeplus } from '@/assets'
import React from 'react'
import DescripTionMotion from '@/components/shared/DescripTionMotion'

const DescriptionHero = () => {
  return (
    <>
      <div className='grid grid-cols-4 2xl:ml-[70px] xl:mt-8 gap-3'>
        <div className='w-full hidden sm:block'>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 200 200'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_231_793)'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M50 0H200V50V150L150 200L150 50H0L50 0ZM0 165.067V100L65.067 100L0 165.067ZM100 200H35.7777L100 135.778L100 200Z'
                fill='url(#paint0_linear_231_793)'
              />
            </g>
            <defs>
              <linearGradient
                id='paint0_linear_231_793'
                x1='177'
                y1='-9.23648e-06'
                x2='39.5'
                y2='152.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#262626' />
                <stop offset='1' stopColor='rgb(191 191 177 / 1)' />
              </linearGradient>
              <clipPath id='clip0_231_793'>
                <rect width='200' height='200' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className='col-span-4 sm:col-span-3'>
          <DescripTionMotion
            text='I am an enthusiastic and passionate frontend developer, always
            looking for opportunities to flex my creativity and professional
            expertise. With a spirit of continuous learning and active critical
            thinking, I am committed to bringing true value to every project I
            am involved with.'
            className='text-[18px] 2xl:text-sm font-medium'
          />
          <div className='max-w-[400px] 2xl:max-w-[600px]'>
            <img
              src={creativeplus.src}
              alt='Nexgendev'
              className='image-cover_auto'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default DescriptionHero
