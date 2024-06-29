/* eslint-disable @next/next/no-img-element */
'use client'
import { bgPhongphan } from '@/assets'
import React from 'react'
import HeroImageDev from './hero-image-dev'
import DescriptionHero from './description-hero'
import TextFullContainerHero from '@/components/shared/TextFullContainerHero'

const BannerHero = () => {
  return (
    <div className='container-xxl mb-[30px]  md:mb-[100px] overflow-hidden'>
      <TextFullContainerHero text1='Phong' text2='Phan' />
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
