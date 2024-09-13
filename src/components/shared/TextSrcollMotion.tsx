'use client'
import { stylesWithCssVar } from '@/lib/utils'
import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useRef } from 'react'
import { MouseImageTrail } from './MouseImageTrail'

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

        <MouseImageTrail
          renderImageBuffer={50}
          rotationRange={25}
          images={[
            'https://cdn.sanity.io/images/i6rvgdeu/production/4a878910fa0a318a23d7eae2c75409022af97d77-564x953.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/05ca16fc314deb0bda0ef5d52d153a9c938c25c3-564x746.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/45b2097ee41ea6480d220daf1c7f14f79272628a-563x751.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/211472fa90dfcf28cf915f1e745b166a93276919-564x730.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/fb783f8147af80f7a40482e63d7ccf6d3b39f531-563x747.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/300eac77abaede86f1b687cbf8764f01450645ab-564x889.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/d8c1f916d5c15bd8e9b4268213babe9bdf2ab311-564x746.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/f2a9b9cf4c9d058cf8e05196d4dc281dc3980318-563x895.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/328d1bfb7d3b7217650af20aa5e023d9b6c2475d-564x746.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/5083e3d4c845885fb53feb0d72ea090595da4e76-564x930.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/fc58af557254edcd43c4980ceca737f982725ad8-564x1002.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/72272da7de33554ea05dd5ecabcdd3fd18f45fb9-563x1014.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/45b2097ee41ea6480d220daf1c7f14f79272628a-563x751.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/211472fa90dfcf28cf915f1e745b166a93276919-564x730.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/fb783f8147af80f7a40482e63d7ccf6d3b39f531-563x747.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/300eac77abaede86f1b687cbf8764f01450645ab-564x889.jpg',
            'https://cdn.sanity.io/images/i6rvgdeu/production/d8c1f916d5c15bd8e9b4268213babe9bdf2ab311-564x746.jpg',
          ]}
        >
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
        </MouseImageTrail>

        <span className='absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] border-l-[2.5rem] border-color-1 opacity-[var(--opacity-border)]' />
      </div>
    </motion.section>
  )
}

export default TextSrcollMotion
