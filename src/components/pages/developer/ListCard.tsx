'use client'
import { cn } from '@/utils/cn'
import { SanityDocument } from 'next-sanity'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import IconCore from '@/components/ui/IconCore'
import { useHookPagination } from '@/hooks/useHookPagination'
import CardDeveloper from './CardDeveloper'

export const ListCard = ({
  items,
  className,
  quantityLimit,
}: {
  quantityLimit: number
  items: SanityDocument
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const perPage = quantityLimit || 9
  const { currentItems, pageCount, handlePageClick } = useHookPagination(
    items,
    perPage
  )
  return (
    <div>
      <div
        className={cn(
          'grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3  xl:grid-cols-3 py-2 ',
          className
        )}
      >
        {currentItems
          ? currentItems.map((item: SanityDocument, idx: number) => (
              <CardDeveloper
                key={item._id}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                idx={idx}
                url={item.url}
                _id={item._id}
                _ref={item?.mainImage?.asset?._ref}
                title={item.title}
                tags={item.tags}
              />
            ))
          : null}
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
