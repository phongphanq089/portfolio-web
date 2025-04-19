'use client'
import { stagger, useAnimate, motion } from 'framer-motion'
import React, { useEffect } from 'react'

import { exampleImages } from './imageDemo'
import Floating, { FloatingElement } from '@/components/ui/Card-ui/Floating'
import { MoveDown } from 'lucide-react'
import { useTranslations } from 'next-intl'

const BlockIntroduceProject = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate('img', { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [])

  const t = useTranslations('project')

  return (
    <div
      className='flex w-dvw h-screen justify-center items-center  overflow-hidden relative'
      ref={scope}
    >
      <motion.div
        className='z-50 text-center space-y-4 items-center flex flex-col bg-black/70 pb-3 pt-7'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <p className='text-sm max-w-[700px] mx-auto text-center leading-none text-white font-semibold px-2 '>
          {t('description')}
        </p>

        <div className='relative font-calendas  w-full z-10 text-2xl md:text-2xl font-bold uppercase flex justify-center items-center text-primary-color whitespace-pre'>
          Scroll down <MoveDown />
        </div>
      </motion.div>

      <Floating sensitivity={-1} className='overflow-hidden'>
        <FloatingElement depth={0.5} className='top-[20%] left-[11%]'>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[0].url}
            className='w-16 h-16 md:w-24 md:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform'
          />
        </FloatingElement>
        <FloatingElement depth={1} className='top-[10%] left-[32%]'>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[1].url}
            className='w-20 h-20 md:w-28 md:h-28 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform'
          />
        </FloatingElement>
        <FloatingElement depth={2} className='top-[2%] left-[53%]'>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[2].url}
            className='w-28 h-40 md:w-40 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform'
          />
        </FloatingElement>
        <FloatingElement depth={1} className='top-[20%] left-[83%]'>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[3].url}
            className='w-24 h-24 md:w-52 md:h-72 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform'
          />
        </FloatingElement>

        <FloatingElement depth={1} className='top-[40%] left-[10%]'>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[4].url}
            className='w-28 h-28 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform'
          />
        </FloatingElement>
        <FloatingElement depth={2} className='top-[70%] left-[77%]'>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[7].url}
            className='w-28 h-28 md:w-[250px] md:h-[300px] object-cover hover:scale-105 duration-200 cursor-pointer transition-transform'
          />
        </FloatingElement>

        <FloatingElement depth={4} className='top-[73%] left-[35%]'>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[5].url}
            className='w-40 md:w-[200px] h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform'
          />
        </FloatingElement>
        <FloatingElement depth={1} className='top-[70%] left-[50%]'>
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[6].url}
            className='w-24 h-24 md:w-36 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform'
          />
        </FloatingElement>
      </Floating>
    </div>
  )
}

export default BlockIntroduceProject
