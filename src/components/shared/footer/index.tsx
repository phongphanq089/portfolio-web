/* eslint-disable @next/next/no-img-element */
'use client'
import { developer1 } from '@/assets'
import AnimationLottie from '@/components/ui/AnimationLottie'
import Link from 'next/link'
import React, { useRef } from 'react'
import ScrollTop from '../ScrollTop'
import { IconContact, IconRound } from '@/components/ui/RenderIcon'
import ListNavigaitonMenu from './ListNavigaitonMenu'
import SocialLink from './SocialLink'

const Footer = () => {
  const plane = useRef<HTMLDivElement>(null)
  const maxRotate = 45

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
    <footer
      className={`w-full bg-light transition-0-5s overflow-hidden`}
      id='footer'
    >
      <div
        className={`container-2xl flex flex-col justify-between  w-full  h-full relative`}
      >
        <IconRound className='pointer-events-none absolute left-1/2 top-16 z-1 h-fit w-5/6 sm:w-3/5 lg:w-2/5' />
        <div className='w-full py-3'>
          <div className='flex flex-col sm:grid sm:grid-cols-3'>
            <div className='max-w-[400px] 2xl:max-w-[600px] h-full'>
              <AnimationLottie animationPath={developer1} />
            </div>
            <div
              onMouseMove={(e) => {
                manageMouseMove(e)
              }}
              className='h-full w-full flex flex-col justify-center px-3 col-span-2 relative z-10 mb-5'
            >
              <div ref={plane}>
                <p className='text-xs md:text-sm 2xl:text-md text-center font-semibold text-text-1'>
                  interested in working together?
                </p>
                <div className='w-full mb-1 sm:mb-2 xl:mb-5 '>
                  <IconContact />
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <span className='text-xs leading-none'>
                    Drop me and email:
                  </span>
                  <Link
                    className='text-[18px] sm:text-sm'
                    href='mailto:phongphanq089@gmail.com'
                    title='phongphanq089@gmail.com'
                  >
                    phongphanq089@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====  RENDER LIST MENU */}
        <ListNavigaitonMenu />
        {/* =====  END */}
        <div className='flex text-center flex-col md:flex-row justify-between w-full items-center gap-4'>
          <SocialLink />
          <div className='flex flex-col'>
            <ScrollTop />
            <span className='text-[18px] 2xl:text-sm font-medium'>
              @2024-All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
