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
import TextContainer from './elements/TextContainer'

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
    <>
      <div className='relative h-full sm:pt-14 pt-8  text-black overflow-hidden'>
        <div className='container-4xl  px-4 mx-auto relative' ref={container}>
          {/* =====  RENDER LIST MENU */}
          <IconRound className='pointer-events-none absolute left-1/2 -translate-x-1/2 top-[150px] z-1 h-fit w-5/6 sm:w-3/5 lg:w-2/5 z-0 dark:opacity-5' />
          <div className='block md:hidden'>
            <ContactMe />
          </div>
          <ListNavigaitonMenu footer={footer as SanityDocument} />
          <div className='hidden md:block'>
            <ContactMe />
          </div>
          <TextContainer />
          <div className='flex md:flex-row flex-col-reverse gap-3 justify-between py-2 relative z-50'>
            <div className='flex flex-col text-sm sm:text-md xl:text-xl text-start font-bold text-color-3 dark:text-white leading-none'>
              <p>&copy; 2024 Phong Phan</p>
              <p>All rights reserved</p>
            </div>
            <ClockDateTime className='text-xs md:text-sm font-bold' />
            <ScrollTop />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
