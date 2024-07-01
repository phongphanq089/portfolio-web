import { projectDeveloper } from '@/components/contants/data-poduct-portfolio'
import LayoutWrapper from '@/components/layout/LayoutWrapper'
import { HoverEffect } from '@/components/ui/CardHoverEffect'
import React from 'react'
import TextFullContainerHero from '@/components/shared/TextFullContainerHero'
import TabsAnimation from '@/components/shared/TabsAnimation'
import { IconHeading } from '@/components/ui/RenderIcon'

const tabs = [
  'Icon',
  'Illustuslation',
  'Photo',
  'Color',
  'Background',
  'Typography',
  'Library',
  'Tools',
  'Implementations',
  'Components',
]

const PageDeveloper = () => {
  return (
    <LayoutWrapper>
      <div className='container-2xl '>
        <div className='max-w-xl mx-auto mt-4'>
          <div className='flex items-center justify-center gap-2'>
            <IconHeading className='w-[30px] md:w-[50px] h-auto' />
            <h1 className='text-sm md:text-xl font-bold text-color-3 uppercase whitespace-nowrap'>
              Assorted Resources
            </h1>
          </div>
        </div>
        <TabsAnimation tabs={tabs} />

        <HoverEffect items={projectDeveloper} />
      </div>
    </LayoutWrapper>
  )
}

export default PageDeveloper
