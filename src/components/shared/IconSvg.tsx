/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils'
import React from 'react'

const IconSvg = ({ src, className }: { src: string; className?: string }) => {
  return (
    <div className={cn('max-w-[40px]  sm:max-w-[50px]', className)}>
      <img
        src={src}
        alt='Next generation developer'
        className={cn('object-cover w-full h-auto', className)}
      />
    </div>
  )
}

export default IconSvg
