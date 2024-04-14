import { projects } from '@/components/contants/data-poduct-portfolio'
import { NextImageResize } from '@/components/shared/ImageResize'
import BtnLearnMore from '@/components/ui/BtnLearnMore'
import ButtonStyle from '@/components/ui/ButtonStyle'
import { CardContainer, CardItem } from '@/components/ui/Card3d'
import CardProject from '@/components/ui/CardProject'
import HeadingBlock from '@/components/ui/HeadingBlock'
import IconCore from '@/components/ui/IconCore'
import Link from 'next/link'
import React from 'react'

const ListProject = () => {
  return (
    <div className='container-xxl'>
      <div className='mb-3 md:mb-9'>
        <HeadingBlock text={'MY PROJECT'} />
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
        <div className='flex justify-center gap-4'>
          <ButtonStyle className='flex gap-4'>
            View All
            <IconCore icon='arrow-right' />
          </ButtonStyle>
        </div>
      </div>
    </div>
  )
}

export default ListProject
