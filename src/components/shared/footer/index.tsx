/* eslint-disable @next/next/no-img-element */
'use client'
import { developer1 } from '@/assets'
import AnimationLottie from '@/components/ui/AnimationLottie'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import ScrollTop from '../ScrollTop'
import { IconContact, IconRound } from '@/components/ui/RenderIcon'
import ListNavigaitonMenu from './ListNavigaitonMenu'
import SocialLink from './SocialLink'
import { SanityDocument } from 'next-sanity'
import { footerQuery } from '@/lib/queries-data'
import { sanityFetch } from '@/sanity/sanityFetch'

const Footer = ({ footer }: { footer: SanityDocument }) => {
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
                <p className='text-xs md:text-sm uppercase 2xl:text-md text-center font-semibold text-text-1'>
                  interested in working together
                </p>
                <Link
                  href={'/contact'}
                  className='w-full mb-3 xl:mb-5 block link-contact '
                >
                  <IconContact />
                </Link>
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
        <ListNavigaitonMenu footer={footer as SanityDocument} />
        {/* =====  END */}
        <div className='flex md:text-center flex-col md:flex-row justify-between w-full md:items-center gap-4 pt-5 pb-2 relative'>
          {/* <SocialLink /> */}
          <div className='flex flex-col text-sm sm:text-md md:text-xl text-start font-bold text-color-3 leading-none'>
            <p>© 2024 Phong Phan</p>
            <p>All rights reserved</p>
          </div>
          <div className='flex flex-col absolute bottom-3 sm:bottom-5 right-3 md:relative'>
            <ScrollTop />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
