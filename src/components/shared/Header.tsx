'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { navbarItems } from '../contants/menu-navbar'
import DarkMode from './Dark-mode-setting'
import LogoDev from './LogoDev'
import ButtonSend from '../design-system/ButtonSend'
import CloseMenuNav from '../design-system/CloseMenuNav'
import { AnimatePresence, motion } from 'framer-motion'
import { menuSlide, scale, slide } from '@/settings/motion'
import { ScrollArea } from '../ui/scroll-area'
import { ImageResize } from './ImageResize'
import { Curve } from '../ui/Curve'
import Link from 'next/link'
import ListSocialcon from './SocialProfile'

const Header = () => {
  const pathname = usePathname()

  const [isActive, setIsActive] = useState(false)

  const [selectedIndicator, setSelectedIndicator] = useState(pathname)

  return (
    <>
      <div className='container-xxl flex items-center justify-between py-2 overflow-hidden'>
        <LogoDev />
        <div className='flex items-center gap-3'>
          <DarkMode />
          <ButtonSend className='!hidden md:!flex'>{`Let's Talk`}</ButtonSend>
          <CloseMenuNav setIsActive={setIsActive} isActive={isActive} />
        </div>
      </div>
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
                <ButtonSend className='!flex md:!hidden !bg-transparent z-50'>{`Let's Talk`}</ButtonSend>
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

                <div className='footer mt-5'>
                  <ListSocialcon />
                </div>
              </div>
            </ScrollArea>

            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
