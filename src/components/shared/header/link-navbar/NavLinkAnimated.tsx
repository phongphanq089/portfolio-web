'use client'
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
interface propsType {
  heading: string
  subTitle: string
  imgSrc: string
  href: string
}
const NavLinkAnimated = ({ heading, subTitle, imgSrc, href }: propsType) => {
  const ref = useRef(null)

  const pathname = usePathname()
  console.log(pathname)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%'])
  const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%'])

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
            className={`relative z-10 block font-bold  transition-colors duration-500 group-hover:text-color-1 text-md whitespace-nowrap lg:text-xl xl:text-2xl 2xl:text-4xl ${
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
            <span className='absolute top-0 -right-6 text-sm font-medium rounded-sm'>
              {`(${subTitle})`}
            </span>
          </motion.span>
        </div>

        <motion.img
          style={{
            top,
            left,
            translateX: '-50%',
            translateY: '-50%',
          }}
          variants={{
            initial: { scale: 0, rotate: '-12.5deg' },
            whileHover: { scale: 1, rotate: '12.5deg' },
          }}
          transition={{ type: 'spring' }}
          src={imgSrc}
          className='absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64'
          alt={`Image representing a link for ${heading}`}
        />

        <motion.div
          variants={{
            initial: {
              x: '25%',
              opacity: 0,
            },
            whileHover: {
              x: '0%',
              opacity: 1,
            },
          }}
          transition={{ type: 'spring' }}
          className='relative z-10 p-1 2xl:p-4 text-xs'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            width='60'
            height='60'
            className='text-color-1'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
            />
          </svg>
        </motion.div>
      </motion.div>
    </Link>
  )
}

export default NavLinkAnimated
