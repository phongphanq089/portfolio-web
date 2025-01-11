'use client'
import React from 'react'
import Layout from './layout/Layout'
import HeadingSection from '@/components/shared/HeadingSection'
import TrueFocus from '@/components/ui/TrueFocus'

const SectionService = () => {
  return (
    <section className='relative  min-h-[150vh] w-full  overflow-hidden bg-dark'>
      <div className='container-3xl'>
        {/* <HeadingSection text1='ABOUT' text2='ME.' /> */}

        <div className='mt-20 mb-6 px-8 !text-[6vw]'>
          <TrueFocus
            sentence='ABOUT ME'
            manualMode={false}
            blurAmount={5}
            borderColor='#a3e635'
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>
        <Layout />
      </div>
    </section>
  )
}

export default SectionService
