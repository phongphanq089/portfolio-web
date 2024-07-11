'use client'
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGird'
import { IconShapes_1 } from '@/components/ui/RenderIcon'
import React from 'react'
import { cn } from '@/lib/utils'
import { items } from './ListItem'

const SkillDeveloper = () => {
  return (
    <>
      <div className='container'>
        <div className=' flex flex-col mb-5'>
          <div className='flex items-center gap-2'>
            <IconShapes_1 className='w-[30px] md:w-[70px] h-auto' />
            <h1 className='heading-section leading-none'>MY SERVICE</h1>
          </div>
          <h1 className='heading-section leading-none xl:ml-[200px]'>
            SKILL DEVLEOPER
          </h1>
        </div>
      </div>
      <BentoGrid className='mx-auto'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn('[&>p:text-lg]', item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </>
  )
}

export default SkillDeveloper
