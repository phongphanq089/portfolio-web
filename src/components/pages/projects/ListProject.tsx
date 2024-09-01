'use client'
import { useHookPagination } from '@/hooks/useHookPagination'
import { SanityDocument } from 'next-sanity'
import React, { Suspense } from 'react'
import ReactPaginate from 'react-paginate'
import IconCore from '@/components/ui/IconCore'
import SkeletonCard from '@/components/shared/SkeletonCard'
import CardProject from './CardProject'

const ListProject = ({
  quantityLimit,
  items,
}: {
  quantityLimit: number
  items: SanityDocument
}) => {
  const perPage = quantityLimit || 9
  const { currentItems, pageCount, handlePageClick } = useHookPagination(
    items,
    perPage
  )
  return (
    <div>
      <div className='flex flex-wrap  justify-center gap-6'>
        {currentItems?.map((card: SanityDocument, index: number) => {
          let widthClass = ''

          switch (index % 4) {
            case 0:
              widthClass = 'w-full md:w-[50%] xl:w-[33%]'
              break
            case 1:
              widthClass = 'w-full md:w-[50%] xl:w-[40%]'
              break
            case 2:
              widthClass = 'w-full md:w-[50%] xl:w-[50%]'
              break
            case 3:
              widthClass = 'w-full md:w-[50%] xl:w-[40%]'
              break
            default:
              widthClass = 'w-full md:w-[60%] xl:w-[60%]'
          }
          return (
            <Suspense key={index} fallback={<SkeletonCard />}>
              <CardProject
                widthClass={widthClass}
                urlGithub={card.urlGithub}
                urlPage={card.urlPage}
                title={card.title}
                _ref={card?.mainImage?.asset?._ref}
              />
            </Suspense>
          )
        })}
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

export default ListProject
