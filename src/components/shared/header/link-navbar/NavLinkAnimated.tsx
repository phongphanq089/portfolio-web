/* eslint-disable @next/next/no-img-element */
'use client'
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon404 } from '@/assets'
interface propsType {
  heading: string
  subTitle: string
  imgSrc: string
  href: string
  isNotfound: boolean
}
const NavLinkAnimated = ({
  heading,
  subTitle,
  imgSrc,
  href,
  isNotfound,
}: propsType) => {
  const ref = useRef(null)

  const pathname = usePathname()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e: any) => {
    const refCurrent = ref?.current as any
    if (refCurrent) {
      const rect = refCurrent.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5

      x.set(xPct)
      y.set(yPct)
    }
  }
  return (
    <Link href={href} title={heading} className='w-full inline-block'>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        initial='initial'
        whileHover='whileHover'
        className='group relative flex items-center justify-between gap-6 border-b border-gray-500 2xl:py-1 transition-colors duration-500 hover:border-neutral-50'
      >
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: 'spring',
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className={`relative z-10 block font-bold  transition-colors duration-500 group-hover:text-color-1  whitespace-nowrap text-xl xl:text-2xl 2xl:text-4xl leading-none ${
              pathname === href ? 'text-color-1' : 'text-white'
            }`}
          >
            {heading.split('').map((l: string, i: number) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: 'spring' }}
                className='inline-block'
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
        </div>
      </motion.div>
    </Link>
  )
}

export default NavLinkAnimated
