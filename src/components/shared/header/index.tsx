'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { menuSlide, scale, slide } from '@/settings/motion'
import Link from 'next/link'
import LogoDev from '../LogoDev'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ImageResize } from '../ImageResize'
import { navbarItems } from '@/components/contants/menu-navbar'
import { Curve } from './curve'
import CloseMenuNav from './close-menu-navbar'

const Header = () => {
  const pathname = usePathname()

  const [isActive, setIsActive] = useState(false)

  const [selectedIndicator, setSelectedIndicator] = useState(pathname)
  return (
    <header className='pt-5' id='scroll-top'>
      <nav className='container-xxl flex justify-between'>
        <LogoDev />
        <div className='flex gap-[100px]'>
          <h3 className='text-lg font-semibold text-color-7 hidden lg:block'>
            AVAILABLE FOR WORK SEPTEMBER 2024
          </h3>

          <CloseMenuNav setIsActive={setIsActive} isActive={isActive} />
          <div className='flex flex-col gap-1 '>
            {/* <h3 className='text-lg font-semibold text-color-7'>Services</h3>
            <h3 className='text-lg font-semibold text-color-7'>Works</h3>
            <h3 className='text-lg font-semibold text-color-7'>About</h3>
            <h3 className='text-lg font-semibold text-color-7'>Contact</h3> */}
          </div>
        </div>
      </nav>

      <AnimatePresence mode='wait'>
        {isActive && (
          <motion.div
            variants={menuSlide}
            initial='initial'
            animate='enter'
            exit='exit'
            className='menu z-50 bg-color-3'
          >
            <ScrollArea className='h-screen srcoll-menu w-full rounded-md border-none!'>
              <div className='absolute w-[50%] top-0 right-0 opacity-[0.5]'>
                <ImageResize
                  src={'/menusvg.svg'}
                  alt='menusvg'
                  heightSize='pt-[130%]'
                  className='z-[-1]'
                />
              </div>
              <div className='flex justify-between'>
                <CloseMenuNav setIsActive={setIsActive} isActive={isActive} />
              </div>

              <div className='body'>
                <div
                  onMouseLeave={() => {
                    setSelectedIndicator(pathname)
                  }}
                  className='nav'
                >
                  {navbarItems.map((data, index) => {
                    return (
                      <motion.div
                        key={index}
                        className='link'
                        onMouseEnter={() => {
                          setSelectedIndicator(data.link)
                        }}
                        custom={index}
                        variants={slide}
                        initial='initial'
                        animate='enter'
                        exit='exit'
                        whileHover={{ translateX: 20 }}
                      >
                        <motion.div
                          variants={scale}
                          animate={
                            selectedIndicator === data.link ? 'open' : 'closed'
                          }
                          className='indicator'
                        ></motion.div>

                        <Link href={data.link}>{data.title}</Link>
                      </motion.div>
                    )
                  })}
                </div>

                {/* <div className='footer mt-5'>
                  <ListSocialcon />
                </div> */}
              </div>
            </ScrollArea>

            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
