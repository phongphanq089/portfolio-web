import React from 'react'
import Categoried from './components/Categoried'
import { sanityClientFetch } from '@/sanity/lib/sanityClient'
import { categoryResource } from '@/types'
import { categoriesDeveloper } from '@/sanity/lib/query'
import ListResoures from './components/ListResoures'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { generateSeoMetadata } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pageResoure')
  const translatedTitle = t('title')
  const translatedDescription = t('description')
  return generateSeoMetadata({
    title: translatedTitle,
    description: translatedDescription,
  })
}

export const revalidate = 60
const PageResoures = async () => {
  let categoried: categoryResource[] = []
  try {
    categoried =
      await sanityClientFetch.fetch<categoryResource[]>(categoriesDeveloper)
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
  return (
    <div className='min-h-screen relative z-10'>
      <div className='container-3xl'>
        <div className='mt-[100px] md:mt-[150px]'>
          <Categoried initialData={categoried} />
        </div>

        <div className='mx-auto mt-10'>
          <ListResoures />
        </div>
      </div>
    </div>
  )
}

export default PageResoures
