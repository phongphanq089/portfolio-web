'use client'
import { stylesWithCssVar } from '@/lib/utils'
import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useRef } from 'react'

const TextSrcollMotion = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  })

  const textX = useTransform(scrollYProgress, [0.1, 0.7], ['80%', '-100%'])
  const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7])

  const opacityBorder = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72],
    [1, 1, 0]
  )
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72, 0.8, 0.9],
    [0, 0, 1, 1, 0]
  )

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7])

  return (
    <motion.section
      style={stylesWithCssVar({
        opacity: opacitySection,
        '--scale': scale,
        '--opacity-border': opacityBorder,
      })}
      ref={targetRef}
      className='mt-[50vh] flex h-[500vh] items-start justify-start'
    >
      <div className='sticky top-1/2 left-1/2 min-w-[300px] min-h-[300px] sm:min-h-[25rem] sm:min-w-[25rem]  lg:min-h-[30rem] lg:min-w-[30rem]  xl:min-h-[40rem] xl:min-w-[40rem] -translate-x-[14%] xs:-translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem] before:border-color-1 rounded-md before:opacity-[var(--opacity-border)]'>
        <motion.p
          aria-hidden
          style={{ x: textX, y: '-50%' }}
          className='whitepspace-nowrap font-heading2 bg-clip-text text-color-3 min-w-screen absolute top-1/2 -translate-y-1/2 left-[calc(-50vw+5rem)] sm:left-[calc(-50vw+10rem)] 2xl:left-[calc(-50vw+20rem)] z-[11] text-[100px] sm:text-[15vw]  2xl:text-[23rem] [-webkit-text-stroke:1px_var(--color-heading)] font-semibold'
        >
          Develop Your Idea.
        </motion.p>

        <motion.p
          style={{
            opacity: finalTextOpacity,
            scale: finalTextScale,
            y: '-50%',
            x: '-50%',
          }}
          className='absolute  left-1/2 top-1/2 -translate-y-1/2 -translate-x-[10%] sm:-translate-x-1/2   bg-gradient-to-tr from-[#E0B379] to-[#e8eaed] bg-clip-text  font-heading2 text-center  leading-[1] text-color-3 text-[60px] sm:text-[14vw] 2xl:text-[20rem] font-semibold'
        >
          SELECTED
          <br />
          <span className=''>WORKS</span>
        </motion.p>
        <span className='absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] border-l-[2.5rem] border-color-1 opacity-[var(--opacity-border)]' />
      </div>
    </motion.section>
  )
}

export default TextSrcollMotion
