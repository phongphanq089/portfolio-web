import { projects } from '@/components/contants/data-poduct-portfolio'
import LayoutWrapper from '@/components/layout/LayoutWrapper'
import TextFullContainerHero from '@/components/shared/TextFullContainerHero'
import CardProject from '@/components/ui/CardProject'
import React from 'react'

const Portfoliopage = () => {
  return (
    <LayoutWrapper>
      <div className='container-xxl'>
        <div className='mb-3 md:mb-9'>
          <TextFullContainerHero text1='List' text2='Project' />
        </div>
        <div className='container-2xl'>
          <div className='relative grid gap-6 md:grid-cols-2 md:gap-8 md:pb-[7rem]'>
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
