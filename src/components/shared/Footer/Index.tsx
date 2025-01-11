'use client'
import React, { FormEvent, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import ListNavigaitonMenu from './elements/ListNavigaitonMenu'
import { SanityDocument } from 'next-sanity'
import { pathArr } from '@/setting'
import ScrollTop from '../ScrollTop'
import ClockDateTime from '../ClockDateTime'
import ContactMe from './elements/ContactMe'
import { IconRound } from '../Icon'

const Footer = ({ footer }: { footer: SanityDocument }) => {
  const container = useRef<HTMLDivElement>(null)

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
    <div className='relative h-full sm:pt-14 pt-8 bg-[#f7f7f7] text-black overflow-hidden'>
      <div className='container-4xl  px-4 mx-auto relative' ref={container}>
        {/* =====  RENDER LIST MENU */}
        <IconRound className='pointer-events-none absolute left-1/2 -translate-x-1/2 top-[150px] z-1 h-fit w-5/6 sm:w-3/5 lg:w-2/5 z-0' />
        <ListNavigaitonMenu footer={footer as SanityDocument} />

        <ContactMe />
        <div className='md:py-4 relative z-10'>
          <motion.svg
            ref={ref}
            width='838'
            height='151'
            viewBox='0 0 838 151'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            initial='hidden'
            className='sm:h-fit footer-logo w-full'
            animate={isInView ? 'visible' : 'hidden'}
          >
            {pathArr.map((path, index) => {
              return (
                <>
                  <motion.path
                    custom={index}
                    variants={variants}
                    d={path}
                    fill='#3c3935'
                  />
                </>
              )
            })}
          </motion.svg>
        </div>
        <div className='flex md:flex-row flex-col-reverse gap-3 justify-between py-2'>
          <div className='flex flex-col text-sm sm:text-md md:text-xl text-start font-bold text-color-3 leading-none'>
            <p>&copy; 2024 Phong Phan</p>
            <p>All rights reserved</p>
          </div>
          <ClockDateTime />
          <ScrollTop />
        </div>
      </div>
    </div>
  )
}

export default Footer
