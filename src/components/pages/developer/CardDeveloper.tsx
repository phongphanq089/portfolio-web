import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import { Card, CardTitle } from './ElementCard'
import Image from 'next/image'
import { urlFor } from '@/sanity/config'
import { NextImageResize } from '@/components/shared/ImageResize'
import { IconShapes_3 } from '@/components/ui/RenderIcon'

interface CardDeveloperType {
  hoveredIndex: number | null
  setHoveredIndex: Dispatch<SetStateAction<number | null>>
  idx: number
  url: string
  _id: string
  title: string
  _ref: string
  tags: string[]
}

const CardDeveloper = ({
  hoveredIndex,
  setHoveredIndex,
  idx,
  url,
  _id,
  title,
  _ref,
  tags,
}: CardDeveloperType) => {
  return (
    <Link
      href={url}
      key={_id}
      target='_blank'
      className='relative group  block p-1 sm:p-2 h-full w-full '
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className='absolute inset-0 h-full w-full bg-color-4 block  rounded-3xl'
            layoutId='hoverBackground'
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <Card className='relative box-shadow-v1'>
        <NextImageResize
          src={urlFor(_ref).url()}
          alt={title}
          className='pt-[56.25%]'
        />

        <div className='flex flex-col gap-2 p-2'>
          <div className='flex justify-between items-center my-3'>
            <CardTitle className='text-sm uppercase'>{title}</CardTitle>
            <IconShapes_3 className='w-[20px] h-[20px]' />
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default CardDeveloper
