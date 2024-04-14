'use client'
import Image from 'next/image'
import { useRef } from 'react'
import ButtonStyle from '../design-system/ButtonStyle'

interface propsType {
  projects: {
    name: string
    client: string
    description?: string
    src: string
    year?: number
  }[]
  reversed?: boolean
}
export default function CardProfile({ projects, reversed }: propsType) {
  const firstImage: any = useRef(null)
  const secondImage: any = useRef(null)
  let requestAnimationFrameId: any = null
  let xPercent = reversed ? 100 : 0
  let currentXPercent = reversed ? 100 : 0
  const speed = 0.15

  const manageMouseMove = (e: any) => {
    const { clientX } = e
    xPercent = (clientX / window.innerWidth) * 100
    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate)
    }
  }

  const animate = () => {
    const xPercentDelta = xPercent - currentXPercent
    currentXPercent = currentXPercent + xPercentDelta * speed
    const firstImagePercent = 66.66 - currentXPercent * 0.33
    const secondImagePercent = 33.33 + currentXPercent * 0.33
    if (firstImage.current && secondImage.current) {
      firstImage.current.style.width = `${firstImagePercent}%`
      secondImage.current.style.width = `${secondImagePercent}%`
    }

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null
    } else {
      window.requestAnimationFrame(animate)
    }
  }

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e)
      }}
      className={'double gap-3 md:gap-5 xl:gap-10'}
    >
      <div ref={firstImage} className={'imageContainer'}>
        <div className={'stretchyWrapper'}>
          <Image src={`/image/${projects[0].src}`} fill={true} alt={'image'} />
        </div>
        <div className={'body'}>
          <div className='flex lg:items-center flex-col lg:flex-row gap-2 justify-between w-full py-3'>
            <h3 className='text-[16px] sm:text-sm md:text-md font-bold'>
              {projects[0].name}
            </h3>
            <ButtonStyle className='!text-[14px] md:!text-[16px] !py-1 md:!py-4'>
              View More
            </ButtonStyle>
          </div>
        </div>
      </div>

      <div ref={secondImage} className={'imageContainer'}>
        <div className={'stretchyWrapper'}>
          <Image src={`/image/${projects[1].src}`} fill={true} alt={'image'} />
        </div>
        <div className={'body'}>
          <div className='flex lg:items-center gap-2 flex-col lg:flex-row  justify-between w-full py-3'>
            <h3 className='text-[16px] sm:text-sm md:text-md font-bold'>
              {projects[0].name}
            </h3>
            <ButtonStyle className='!text-[14px] md:!text-[16px]  !py-1 md:!py-4'>
              View More
            </ButtonStyle>
          </div>
        </div>
      </div>
    </div>
  )
}
