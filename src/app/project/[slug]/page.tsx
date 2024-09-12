import LayoutWrapperDetail from '@/components/layout/LayoutWrapDetail'
import ListProject from '@/components/pages/projects/ListProject'
import CategoryTabChange from '@/components/shared/CategoryTabChange'
import HeadingPage from '@/components/shared/HeadingPage'
import {
  categoriesProject,
  footerQuery,
  projectQueryCategory,
} from '@/lib/queries-data'
import { sanityFetch } from '@/sanity/sanityFetch'
import { SanityDocument } from 'next-sanity'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
  params: {
    slug: string
  }
}

const PageProject = async ({ params }: Props) => {
  const category = await sanityFetch<SanityDocument>({
    query: categoriesProject,
  })
  const footeNav = await sanityFetch<SanityDocument>({
    query: footerQuery,
  })
  let listDeveloper
  try {
    listDeveloper = await sanityFetch<SanityDocument>({
      query: projectQueryCategory,
      params,
    })
  } catch (error) {
    return notFound()
  }

  return (
    <LayoutWrapperDetail footer={footeNav as SanityDocument}>
      <div className='container-2xl '>
        <HeadingPage text='Portfolio Metro' />
        <div className='agencium-subtitle'>
          <span>PORTFOLIO</span>
          <div className='flex items-center gap-2 md:absolute bottom-1 left-1/2 md:-translate-x-1/2'>
            <CategoryTabChange
              category={category as SanityDocument}
              path='/project'
            />
          </div>
        </div>
        <ListProject items={listDeveloper} quantityLimit={6} />
      </div>
    </LayoutWrapperDetail>
  )
}

export default PageProject
