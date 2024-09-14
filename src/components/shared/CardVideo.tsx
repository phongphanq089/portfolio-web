'use client'
import React, { MouseEvent, useState } from 'react'
import { Card } from '../ui/card'
import HeroVideoDialog from '../ui/VideoHeroDialog'
import { motion } from 'framer-motion'

interface propsType {
  title: string
  thumbnail: string
  videoUrl: string
}

const CardVideo = ({ title, thumbnail, videoUrl }: propsType) => {
  const [rotateX, setRotateX] = useState<number>(0)
  const [rotateY, setRotateY] = useState<number>(0)
  const [shine, setShine] = useState<string>('50% 50%')

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const { width, height, left, top } = card.getBoundingClientRect()

    const x = e.clientX - (left + width / 2)
    const y = e.clientY - (top + height / 2)

    const rotateY = (x / width) * 20
    const rotateX = -(y / height) * 20

    setRotateX(rotateX)
    setRotateY(rotateY)

    const shineX = (x / width) * 100
    const shineY = (y / height) * 100
    setShine(`${shineX}% ${shineY}%`)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setShine('50% 50%')
  }
  return (
    <Card className='shadow-lg p-2 h-full '>
      <div className='flex flex-col'>
        <HeroVideoDialog
          className='dark:hidden block'
          animationStyle='from-center'
          videoSrc={videoUrl}
          thumbnailSrc={thumbnail}
          thumbnailAlt={title}
        />
        <HeroVideoDialog
          className='hidden dark:block'
          animationStyle='from-center'
          videoSrc={videoUrl}
          thumbnailSrc={thumbnail}
          thumbnailAlt={title}
        />
        <h3 className='text-sm mt-auto py-2'>{title}</h3>
      </div>
    </Card>
  )
}

export default CardVideo
