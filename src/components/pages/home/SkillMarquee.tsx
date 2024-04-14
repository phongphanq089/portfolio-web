import listSkill from '@/components/contants/skill'
import CardSkill from '@/components/ui/CardSkill'
import FastMarquee from '@/components/ui/FastMarquee'
import React from 'react'

const SkillMarquee = () => {
  return (
    <section className='xl:mt-[-100px] 2xl:mt-[-200px] mb-5'>
      <FastMarquee>
        <div className='grid grid-cols-5 md:flex w-full items-center gap-4 lg:gap-6 py-3 ml-4 md:ml-6 '>
          {listSkill?.map((icon) => {
            return <CardSkill key={icon} icon={icon} />
          })}
        </div>
      </FastMarquee>
    </section>
  )
}

export default SkillMarquee
