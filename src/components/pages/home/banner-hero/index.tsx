/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useRef } from 'react'
import HeroImageDev from './HeroImageDev'
import DescriptionHero from './DescriptionHero'
import TextFullContainerHero from '@/components/shared/TextFullContainerHero'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'

const BannerHero = () => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '100vh'])

  return (
    <motion.section style={{ y }} className='h-full overflow-hidden'>
      <div className='container-2xl mb-[30px]  md:mb-[100px] overflow-hidden'>
        <TextFullContainerHero
          text1='Phong'
          text2='Phan'
          className='hidden sm:flex'
        />
        <div className='grid xl:grid-cols-4  xl:gap-7'>
          <div className='flex flex-col'>
            <HeroImageDev />
            <TextFullContainerHero
              text1='Phong'
              text2='Phan'
              className='flex sm:hidden'
            />
          </div>
          <div className='xl:col-span-3'>
            <DescriptionHero />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default BannerHero
