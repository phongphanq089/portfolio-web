/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { menuSlide, scale, slide } from '@/settings/motion'
import Link from 'next/link'
import LogoDev from '../LogoDev'
import { ScrollArea } from '@/components/ui/scroll-area'
import { navbarItems } from '@/components/contants/menu-navbar'
import { Curve } from './curve'
import CloseMenuNav from './close-menu-navbar'
import { cricleDouble } from '@/assets'
import SocialProfile from '../SocialProfile'

const Header = () => {
  const pathname = usePathname()

  const [isActive, setIsActive] = useState(false)

  const [selectedIndicator, setSelectedIndicator] = useState(pathname)

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isActive])

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
            className='menu z-40 bg-color-3'
          >
            <ScrollArea className='h-screen srcoll-menu w-full rounded-md border-none!'>
              <div className='body'>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                  <div
                    onMouseLeave={() => {
                      setSelectedIndicator(pathname)
                    }}
                    className='mt-[80px] xs:mt-0 nav relative z-10'
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
                              selectedIndicator === data.link
                                ? 'open'
                                : 'closed'
                            }
                            className='indicator'
                          ></motion.div>

                          <Link href={data.link} className='font-bold relative'>
                            {data.title}
                            <span className='text-xs lg:text-sm font-medium absolute top-0 right-[-40px] lg:right-[-30px] '>
                              {`(${index + 1})`}
                            </span>
                          </Link>
                        </motion.div>
                      )
                    })}

                    <div className='relative z-10  mt-[70px] sm:mt-[50px]'>
                      <div className='flex flex-col gap-2 mb-3'>
                        <Link
                          href='tel:0706113210'
                          title='+08706113210'
                          className='text-[18px] xs:text-sm leading-none text-light'
                        >
                          Phone: +08706113210
                        </Link>
                        <Link
                          href='mailto:phongphanq089@gmail.com'
                          title=' phongphanq089@gmail.com'
                          className='text-[18px] xs:text-sm leading-none text-light'
                        >
                          phongphanq089@gmail.com
                        </Link>
                      </div>
                      <SocialProfile />
                    </div>
                  </div>

                  <div className='lg:col-span-2'>
                    <img
                      src={cricleDouble.src}
                      alt='cricleDouble.svg'
                      className='absolute max-w-[800px] h-full left-1/2 -translate-x-1/2 bottom-[50px] sm:bottom-0 opacity-45 z-0'
                    />
                    <div className='absolute bottom-6 z-0'>
                      <h2 className='text-[6vw] font-bold text-white leading-none whitespace-nowrap'>
                        FIND PROJECT
                      </h2>
                      <h2 className='text-[6vw] font-bold text-white leading-none whitespace-nowrap'>
                        FIND DEVELOPER
                      </h2>
                    </div>
                  </div>
                </div>
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
