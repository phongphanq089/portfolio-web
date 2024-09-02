'use client'
import { useHookPagination } from '@/hooks/useHookPagination'
import { SanityDocument } from 'next-sanity'
import React from 'react'
import CardBlog from './CardBlog'
import { urlFor } from '@/sanity/config'
import NoData from '@/components/shared/NoData'
import ReactPaginate from 'react-paginate'
import IconCore from '@/components/ui/IconCore'

const ListBlogs = ({
  quantityLimit,
  items,
}: {
  quantityLimit: number
  items: SanityDocument
}) => {
  const perPage = quantityLimit || 10
  const { currentItems, pageCount, handlePageClick } = useHookPagination(
    items,
    perPage
  )

  return (
    <div>
      <div className='grid grid-cols-1 gap-4'>
        {currentItems.length >= 0 ? (
          <>
            {currentItems?.map((blog: SanityDocument, index: number) => {
              return (
                <CardBlog
                  key={`${blog.title}-${index}-${index + 1}`}
                  title={blog?.title}
                  mainImage={urlFor(blog.mainImage.asset._ref).url()}
                  description={blog?.meta_description}
                  createdAt={blog?._createdAt}
                  slug={blog?.slug.current}
                />
              )
            })}
          </>
        ) : (
          <NoData />
        )}
      </div>
      {items?.length > perPage && (
        <div className='flex items-center justify-center mx-auto py-4'>
          <ReactPaginate
            breakLabel='...'
            nextLabel={<IconCore icon='arrow-right' />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel={<IconCore icon='arrow-left' />}
            containerClassName='flex items-center gap-3 pagination-cusstommer'
            activeClassName='active'
          />
        </div>
      )}
    </div>
  )
}

export default ListBlogs
