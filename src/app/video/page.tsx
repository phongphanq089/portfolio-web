import LayoutWrapperDetail from '@/components/layout/LayoutWrapDetail'
import CardVideo from '@/components/shared/CardVideo'
import { footerQuery, videoQuery } from '@/lib/queries-data'
import { sanityFetch } from '@/sanity/sanityFetch'
import { SanityDocument } from 'next-sanity'
import React from 'react'

const PageVideo = async () => {
  const footeNav = await sanityFetch<SanityDocument>({
    query: footerQuery,
  })

  const listVideo = await sanityFetch<SanityDocument>({
    query: videoQuery,
  })

  return (
    <LayoutWrapperDetail footer={footeNav as SanityDocument}>
      <div className='container-2xl py-10'>
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
    </LayoutWrapperDetail>
  )
}

export default PageVideo
