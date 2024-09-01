import LayoutWrapperDetail from '@/components/layout/LayoutWrapDetail'
import ListBlogs from '@/components/pages/blogs/ListBlogs'
import CategoryTabChange from '@/components/shared/CategoryTabChange'
import HeadingPage from '@/components/shared/HeadingPage'
import {
  getCategoriesQuery,
  getCategoryRelatedPostQuery,
} from '@/lib/queries-data'
import { sanityFetch } from '@/sanity/sanityFetch'
import { SanityDocument } from 'next-sanity'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
  params: {
    slug: string
  }
}

const PageCategory = async ({ params }: Props) => {
  const categories = await sanityFetch<SanityDocument>({
    query: getCategoriesQuery,
  })

  let listBlog
  try {
    listBlog = await sanityFetch<SanityDocument>({
      query: getCategoryRelatedPostQuery,
      params,
    })
  } catch (error) {
    return notFound()
  }
  return (
    <LayoutWrapperDetail>
      <div className='container-2xl'>
        <HeadingPage text='BLOG POST' />
        <div className='agencium-subtitle'>
          <CategoryTabChange
            category={categories as SanityDocument}
            path='/blogs'
          />
        </div>
      </div>

      <div className='container-2xl'>
        <ListBlogs items={listBlog} quantityLimit={10} />
      </div>
    </LayoutWrapperDetail>
  )
}

export default PageCategory
