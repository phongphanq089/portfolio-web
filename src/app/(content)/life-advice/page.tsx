import React from 'react'
import CardVideo from './components/CardVideo'
import { sanityFetch } from '@/sanity/sanityFetch'
import { SanityDocument } from 'next-sanity'
import { videoQuery } from '@/sanity/query'

const PageLifeAdvice = async () => {
  const listVideo = await sanityFetch<SanityDocument>({
    query: videoQuery,
  })

  return (
    <div className='container-3xl py-20'>
      <div className='grid grid-cols-1  sm:grid-cols-2 gap-2 lg:gap-5'>
        {listVideo.map((item: SanityDocument, index: number) => (
          <CardVideo
            key={item._id}
            title={item.title}
            thumbnail={item.thumbnail}
            videoUrl={item.videoURL}
          />
        ))}
      </div>
    </div>
  )
}

export default PageLifeAdvice
