'use client'
import ClerkBadgeVariant from '@/components/ui/Badge'
import { MainMenusGradientCard } from '@/components/ui/Card-ui/GradientCard'
import NextImageResize from '@/components/ui/NextImageResize'
import { urlFor } from '@/sanity/config'
import Link from 'next/link'
import React from 'react'

interface propCardItem {
  title: string
  slug: string
  description: string
  image: string
  category: object[]
}

const BlogCardItem = ({
  title,
  description,
  image,
  slug,
  category,
}: propCardItem) => {
  return (
    <Link
      href={`/blog-detail/${slug}`}
      title={title}
      className='inline-block h-full'
    >
      <MainMenusGradientCard
        className='p-4'
        description={description}
        title={title}
      >
        <NextImageResize src={urlFor(image).url()} classResize='img16And9' />
        <div className='mt-3 flex items-center flex-wrap gap-3'>
          {category.map((item: any) => {
            return <ClerkBadgeVariant text={item.title} key={item.title} />
          })}
        </div>
      </MainMenusGradientCard>
    </Link>
  )
}

export default BlogCardItem
