import { formatDate } from '@/lib/utils'
import { SanityDocument } from 'next-sanity'
import Link from 'next/link'
import React from 'react'

const MaybeLikeBlock = ({ postDetail }: { postDetail: SanityDocument }) => {
  return (
    <div className='realtive sticky top-10'>
      <div className='w-full min-h-[400px] rounded-md bg-primary-color relative z-2 px-5 py-6'>
        <span className='block mb-3 text-black'> Maybe you like</span>
        {postDetail.relatedPosts.map((cardItem: any, index: any) => {
          return (
            <Link
              href={`/blog-detail/${cardItem.slug.current}`}
              key={index}
              className='mb-2 pb-2 border-b border-color-3 text-black  block'
            >
              <div className='pl-9 relative'>
                <div className='rounded-full w-6 h-6 flex items-center justify-center  bg-black text-white absolute top-2 left-0 '>
                  {index + 1}
                </div>
                <h3 className='text-sm font-semibold leading-none mb-1'>
                  {cardItem.title}
                </h3>
                <span className='font-medium'>
                  Published at: {formatDate(cardItem?.publishedAt)}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
      <h3 className='text-lg uppercase font-semibold  relative z-0'>
        Maybe you like
      </h3>
    </div>
  )
}

export default MaybeLikeBlock
