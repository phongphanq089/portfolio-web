import ButtonStyle from '@/components/shared/ButtonStyle'
import { NextImageResize } from '@/components/shared/ImageResize'
import { Card } from '@/components/ui/card'
import { IconShapes_3 } from '@/components/ui/RenderIcon'
import { urlFor } from '@/sanity/config'
import Link from 'next/link'
import React from 'react'

interface CardProjectType {
  widthClass: string
  urlPage: string
  title: string
  _ref: string
  urlGithub: string
}

const CardProject = ({
  widthClass,
  urlGithub,
  urlPage,
  title,
  _ref,
}: CardProjectType) => {
  return (
    <Card
      className={`border-none shadow-none rounded-none bg-transparent mb-8 ${widthClass}`}
    >
      <Link
        href={urlPage}
        title={title}
        target='_blank'
        className='block relative transition-0-3s bg-image-card'
      >
        <NextImageResize src={urlFor(_ref).url()} alt={title} />
        <div className='bg-blur opacity-0 transition-0-3s backdrop-blur-xl w-full h-full absolute top-0 right-0 text-center font-bold text-[56px] flex items-center justify-center text-light '>
          View
        </div>
      </Link>
      <Link href={urlGithub} target='_blank' className='bg-black flex w-fit'>
        <ButtonStyle text='View Github' />
      </Link>
      <Link
        href={urlPage}
        title={title}
        target='_blank'
        className='flex items-center relative w-full justify-between gap-2 py-5 border-b border-color-4'
      >
        <h2 className='font-medium text-[18px] sm:text-sm 2xl:text-md  text-black'>
          {title}
        </h2>
        <IconShapes_3 className='w-5 h-5 ' />
      </Link>
    </Card>
  )
}

export default CardProject
