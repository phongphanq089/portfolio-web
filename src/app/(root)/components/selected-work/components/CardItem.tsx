/* eslint-disable @next/next/no-img-element */
'use client '
import CircularText from '@/components/ui/text-animation/CircularText'
import { TextShimmerWave } from '@/components/ui/text-animation/TextShimmerWave'
import { urlFor } from '@/sanity/config'
import { motion } from 'motion/react'
import Link from 'next/link'

interface PropsType {
  x: any
  y: any
  mainImage: string
  title: string
  urlPage: string
}

const CardItem = ({ x, y, urlPage, mainImage, title }: PropsType) => {
  return (
    <motion.div
      className={'vignette w-[25%] rounded-[20px] top-0'}
      style={{ x: x as any, y: y as any }}
    >
      <Link href={urlPage} target='_blank' className='block'>
        <div className='wrapImgResize img3And4 z-0'>
          <img src={urlFor(mainImage).url()} alt='phong phan' />
        </div>
      </Link>

      <div className='px-4  py-2 rounded-[20px] bg-black top-4 right-4 absolute'>
        <TextShimmerWave
          className='[--base-color:#f0f5eb] [--base-gradient-color:#a7e75e] text-[14px] font-bold uppercase'
          duration={1}
          spread={1}
          zDistance={1}
          scaleDistance={1.1}
          rotateYDistance={20}
        >
          {title}
        </TextShimmerWave>
      </div>
    </motion.div>
  )
}

export default CardItem
