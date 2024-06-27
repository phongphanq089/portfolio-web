/* eslint-disable @next/next/no-img-element */
'use client'
import { bgFooter1, developer1 } from '@/assets'
import { socialLink } from '@/components/contants/social-link'
import AnimationLottie from '@/components/ui/AnimationLottie'
import FlipLink from '@/components/ui/FlipLink'
import Text3d from '@/components/ui/Text3d'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import ScrollTop from '../ScrollTop'
import { motion, useAnimation } from 'framer-motion'

const Footer = () => {
  const plane = useRef<HTMLDivElement>(null)
  const maxRotate = 45

  const [isInView, setIsInView] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('#footer')
      if (footer) {
        const rect = footer.getBoundingClientRect()
        const isInView = rect.top + 300 < window.innerHeight && rect.bottom >= 0
        setIsInView(isInView)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const manageMouseMove = (e: any) => {
    if (!plane.current) return
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const perspective = window.innerWidth * 4
    const rotateX = maxRotate * x - maxRotate / 2
    const rotateY = (maxRotate * y - maxRotate / 2) * -1
    if (plane && plane.current) {
      plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
    }
  }
  return (
    <motion.footer
      className={`min-h-screen md:h-screen w-full bg-black transition-0-5s ${
        isInView ? 'p-2 2xl:p-5' : 'p-0'
      }`}
      id='footer'
    >
      <div
        className={`flex mb-2 md:mb-0 flex-col justify-between bg-light w-full min-h-screen md:min-h-[unset] md:h-full p-3 2xl:px-5 2xl:py-2 relative ${
          isInView ? 'rounded-2xl' : ''
        }`}
      >
        <div className='flex flex-col items-end sm:items-center sm:flex-row justify-between relative'>
          <div className='flex flex-col gap-1'>
            <span className='text-xs sm:text-[18px] 2xl:text-sm font-semibold'>
              Web Developer
            </span>
          </div>
          <div className='max-w-[100px] sm:max-w-[150px] absolute left-0 sm:left-1/2 sm:-translate-x-1/2'>
            <img
              src={bgFooter1?.src}
              className='w-full object-cover h-auto'
              alt='phongphan'
            />
          </div>
          <div className='text-xs sm:text-[18px] 2xl:text-sm font-semibold'>
            Portfolio 2024 - 2025
          </div>
        </div>
        <div className='md:px-8'>
          <div className='flex flex-col md:flex-row items-center gap-2 justify-center'>
            <div className='max-w-[300px] 2xl:max-w-[500px] h-full'>
              <AnimationLottie animationPath={developer1} />
            </div>
            <div
              onMouseMove={(e) => {
                manageMouseMove(e)
              }}
              className='h-full flex flex-col justify-center'
            >
              <div ref={plane}>
                <Text3d
                  primary={`LET'S MAKE IT`}
                  secondary={`LET'S MAKE IT`}
                  className='text-md leading-[32px] md:text-[4vw] md:leading-[4vw]'
                />
                <Text3d
                  primary={`HAPPEN TOGETHER.`}
                  secondary={`HAPPEN TOGETHER.`}
                  className='text-md leading-[32px] md:text-[4vw] md:leading-[4vw]'
                />
                <div className='flex flex-col'>
                  <span className='text-xs'>Drop me and email:</span>
                  <Link
                    className='text-sm'
                    href='phongphanq089@gmail.com'
                    title='phongphanq089@gmail.com'
                  >
                    phongphanq089@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='xl:absolute xl:left-1/2 xl:-translate-x-1/2  xl:bottom-3 mx-auto'>
          <ul className='grid grid-cols-2 gap-3 md:flex items-center lg:gap-2 2xl:gap-5 text-white relative z-10'>
            {socialLink?.map((social, index) => {
              return (
                <li
                  className='border rounded-3xl px-3 py-2 bg-black'
                  key={`${social.name}-${index}`}
                >
                  <FlipLink
                    href='#'
                    className='font-semibold  uppercase text-[18px] sm:text-sm lg:text-sm 2xl:text-md !text-white'
                  >
                    {social.name}
                  </FlipLink>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='flex text-center  flex-col xs:flex-row justify-between w-full items-center'>
          <div className='hidden md:flex flex-col'>
            <span className='text-xs'>Phone Number:</span>
            <Link
              className='text-[18px] 2xl:text-sm font-semibold'
              href='phongphanq089@gmail.com'
              title='phongphanq089@gmail.com'
            >
              0706113210
            </Link>
          </div>

          <div className='flex flex-col'>
            <ScrollTop />
            <span className='text-[18px] 2xl:text-sm font-medium'>
              @2024-All rights reserved
            </span>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
