'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { perspective } from '@/lib/motion-setting'

interface PropsType {
  navItem: {
    name: string
    link: string
  }
  index: number
}

const ListMenuNavItem = ({ navItem, index }: PropsType) => {
  return (
    <div className={`linkContainer overflow-hidden`}>
      <motion.div
        custom={index}
        variants={perspective}
        initial='initial'
        animate='enter'
        exit='exit'
        className='overflow-hidden'
      >
        <div className='group flex items-center gap-2'>
          <ArrowRight className='size-6 -translate-x-full text-black opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:translate-x-0 group-hover:opacity-100 md:size-9' />
          <Link
            href={navItem.link}
            className='z-10 -translate-x-4 md:-translate-x-6 cursor-pointer transition-transform duration-300 ease-out group-hover:translate-x-0 text-black  text-md md:text-2xl md:group-hover:translate-x-0  uppercase font-semibold whitespace-nowrap'
          >
            {navItem.name}
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default ListMenuNavItem
