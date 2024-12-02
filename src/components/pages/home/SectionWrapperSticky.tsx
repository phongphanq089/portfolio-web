'use client'
import React, { useRef } from 'react'
import BannerHero from './banner-hero/BannerHero'
import { useScroll, useTransform, motion } from 'framer-motion'

const SectionWrapperSticky = () => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

  return (
    <div ref={container}>
      <motion.section style={{ scale, rotate }} className='sticky  top-0'>
        <BannerHero />
      </motion.section>

      <motion.section className='sticky top-0 bg-color-5 rounded-xl'>
        {' '}
        <div className='min-h-screen bg-dark'></div>
      </motion.section>
    </div>
  )
}

export default SectionWrapperSticky
