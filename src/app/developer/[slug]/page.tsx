import LayoutWrapperDetail from '@/components/layout/LayoutWrapDetail'
import { ListCard } from '@/components/pages/developer/ListCard'
import CategoryTabChange from '@/components/shared/CategoryTabChange'
import HeadingPage from '@/components/shared/HeadingPage'
import {
  categoriesDeveloper,
  developerQueryCategory,
  footerQuery,
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
  const category = await sanityFetch<SanityDocument>({
    query: categoriesDeveloper,
  })

  const footeNav = await sanityFetch<SanityDocument>({
    query: footerQuery,
  })

  let listDeveloper
  try {
    listDeveloper = await sanityFetch<SanityDocument>({
      query: developerQueryCategory,
      params,
    })
  } catch (error) {
    return notFound()
  }

  return (
    <LayoutWrapperDetail footer={footeNav as SanityDocument}>
      <div className='container-2xl'>
        <HeadingPage text='Tool Resources' />
        <div className='agencium-subtitle'>
          <CategoryTabChange
            category={category as SanityDocument}
            path='/developer'
          />
        </div>

        <ListCard items={listDeveloper as SanityDocument} quantityLimit={9} />
      </div>
    </LayoutWrapperDetail>
  )
}

export default PageCategory
