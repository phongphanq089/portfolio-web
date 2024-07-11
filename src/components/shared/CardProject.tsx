/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { CardContainer, CardItem } from '../ui/Card3d'
import Link from 'next/link'
import { NextImageResize } from './ImageResize'
import BtnLearnMore from './BtnLearnMore'

interface propsType {
  name: string
  index: number
  src: string
}

const CardProject = (props: propsType) => {
  const { name, index, src } = props

  return (
    <div className='even:md:translate-y-[7rem] p-0.25' key={`${name}-${index}`}>
      <div>
        <CardContainer>
          <CardItem
            translateZ='100'
            rotateX={20}
            rotateZ={-10}
            className='w-full mt-4'
          >
            <Link
              href={'#'}
              className='wrapImgResize imgSpecial1 rounded-xl overflow-hidden'
            >
              <img src={`/image/${src}`} alt='Nexgendev' />
            </Link>
          </CardItem>

          <div className='flex flex-col lg:flex-row  lg:items-center gap-1 justify-between mt-2 lg:mt-5'>
            <h3 className='text-sm xl:text-md font-bold'>{name}</h3>
            <BtnLearnMore text='View More' link='#' />
          </div>
        </CardContainer>
      </div>
    </div>
  )
}

export default CardProject
