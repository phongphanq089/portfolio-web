'use client'
import { cn } from '@/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
    image: string
  }[]
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        'grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 py-2  md:py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={`${idx}-${item?.link}-${item.title}`}
          className='relative group  block p-1 sm:p-2 h-full w-full'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 h-full w-full bg-rbg-2 dark:bg-slate-800/[0.8] block  rounded-3xl'
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
          <Card className='relative'>
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className='w-full h-full object-cover'
            />
            <div className='flex items-center justify-between gap-2 p-2'>
              <CardTitle className='text-[18px]'>{item.title}</CardTitle>
              <span className='px-1 rounded-2xl bg-black text-white absolute top-1 right-1'>
                Illustration
              </span>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full  overflow-hidden bg-white border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20',
        className
      )}
    >
      <div className='relative z-50'>{children}</div>
    </div>
  )
}
export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4 className={cn('text-color-3 font-bold tracking-wide', className)}>
      {children}
    </h4>
  )
}
export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        'mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  )
}
