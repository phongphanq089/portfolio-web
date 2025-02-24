'use client'
import React from 'react'

import VideoDialog from '@/components/ui/VideoDialog'

interface propsType {
  title: string
  thumbnail: string
  videoUrl: string
}

const CardVideo = ({ title, thumbnail, videoUrl }: propsType) => {
  return (
    <div className='shadow-lg  h-full rounded-lg p-2 border border-gray-300 dark:border-gray-700'>
      <div className='flex flex-col'>
        <VideoDialog
          className='dark:hidden block'
          animationStyle='from-center'
          videoSrc={videoUrl}
          thumbnailSrc={thumbnail}
          thumbnailAlt={title}
        />
        <VideoDialog
          className='hidden dark:block'
          animationStyle='from-center'
          videoSrc={videoUrl}
          thumbnailSrc={thumbnail}
          thumbnailAlt={title}
        />
        <h3 className='text-sm mt-auto py-2'>{title}</h3>
      </div>
    </div>
  )
}

export default CardVideo
