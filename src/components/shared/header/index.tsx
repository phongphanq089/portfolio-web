'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import LinkNavBar from './link-navbar'
import {
  background,
  height,
  mountAnim,
  opacity,
  slideLeft,
} from '@/settings/motion'
import Image from 'next/image'
import LogoDev from '../LogoDev'
import TypingMachine from '../TypingMachine'
import BtnOpenMenu from './btn-action-menu/BtnOpenMenu'
import BtnCloseMenu from './btn-action-menu/BtnCloseMenu'
import BannerImage from './link-navbar/BannerImage'
import SocialLink from './link-navbar/SocialLink'
export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const [isActive, setIsActive] = useState(false)

  const handleScroll = () => {
    const footerElement = document.querySelector('#footer')
    if (footerElement) {
      const footerPosition =
        footerElement.getBoundingClientRect().top + window.scrollY
      const windowBottomPosition = window.scrollY + window.innerHeight

      if (window.scrollY > 300 && windowBottomPosition < footerPosition) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    if (menuIsOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.classList.remove('overflow-hidden')
    }
  }, [menuIsOpen, isActive])

  return (
    <>
      <header className='pt-5' id='scroll-top'>
        <nav className='container-2xl flex justify-between flex-wrap gap-2'>
          <LogoDev />
          <div className='flex gap-[100px]'>
            <TypingMachine
              text='Just an ordinary designer.From Vietnam with love.'
              speed={10}
              className='hidden lg:block sm:text-sm'
            />
            <BtnOpenMenu
              menuIsOpen={menuIsOpen}
              isActive={isActive}
              openMenu={() => {
                setMenuIsOpen(!menuIsOpen)
              }}
            />
          </div>
        </nav>
      </header>
      <div>
        <AnimatePresence mode='wait'>
          {menuIsOpen && (
            <>
              <motion.div className='fixed top-0 left-0 z-50 h-screen flex pointer-events-none transition-1s'>
                {[...Array(5)].map((_, index) => {
                  return (
                    <motion.div
                      variants={height}
                      {...mountAnim}
                      custom={4 - index}
                      className='w-[20vw] h-full border-r bg-black'
                      key={index}
                    ></motion.div>
                  )
                })}
                <motion.div
                  variants={background}
                  {...mountAnim}
                  className='w-full h-full absolute bg-black'
                ></motion.div>
              </motion.div>
              <motion.div
                className='menu1 fixed flex justify-between flex-col top-0 left-0 w-full h-full bg-black z-[999]'
                variants={opacity}
                initial='initial'
                animate='enter'
                exit='exit'
              >
                <BtnCloseMenu
                  openMenu={() => {
                    setMenuIsOpen(false)
                  }}
                />
                <div
                  className={
                    'w-full h-full px-1 sm:px-5 flex flex-col justify-between relative'
                  }
                >
                  <LinkNavBar />
                  <SocialLink />
                  <BannerImage className='max-w-[300px] sm:max-w-[400px] 2xl:max-w-[600px] h-auto absolute bottom-0 -right-3 md:top-3 md:right-0 z-0' />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
