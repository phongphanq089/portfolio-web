'use client'
import React from 'react'

import Link from 'next/link'
import { MENU_SETTINGS } from '@/setting'
import { useTranslations } from 'next-intl'
import SocialLink from './components/SocialLink'

import ScrollTop from './components/ScrollTop'
import TextContainer from './components/TextContainer'

const Footer = () => {
  const t = useTranslations('Navbar')
  return (
    <div className='w-full h-dvh md:p-7 md:pb-0 overflow-hidden' id='footer'>
      <div className='flex flex-col  justify-between h-full bg-black md:rounded-t-[100px] px-4'>
        <div className='grid grid-cols-1 max-sm:gap-4 max-md:gap-8 md:grid-cols-12 sm:px-8 sm:py-10'>
          <div className='col-span-7'>
            <SocialLink />
          </div>
          <div className='w-full h-full relative px-3 py-3 sm:py-7 z-50 col-span-5'>
            <div className='flex flex-col gap-3 justify-between '>
              <div className='mb-5 flex items-center gap-3'>
                <h3 className='text-white font-bold text-sm sm:text-md whitespace-nowrap '>
                  SITE MAP
                </h3>
                <div className='w-full h-[1px] bg-white'></div>
              </div>
              <div className='flex flex-col gap-3 text-xs sm:text-sm uppercase text-start font-light text-white leading-none mb-5'>
                {MENU_SETTINGS.map((item, index) => {
                  return (
                    <Link href={item.link} key={index}>
                      {t(item.name)}
                    </Link>
                  )
                })}
              </div>
              {/* <ClockDateTime className='text-xs md:text-sm font-bold text-white' /> */}
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='flex justify-end z-10'>
            <ScrollTop />
          </div>
          <div className='text-white  text-xs md:text-sm uppercase text-end lg:translate-y-16'>
            © 2025 <span className='text-[#ff3c00]'>Phong Phan</span> All
            rights reserved
          </div>
          <div className='relative z-10 lg:translate-y-10'>
            <TextContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
