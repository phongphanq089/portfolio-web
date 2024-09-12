/* eslint-disable @next/next/no-img-element */
'use client'
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGird'
import React from 'react'
import { cn } from '@/lib/utils'
import { items } from './ListItem'
import HyperText from '@/components/ui/HyperText'

const SkillDeveloper = () => {
  return (
    <>
      <div className='container-2xl'>
        <div className='flex flex-col-reverse sm:flex-row mb-5 sm:mb-10 gap-1 sm:gap-4'>
          <HyperText
            className='text-xl lg:text-[7vw] font-semibold text-white leading-none mt-auto'
            text='MY SERVICE'
          />
          <div className='flex flex-col w-[130px] 2xl:w-[200px]'>
            <div className='flex items-center gap-[5px] mb-1'>
              <div className='w-2 h-2 bg-white'></div>
              <h3 className='text-white font-semibold text-[14px] 2xl:text-[18px] whitespace-nowrap uppercase'>
                {`SKILL`}
              </h3>
            </div>
            <img
              src='https://clarissemichard.com/9.2e0f7da2.gif'
              alt='phongphan'
              className='object-cover w-full h-auto rounded-md'
            />
          </div>
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
