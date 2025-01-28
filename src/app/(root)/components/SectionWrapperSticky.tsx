'use client'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import BannerHero from './banner-hero/BannerHero'
import SectionService from './section-service'

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
      <motion.section style={{ scale, rotate }} className='sm:sticky top-0'>
        <BannerHero />
      </motion.section>

      <motion.section className='sm:sticky top-0 rounded-t-[20px]  md:rounded-t-[50px]  overflow-hidden'>
        {/* <SectionAbout /> */}
        <SectionService />
      </motion.section>
    </div>
  )
}

export default SectionWrapperSticky
