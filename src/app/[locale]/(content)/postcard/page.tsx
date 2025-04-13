import { videoQuery } from '@/sanity/lib/query'
import { sanityClientFetch } from '@/sanity/lib/sanityClient'
import { SanityDocument } from 'next-sanity'
import React from 'react'
import CardVideo from './components/CardVideo'

const PagePostCard = async () => {
  let listVideo
  try {
    listVideo = await sanityClientFetch.fetch(videoQuery)
  } catch (error) {
    console.error('Error fetching categories:', error)
  }

  return (
    <div className='container-3xl py-20 relative z-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-5'>
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

export default PagePostCard
