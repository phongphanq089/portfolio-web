'use client'

/* eslint-disable @next/next/no-img-element */
import { beanhead } from '@/assets'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

const Avatar = () => {
  return (
    <div className='w-[40px] h-auto'>
      <img
        src={beanhead.src}
        alt='phong phan'
        className='w-full h-auto object-cover'
      />
    </div>
  )
}

export const SkeletonOne = ({
  text1,
  text2,
}: {
  text1: string
  text2: string
}) => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  }
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      initial='initial'
      whileHover='animate'
      className='flex  w-full  min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2'
    >
      <motion.div
        variants={variants}
        className='grid grid-cols-12 gap-2 rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-black dark:bg-black'
      >
        <div className='col-span-1'>
          <Avatar />
        </div>
        <p className='text-xs text-white col-span-11 pl-3'>{text1}</p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className='flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-black dark:bg-black'
      >
        <p className='text-xs text-white px-2 uppercase'> {text2}</p>
        <div className='h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0' />
      </motion.div>
    </motion.div>
  )
}

export const SkeletonTwo = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  }
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      initial='initial'
      whileHover='animate'
      className='flex  w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 relative z-50'
    >
      <motion.div
        variants={variants}
        className='flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-1 2xl:p-2  items-center space-x-2 bg-black dark:bg-black'
      >
        <div className='w-4 h-4 lg:h-6 lg:w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0' />
        <div className='w-full bg-color-4 h-3 md:h-4 rounded-full' />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className='flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-black dark:bg-black'
      >
        <div className='w-full bg-color-4 h-3 md:h-4 rounded-full' />
        <div className='w-4 h-4 lg:h-6 lg:w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0' />
      </motion.div>
      <motion.div
        variants={variants}
        className='flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-black dark:bg-black'
      >
        <div className='w-4 h-4 lg:h-6 lg:w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0' />
        <div className='w-full bg-color-4 h-3 md:h-4 rounded-full' />
      </motion.div>
    </motion.div>
  )
}
