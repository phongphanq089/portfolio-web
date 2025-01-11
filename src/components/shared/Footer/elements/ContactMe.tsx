'use client'
import { developer1 } from '@/assets'
import AnimationLottie from '@/components/ui/AnimationLottie'
import { IconContact } from '@/components/ui/RenderIcon'
import Link from 'next/link'
import React, { useRef } from 'react'

const ContactMe = () => {
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
    <div>
      <div className='w-full translate-y-16'>
        <div className='flex items-center justify-between'>
          <div className='text-sm font-medium'>16-06-2000</div>
          <div
            onMouseMove={(e) => {
              manageMouseMove(e)
            }}
            className='h-full w-[400px] flex flex-col justify-center px-3 col-span-2 relative z-10 mb-5'
          >
            <div ref={plane}>
              <p className='text-xs uppercase text-center font-semibold text-text-1'>
                interested in working together
              </p>
              <Link
                href={'/contact'}
                className='w-full mb-3 xl:mb-5 block link-contact '
              >
                <IconContact />
              </Link>
              <div className='flex flex-col justify-center items-center'>
                <span className='text-xs leading-none'>Drop me and email:</span>
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
          <div className='text-sm font-medium'>From Vietnamese.</div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
