'use client'
import { projectDeveloper } from '@/components/contants/data-poduct-portfolio'
import LayoutWrapper from '@/components/layout/LayoutWrapper'
import { HoverEffect } from '@/components/ui/CardHoverEffect'
import TabMotion from '@/components/ui/Tabs'
import React, { useState } from 'react'

const tabs = [
  'Icon',
  'Illustuslation',
  'Photo',
  'Video',
  'Color',
  'Background',
  'Typography',
  'Library',
  'Tools',
  'Implementations',
  'Components',
]
const PageDeveloper = () => {
  const [selected, setSelected] = useState(tabs[0])
  return (
    <LayoutWrapper>
      <div className='container-2xl '>
        <div className='px-4 py-4 rounded-2xl flex flex-wrap items-center gap-2 justify-center'>
          {tabs.map((tab) => (
            <TabMotion
              text={tab}
              selected={selected === tab}
              setSelected={setSelected}
              key={tab}
            />
          ))}
        </div>
        <HoverEffect items={projectDeveloper} />
      </div>
    </LayoutWrapper>
  )
}

export default PageDeveloper
