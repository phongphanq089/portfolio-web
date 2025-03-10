/* eslint-disable @next/next/no-img-element */
'use client'
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface propsType {
  heading: string

  href: string
  isActive: boolean
}
const NavLinkAnimated = ({
  heading,

  href,
  isActive,
}: propsType) => {
  const ref = useRef(null)

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
        className='group relative flex items-center  justify-end gap-6  2xl:py-1 transition-colors duration-500 '
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
            className={`relative z-10 whitespace-nowrap text-end block font-bold  duration-500 text-white  font-sans hover:text-black transition-colors uppercase text-2xl md:text-4xl lg:text-[5vw] leading-none ${
              isActive ? '!text-black' : 'text-white'
            }`}
          >
            {heading.split('').map((l: string, i: number) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: 'spring' }}
                className='inline-block mr-[2px]'
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
