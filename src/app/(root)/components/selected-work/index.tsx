/* eslint-disable @next/next/no-img-element */
'use client'

import TrueFocus from '@/components/ui/TrueFocus'
import React from 'react'
import { useSpring } from 'motion/react'
import Image from 'next/image'
import { SanityDocument } from 'next-sanity'
import CardItem from './components/CardItem'
import { urlFor } from '@/sanity/config'

const SelectWork = ({ lisProject }: { lisProject: SanityDocument }) => {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  }

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  }

  const mouseMove = (e: any) => {
    const { clientX, clientY } = e
    const targetX = clientX - (window.innerWidth / 2) * 0.25
    const targetY = clientY - (window.innerWidth / 2) * 0.3
    mousePosition.x.set(targetX)
    mousePosition.y.set(targetY)
  }

  const { x, y } = mousePosition

  return (
    <div className='relative w-full' onMouseMove={mouseMove}>
      <div className='pt-20 pb-20 px-8 !text-[6vw]'>
        <TrueFocus
          sentence='SELECTTED WORKS'
          manualMode={false}
          blurAmount={5}
          borderColor='#a3e635'
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>

      <div>
        {lisProject.map((project: SanityDocument, i: number) => {
          return (
            <div className={'gallery-work relative'} key={`p_${i}`}>
              <div className={'imageContainer'}>
                <Image
                  src={urlFor(project.backgroundImage).url()}
                  alt='image'
                  fill
                />
              </div>

              <CardItem
                x={x}
                y={y}
                urlPage={project.urlPage}
                mainImage={project.mainImage}
                title={project.title}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SelectWork
