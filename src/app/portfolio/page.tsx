'use client'
import { projects } from '@/components/contants/data-poduct-portfolio'
import LayoutWrapper from '@/components/layout/LayoutWrapper'
import TextFullContainerHero from '@/components/shared/TextFullContainerHero'
import CardProject from '@/components/ui/CardProject'
import TabMotion from '@/components/ui/Tabs'
import React, { useState } from 'react'

const tabs = ['List Projects', 'List Components']

const Portfoliopage = () => {
  const [selected, setSelected] = useState(tabs[0])
  return (
    <LayoutWrapper>
      <div className='container-xxl'>
        <div className='mb-3 md:mb-9'>
          <TextFullContainerHero text1='List' text2='Project' />
        </div>
        <div className='px-1 py-2 sm:p-4 flex  items-center gap-2 justify-center fixed bottom-2 left-0 w-full z-[900] xs:relative bg-color-3 xs:bg-transparent rounded-2xl'>
          {tabs.map((tab) => (
            <TabMotion
              text={tab}
              selected={selected === tab}
              setSelected={setSelected}
              key={tab}
              className='whitespace-nowrap  w-full xs:w-fit'
            />
          ))}
        </div>
        <div className='container-2xl'>
          <div className='relative grid gap-6 md:grid-cols-3 md:gap-8 md:pb-[7rem]'>
            {projects?.map((item, index) => {
              if (index > 5) return null
              return (
                <CardProject
                  name={item.name}
                  index={index}
                  src={item.src}
                  key={`projects-${index}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default Portfoliopage
