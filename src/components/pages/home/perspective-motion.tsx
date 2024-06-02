/* eslint-disable @next/next/no-img-element */
'use client'
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import Lenis from 'lenis'
import React, { useEffect, useRef } from 'react'
import SkillDev from '../../shared/SkillDev'
import SkillMarquee from '../../shared/SkillMarquee'
import CardAbout from '@/components/shared/card-about'

interface srollType {
  scrollYProgress: MotionValue<number>
}

const PerspectiveMotion = () => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <section ref={container} className='relative min-h-[200vh] mb-14'>
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </section>
  )
}

export default PerspectiveMotion

const Section1 = ({ scrollYProgress }: srollType) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  return (
    <motion.div
      style={{ scale, rotate }}
      className='lg:sticky top-0 min-h-screen bg-color-6 text-[3.5vw]  text-white  rounded-2xl'
    >
      <CardAbout />
    </motion.div>
  )
}

const Section2 = ({ scrollYProgress }: srollType) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    <motion.div style={{ scale, rotate }} className='relative'>
      <div className='bg-light rounded-2xl border border-t'>
        <SkillDev />
        <SkillMarquee />
      </div>
    </motion.div>
  )
}
