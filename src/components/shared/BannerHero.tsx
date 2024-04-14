'use client'
import React, { useRef, useState } from 'react'
import { ImageResize } from './ImageResize'
import Text3d from '../design-system/Text3d'
import BlurryCursor from './Cursor'
import CardDevelper from './CardDevelper'
import ButtonStyle from '../design-system/ButtonStyle'
import SocialProfile from './SocialProfile'

const BannerHero = () => {
  const plane: React.RefObject<HTMLDivElement> = useRef(null)
  const maxRotate = 45

  const [isActive, setIsActive] = useState(false)

  const manageMouseMove = (e: any) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const perspective = window.innerWidth * 4
    const rotateX = maxRotate * x - maxRotate / 2
    const rotateY = (maxRotate * y - maxRotate / 2) * -1
    if (plane.current) {
      plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
    }
  }
  return (
    <div className='container-xxl mb-5 lg:mb-0 lg:py-7'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div>
          <div
            onMouseMove={(e) => {
              manageMouseMove(e)
            }}
            className='mb-3'
          >
            <div ref={plane}>
              <Text3d
                primary={`HI THERE, I'M`}
                secondary={`HI THERE, I'M`}
                className='text-2xl xs:text-3xl sm:text-4xl md:text-auto-text'
              />
              <Text3d
                primary={'PHONG PHAN'}
                secondary={'PHONG PHAN'}
                className='text-2xl xs:text-3xl sm:text-4xl md:text-auto-text'
              />
            </div>
          </div>

          <div className='relative'>
            <div className=''>
              <p
                onMouseOver={() => {
                  setIsActive(true)
                }}
                onMouseLeave={() => {
                  setIsActive(false)
                }}
                className='text-xs sm:text-sm 2xl:text-md mb-3 sm:mb-5'
              >
                I am an enthusiastic and passionate frontend developer, always
                looking for opportunities to flex my creativity and professional
                expertise. With a spirit of continuous learning and active
                critical thinking, I am committed to bringing true value to
                every project I am involved with.
              </p>
              <BlurryCursor isActive={isActive} />
            </div>
          </div>
          <div className='flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6'>
            <ButtonStyle
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-message-square-more'
                >
                  <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
                  <path d='M8 10h.01' />
                  <path d='M12 10h.01' />
                  <path d='M16 10h.01' />
                </svg>
              }
            >{`Download cv`}</ButtonStyle>
            <SocialProfile />
          </div>
        </div>
        <div className='relative'>
          <div className='md:max-w-[600px] relative z-10 dark:opacity-45'>
            <ImageResize
              src={'/image/bg-in-hero.png'}
              alt='bg-in-hero.png'
              heightSize='pt-[120%]'
            />
          </div>
          <div className='w-[100%] sm:w-[80%] md:w-[60%] lg:w-[80%] top-0 lg:top-[-70px] left-[50%] translate-x-[-50%] absolute z-20'>
            <ImageResize
              src={'/image/banner-dev.png'}
              alt='bg-in-hero.png'
              heightSize='pt-[115%]'
            />
          </div>
          <div className='absolute bottom-0 sm:top-[50%] 2xl:top-[70%] left-[40%] sm:left-[30%] translate-x-[-50%] z-30'>
            <CardDevelper />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerHero
