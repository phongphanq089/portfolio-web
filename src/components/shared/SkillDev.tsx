/* eslint-disable @next/next/no-img-element */
'use client'
import { bgLine, skillDevJson } from '@/assets'
import CodeBlock from '@/components/shared/CodeBlock'
import AnimationLottie from '@/components/ui/AnimationLottie'
import React from 'react'
import HeadingSection from '../ui/heading-section'

const SkillDev = () => {
  return (
    <section className='container-xxl mb-2 overflow-hidden'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div className='w-full relative'>
          <div className='absolute top-0 left-0'>
            <HeadingSection text='MY SKILL /' />
          </div>
          <AnimationLottie animationPath={skillDevJson} />
        </div>
        <div className='flex items-center mt-[-100px] sm:mt-[-170px] lg:mt-0'>
          <div></div>
          <CodeBlock />
        </div>
      </div>
    </section>
  )
}

export default SkillDev
