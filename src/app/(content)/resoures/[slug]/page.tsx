import Pagination from '@/components/shared/Pagination'
import TabsLiquid from '@/components/shared/TabsLiquid'

import CardResoure from '@/app/(content)/resoures/components/CardResoure'
import {
  categoriesDeveloper,
  countQueryCategory,
  developerQueryCategory,
} from '@/sanity/query'
import { sanityFetch } from '@/sanity/sanityFetch'
import { SanityDocument } from 'next-sanity'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
  params: {
    slug: string
  }
  searchParams?: {
    page?: string
    pageSize?: string
  }
}

interface CartResouresType {
  _id: string
  title: string
  url: string
  mainImage: {
    alt: string
    asset: {
      _ref: string
    }
  }
  categoryDeveloper: string[]
}

type ExtendedCartResources = SanityDocument<CartResouresType>

const PageResoures = async ({ params, searchParams }: Props) => {
  let listDeveloper
  let totalQueryCategory

  const page = parseInt(searchParams?.page || '1', 10)
  const pageSize = 12

  const start = (page - 1) * pageSize

  const category = await sanityFetch<ExtendedCartResources>({
    query: categoriesDeveloper,
  })

  try {
    listDeveloper = await sanityFetch<ExtendedCartResources[]>({
      query: developerQueryCategory,
      param: { ...params, start, limit: pageSize },
    })

    totalQueryCategory = await sanityFetch<number>({
      query: countQueryCategory,
      param: { ...params },
    })
  } catch (error) {
    return notFound()
  }

  console.log(listDeveloper)
  const totalPages = Math.ceil(totalQueryCategory / pageSize)

  return (
    <div className='container-3xl py-20'>
      <div className='mb-[50px]'>
        <TabsLiquid category={category as SanityDocument} />
      </div>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:gap-16'>
        {listDeveloper &&
          listDeveloper.map((item: CartResouresType, index: number) => {
            return (
              <CardResoure
                key={index}
                _ref={item?.mainImage?.asset?._ref}
                title={item.title}
                url={item.url}
              />
            )
          })}
      </div>
      <div className='w-full flex justify-center items-center mt-16'>
        <Pagination totalPages={totalPages} currentPage={page} />
      </div>
    </div>
  )
}

export default PageResoures
