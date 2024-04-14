import { skillDevJson } from '@/assets'
import CodeBlock from '@/components/shared/CodeBlock'
import AnimationLottie from '@/components/ui/AnimationLottie'
import HeadingBlock from '@/components/ui/HeadingBlock'
import React from 'react'

const SkillDev = () => {
  return (
    <section className='container-xxl mb-2 overflow-hidden'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div
          className='w-full relative'
          data-aos='zoom-in-right'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <div className='absolute top-0 left-0'>
            <HeadingBlock text={'MY SKILL'} />
          </div>
          <AnimationLottie animationPath={skillDevJson} />
        </div>
        <div
          className='flex items-center mt-[-100px] sm:mt-[-170px] lg:mt-0'
          data-aos='fade-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <div></div>
          <CodeBlock />
        </div>
      </div>
    </section>
  )
}

export default SkillDev
