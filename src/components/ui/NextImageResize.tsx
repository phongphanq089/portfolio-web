import { cn } from '@/lib/utils'
import { ALT_TEXT } from '@/setting'
import Image from 'next/image'
import React from 'react'

interface NextImageResizeProps {
  classNameContainer?: string
  classNameImage?: string
  classResize?: string
  src?: string
  alt?: string
}

/**
 * hover:scale-100 scale-105 transition-all duration-300
 */
const NextImageResize = ({
  classNameContainer,
  classNameImage,
  classResize,
  src,
  alt,
}: NextImageResizeProps) => {
  return (
    <div
      className={cn('wrapImgResize img16And9', classNameContainer, classResize)}
    >
      <Image
        src={src ? src : 'https://placehold.co/1980x1200/faf5ec/00000.png'}
        alt={alt ? alt : ALT_TEXT}
        height={600}
        width={1200}
        className={classNameImage}
        placeholder='blur'
        blurDataURL='https://placehold.co/1980x1200/faf5ec/00000.png'
      />
    </div>
  )
}

export default NextImageResize
