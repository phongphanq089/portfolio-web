'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Gravity, { MatterBody } from '@/components/ui/Gravity'
import SocialLink from './SocialLink'
import ClockDateTime from '../ClockDateTime'
import ScrollTop from '../ScrollTop'
import Blocks from '@/components/ui/Blocks'

const stars = ['✱', '✽', '✦', '✸', '✹', '✺', '✦', '✸', '✹', '✺']

const socialLinks = [
  { name: 'Home', x: '20%', y: '10%' },
  { name: 'Resoures', x: '30%', y: '30%' },
  { name: 'Template ui', x: '40%', y: '20%', angle: 10 },
  { name: 'Blog', x: '75%', y: '10%', angle: -4 },
  { name: 'Life - Advice', x: '80%', y: '20%', angle: 5 },
  { name: 'Github', x: '20%', y: '10%', angle: 5 },
]

const FooterV2 = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  return (
    <div className='w-dvw h-dvh flex flex-col sticky top-0'>
      <div
        className='w-full h-full absolute top-0 left-0 overflow-hidden dark:bg-black bg-white before:absolute before:w-full before:h-full before:bg-gradient-to-t  dark:before:from-[#070707] before:from-[#dbdbdb] before:z-[1] z-0 '
        ref={containerRef}
      >
        <Blocks
          activeDivsClass='dark:bg-[#131212]  bg-[#9ba1a131]  '
          divClass='dark:border-[#131212] border-[#9ba1a131] '
          classname='w-full h-full'
          containerRef={containerRef}
          activeDivs={{
            0: new Set([2, 4, 6]),
            1: new Set([0, 8]),
            2: new Set([1, 3, 5]),
            4: new Set([0, 5, 8]),
            5: new Set([2, 4]),
            7: new Set([2, 6, 9]),
            8: new Set([0, 4]),
            9: new Set([5]),
            10: new Set([3, 6]),
            11: new Set([1, 5]),
            12: new Set([7]),
            13: new Set([2, 4]),
            14: new Set([5]),
            15: new Set([1, 6]),
          }}
        />
      </div>
      <div className='grid grid-cols-1 max-md:gap-8 md:grid-cols-2'>
        <SocialLink />
        <div className='w-full h-full relative px-3 z-50'>
          <div className='flex flex-col gap-3 justify-between py-2 md:absolute right-11 bottom-0 '>
            <div className='flex flex-col text-sm sm:text-md xl:text-3xl uppercase text-start font-bold text-color-3 dark:text-white leading-none'>
              <p>&copy; 2024 Phong Phan</p>
              <p>All rights reserved</p>
            </div>
            <ClockDateTime className='text-xs md:text-sm font-bold' />
          </div>
        </div>
      </div>
      <Gravity gravity={{ x: 0, y: 1 }} className='w-full h-full'>
        {socialLinks.map((link) => (
          <MatterBody
            key={link.name}
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x={link.x}
            y={link.y}
            angle={link.angle || 0}
          >
            <motion.div
              className='text-sm md:text-xl lg:text-3xl bg-primary-color text-white border border-white rounded-full hover:cursor-pointer hover:text-white md:px-8 md:py-4 py-3 px-6 uppercase'
              whileTap={{ scale: 0.9 }}
            >
              {link.name}
            </motion.div>
          </MatterBody>
        ))}

        {stars.map((star, i) => (
          <MatterBody
            key={i}
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x={`${Math.random() * 60 + 20}%`}
            y={`${Math.random() * 20 + 40}%`}
            angle={Math.random() * 360}
          >
            <div
              className={`flex items-center justify-center text-xl aspect-square w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-color-3 border-2 border-white text-white rounded-lg text-center`}
            >
              {star}
            </div>
          </MatterBody>
        ))}
      </Gravity>
      <ScrollTop />
    </div>
  )
}

export default FooterV2
