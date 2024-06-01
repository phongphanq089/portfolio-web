'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import Marquee from 'react-fast-marquee'

const FastMarquee = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('py-2', className)}>
      <Marquee>{children}</Marquee>
    </div>
  )
}

export default FastMarquee
