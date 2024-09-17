'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import LinkNavBar from './link-navbar'
import { menuSlide } from '@/settings/motion'
import LogoDev from '../LogoDev'
import TypingMachine from '../TypingMachine'
import BtnOpenMenu from './btn-action-menu/BtnOpenMenu'
import Link from 'next/link'
import { IconShapes_2 } from '@/components/ui/RenderIcon'
import LetterPullup from '@/components/ui/StaggeredLetter'
export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const [isActive, setIsActive] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [menuIsOpen, isActive])

  return (
    <>
      <header className='pt-5' id='scroll-top'>
        <nav className='container-2xl flex justify-between flex-wrap gap-2'>
          <LogoDev />
          <div className='flex gap-[100px]'>
            <LetterPullup
              className='hidden lg:block sm:text-sm'
              words='Just an ordinary developer.From Vietnam with love.'
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
              <motion.div
                variants={menuSlide}
                initial='initial'
                animate='enter'
                exit='exit'
                className='menu z-40 bg-color-3'
              >
                <div className='body relative'>
                  <div className='absolute right-0 top-1/2 -translate-y-1/2 z-0 opacity-20'>
                    <IconShapes_2 className='w-[400px] h-[400px]' />
                  </div>
                  <LinkNavBar />
                  <div className='p-1 flex justify-between gap-1 flex-wrap'>
                    <div className='flex flex-col'>
                      <span className='font-light'> EMAIL ADDRESS</span>
                      <Link
                        href={'mailto:phongphanq089@gmail.com'}
                        title='phongphanq089@gmail.com'
                        className='text-xs 2xl:text-sm'
                      >
                        phongphanq089@gmail.com
                      </Link>
                    </div>
                    <div className='flex flex-col'>
                      <span className='font-light'> PHONE NUMBER</span>
                      <Link
                        href={'phone:0706113210'}
                        title='0706113210'
                        className='text-xs 2xl:text-sm'
                      >
                        0706113210
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={menuSlide}
                onClick={() => setMenuIsOpen(false)}
                className={
                  'fixed w-full h-full top-0 right-0 bg-[rgba(0,0,0,0.6)] z-[90]'
                }
              ></motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

{
  /* <LinkNavBar />
                  <SocialLink />
                  <BannerImage className='max-w-[300px] sm:max-w-[400px] 2xl:max-w-[600px] h-auto absolute bottom-0 -right-3 md:top-3 md:right-0 z-0' /> */
}
