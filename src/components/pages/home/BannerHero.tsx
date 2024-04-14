'use client'
import React, { useRef } from 'react'
import { NextImageResize } from '../../shared/ImageResize'
import Text3d from '../../ui/Text3d'
import CardDevelper from '../../shared/CardDevelper'
import ButtonStyle from '../../ui/ButtonStyle'
import SocialProfile from '../../shared/SocialProfile'
import IconCore from '@/components/ui/IconCore'

const BannerHero = () => {
  const plane: React.RefObject<HTMLDivElement> = useRef(null)

  const maxRotate = 45

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
    <section className='container-xxl  mb-16 2xl:py-7'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div data-aos='fade-right' data-aos-delay='200'>
          <div
            ref={plane}
            onMouseMove={(e) => {
              manageMouseMove(e)
            }}
            className='mb-3'
          >
            <Text3d
              primary={`HI THERE, I'M`}
              secondary={`HI THERE, I'M`}
              className='text-2xl dark:text-light text-color-3 xs:text-xl sm:text-4xl md:text-auto-text'
            />
            <Text3d
              primary={'PHONG PHAN'}
              secondary={'PHONG PHAN'}
              className='text-2xl dark:text-light text-color-3 xs:text-3xl sm:text-4xl md:text-auto-text'
            />
          </div>

          <p className='text-xs sm:text-sx 2xl:text-sm mb-3 sm:mb-5'>
            I am an enthusiastic and passionate frontend developer, always
            looking for opportunities to flex my creativity and professional
            expertise. With a spirit of continuous learning and active critical
            thinking, I am committed to bringing true value to every project I
            am involved with.
          </p>
          <div className='flex flex-col xl:flex-row xl:items-center gap-4 sm:gap-6 relative z-20'>
            <ButtonStyle
              icon={<IconCore icon='pdf' className='fill-light' />}
            >{`Download cv`}</ButtonStyle>
            <SocialProfile />
          </div>
        </div>
        <div
          className='relative'
          data-aos='zoom-in-up'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <div className='absolute block-center w-[370px] md:w-[500px] xl:max-w-[500px] lg:relative z-0 dark:opacity-45'>
            <NextImageResize
              src={'/image/bg-in-hero.png'}
              alt='bg-in-hero.png'
              className='pt-[112%] 2xl:pt-[112%]'
            />
          </div>
          <div className='w-[100%] mx-auto sm:w-[80%] md:w-[60%] lg:w-[80%] top-0 lg:top-[-60px] 2xl:top-[-90px] left-[50%] lg:translate-x-[-50%] lg:absolute z-20 '>
            <NextImageResize
              src={'/image/banner-dev.png'}
              alt='bg-in-hero.png'
              className='pt-[115%]'
            />
          </div>
          <div className='absolute bottom-0 sm:top-[50%] xl:top-[75%] left-[40%] sm:left-[30%] translate-x-[-50%] z-30'>
            <CardDevelper />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerHero
