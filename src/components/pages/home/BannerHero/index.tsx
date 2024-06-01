/* eslint-disable @next/next/no-img-element */
'use client'
import { bgPhongphan } from '@/assets'
import React from 'react'
import HeroImageDev from './hero-image-dev'
import DescriptionHero from './description-hero'

const BannerHero = () => {
  return (
    <div className='container-xxl mb-[100px] overflow-hidden'>
      <div className='w-full hidden xl:block'>
        <img
          src={bgPhongphan.src}
          alt='Nexgendev'
          className='image-cover_auto'
        />
      </div>
      <div className='grid xl:grid-cols-4  xl:gap-7'>
        <div className='flex flex-col'>
          <HeroImageDev />
        </div>
        <div className='xl:col-span-3'>
          <DescriptionHero />
        </div>
      </div>
    </div>
  )
}

export default BannerHero
