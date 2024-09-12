'use client'
import Link from 'next/link'
import React, { MouseEvent, useState } from 'react'
import { motion } from 'framer-motion'
import ButtonAutoRounded from './ButtonAutoRounded'
import { NextImageResize } from '@/components/shared/ImageResize'
interface Proptype {
  index: number
  image: string
  name: string
  urlPage: string
  tags: []
}

const ProjectItem = ({ image, name, urlPage }: Proptype) => {
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
    <div className='w-full mb-10 last:mb-0 project-item relative cursor-pointer'>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: '1000px',
        }}
      >
        <motion.div
          className='relative rounded-md overflow-hidden shadow-md'
          style={{
            backgroundPosition: shine,
            backgroundSize: 'cover',
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <ButtonAutoRounded />
          <Link href={urlPage} target='_blank' title={name}>
            <NextImageResize src={image} alt={name} />
          </Link>
        </motion.div>
        <div className='flex items-center flex-wrap justify-between gap-1 py-2 px-2'>
          <h3 className='text-sm font-bold'>{name}</h3>
          <div className='flex items-center  gap-1'>
            <div className='p-1 rounded-xl border-2 border-black bg-black text-light font-bold'>
              DVELOPMENT
            </div>
            <div className='p-1 rounded-xl border-2 border-black bg-black text-light font-bold'>
              2024
            </div>
          </div>
        </div>
        <div className='agencium-subtitle'></div>
      </motion.div>
    </div>
  )
}

export default ProjectItem
