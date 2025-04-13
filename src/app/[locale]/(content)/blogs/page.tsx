import { categoryPostList } from '@/sanity/lib/query'
import { sanityClientFetch } from '@/sanity/lib/sanityClient'
import React from 'react'
import Categoried from '../resoures/components/Categoried'
import ListBlog from './components/ListBlog'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pageBlog')
  const translatedTitle = t('title')
  const translatedDescription = t('description')
  return generateSeoMetadata({
    title: translatedTitle,
    description: translatedDescription,
  })
}

export const revalidate = 60
const PageBlogs = async () => {
  let categoried
  try {
    categoried = await sanityClientFetch.fetch(categoryPostList)
  } catch (error) {
    console.error('Error fetching categories:', error)
  }

  return (
    <div className='min-h-screen mt-[150px] relative z-10'>
      <div className='container-3xl'>
        <div className='my-10'>
          <Categoried initialData={categoried} />
        </div>
        <ListBlog />
      </div>
    </div>
  )
}

export default PageBlogs
