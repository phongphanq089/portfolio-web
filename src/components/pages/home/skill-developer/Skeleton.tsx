'use client'
import { beanhead } from '@/assets'
/* eslint-disable @next/next/no-img-element */
import listSkill from '@/components/contants/skill'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

const Avatar = () => {
  return (
    <div className='w-[85px] h-auto'>
      <img
        src={beanhead.src}
        alt='phong phan'
        className='w-full h-auto object-cover'
      />
    </div>
  )
}

export const SkeletonOne = () => {
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
      className='flex  w-full h-full  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2'
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

export const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: '100%',
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ['0%', '100%'],
      transition: {
        duration: 2,
      },
    },
  }
  const arr = new Array(6).fill(0)
  return (
    <motion.div
      initial='initial'
      animate='animate'
      whileHover='hover'
      className='flex  w-full h-full  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2'
    >
      {arr.map((_, i) => (
        <motion.div
          key={'skelenton-two' + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + '%',
          }}
          className='flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-gradient-to-r from-pink-500 to-violet-500  w-full h-4'
        ></motion.div>
      ))}
    </motion.div>
  )
}

export const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  }
  return (
    <motion.div
      initial='initial'
      animate='animate'
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      className='flex  w-full h-full  dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2'
      style={{
        background:
          'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
      }}
    >
      <motion.div className='h-full w-full rounded-lg'></motion.div>
    </motion.div>
  )
}

export const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  return (
    <motion.div
      initial='initial'
      animate='animate'
      whileHover='hover'
      className='flex  w-full h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2'
    >
      <motion.div
        variants={first}
        className='h-full w-1/3 rounded-2xl bg-black p-1 sm:p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center'
      >
        <Avatar />
        <p className='sm:text-sm text-xs text-center font-semibold text-white mt-4'>
          Keep things simple with Javascript
        </p>
        <p className='border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4'>
          Delusional
        </p>
      </motion.div>
      <motion.div className='h-full relative z-20 w-1/3 rounded-2xl bg-black p-1 sm:p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center'>
        <Avatar />
        <p className='sm:text-sm text-xs text-center font-semibold text-white mt-4'>
          Tailwind CSS is cool, you know
        </p>
        <p className='border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4'>
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className='h-full w-1/3 rounded-2xl bg-black p-1 sm:p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center'
      >
        <Avatar />
        <p className='sm:text-sm text-xs text-center font-semibold text-white mt-4'>
          I love React, Vue , RSC, and Zutand.
        </p>
        <p className='border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4'>
          Headache
        </p>
      </motion.div>
    </motion.div>
  )
}

export const SkeletonFive = () => {
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
      className='flex  w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2'
    >
      <motion.div
        variants={variants}
        className='flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-black dark:bg-black'
      >
        <Avatar />
        <p className='text-xs text-white'>
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className='flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-black dark:bg-black'
      >
        <p className='text-xs text-white whitespace-nowrap'>
          I LOVE JAVASCRIPT
        </p>
        <div className='h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0' />
      </motion.div>
    </motion.div>
  )
}

export const SkeletonSix = () => {
  return (
    <>
      <Marquee pauseOnHover={true} direction='right'>
        <div className='flex items-center gap-3 ml-5'>
          {listSkill?.map((icon) => {
            return (
              <span
                key={icon}
                className='w-[90px] h-[90px] 2xl:w-[120px] 2xl:h-[120px] flex items-center  justify-center p-2 rounded-2xl border'
              >
                <img
                  src={icon}
                  className='object-cover w-full h-auto'
                  alt='phong phan'
                />
              </span>
            )
          })}
        </div>
      </Marquee>
      <Marquee pauseOnHover={true} direction='left'>
        <div className='flex items-center gap-3 ml-5'>
          {listSkill?.map((icon) => {
            return (
              <span
                key={icon}
                className='w-[90px] h-[90px] 2xl:w-[120px] 2xl:h-[120px] flex items-center  justify-center  p-2 rounded-2xl border'
              >
                <img
                  src={icon}
                  className='object-cover w-full h-auto'
                  alt='phong phan'
                />
              </span>
            )
          })}
        </div>
      </Marquee>
    </>
  )
}
