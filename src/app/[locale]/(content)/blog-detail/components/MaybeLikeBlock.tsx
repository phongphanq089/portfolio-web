'use client'
import { formatDate, getLocalizedValue } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { SanityDocument } from 'next-sanity'
import Link from 'next/link'
import React from 'react'

const MaybeLikeBlock = ({
  postDetail,
  lang,
}: {
  postDetail: SanityDocument
  lang: string
}) => {
  const t = useTranslations('blogDetail')
  return (
    <div className='realtive sticky top-[80px]'>
      <div className='w-full min-h-[400px] rounded-md bg-primary-color relative z-2 px-5 py-6'>
        <span className='block mb-3  text-black font-semibold'>
          {t('maybeYouLike.title')}
        </span>
        {postDetail.relatedPosts.map((cardItem: any, index: any) => {
          return (
            <Link
              href={`/blog-detail/${cardItem.slug.current}`}
              key={index}
              className='mb-2 pb-2 border-b border-gray-200 text-white  block'
            >
              <div className='pl-9 relative'>
                <div className='rounded-full w-6 h-6 flex items-center justify-center  bg-black text-white absolute top-2 left-0 '>
                  {index + 1}
                </div>
                <h3 className='text-[16px] 2xl:text-sm font-semibold leading-none mb-1'>
                  {getLocalizedValue(cardItem.title, lang)}
                </h3>
                <span className='font-medium text-gray-300 max-2xl:text-[12px]'>
                  Published at: {formatDate(cardItem?.publishedAt)}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
      <h3 className='text-md 2xl:text-lg uppercase font-semibold  relative z-0 text-gray-300'>
        {t('maybeYouLike.title')}
      </h3>
    </div>
  )
}

export default MaybeLikeBlock
