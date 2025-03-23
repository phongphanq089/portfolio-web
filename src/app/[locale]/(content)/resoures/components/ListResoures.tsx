'use client'
import { countQueryCategory, developerQueryCategory } from '@/sanity/lib/query'
import { sanityClientFetch } from '@/sanity/lib/sanityClient'
import { developerResource } from '@/types'
import { useQuery } from '@tanstack/react-query'
import {
  notFound,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import CardResoure from './CardResoure'
import { urlFor } from '@/sanity/config'
import { motion } from 'motion/react'
import LoaderDataUI from '@/components/ui/LoaderDataUI'
import useIsInViewport from '@/hooks/useIsInViewport'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const ListResoures = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const getCategory = searchParams.get('categoried')
  const pageSize = parseInt(searchParams.get('pagesize') || '1', 20)

  const interView = useIsInViewport('footer')

  const router = useRouter()

  const limit = 12

  const prevCategoryRef = useRef(getCategory)

  const createQueryString = (params: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams.toString())
    Object.entries(params).forEach(([key, value]) => newParams.set(key, value))
    return newParams.toString()
  }

  useEffect(() => {
    if (prevCategoryRef.current !== getCategory) {
      router.push(
        `${pathname}?${createQueryString({ categoried: getCategory as string, pagesize: '1' })}`
      )
      prevCategoryRef.current = getCategory
    }
  }, [getCategory, pathname, router])

  const {
    data: developers,
    isLoading: isLoadingDevelopers,
    error: errorDevelopers,
  } = useQuery({
    queryKey: ['resources', { pageSize, getCategory }],
    queryFn: async () => {
      const start = (pageSize - 1) * limit
      const slug = getCategory === 'all' ? 'all' : getCategory
      const resources = await sanityClientFetch.fetch<developerResource[]>(
        developerQueryCategory,
        { slug, start, limit }
      )
      return resources
    },
  })

  const {
    data: totalItems,
    isLoading: isLoadingCount,
    error: errorCount,
  } = useQuery({
    queryKey: ['developerCount', getCategory],
    queryFn: async () => {
      const slug = getCategory === 'all' ? 'all' : getCategory

      const count = await sanityClientFetch.fetch<number>(countQueryCategory, {
        slug,
      })
      return count
    },
    staleTime: 5 * 60 * 1000,
  })

  const totalPages = totalItems ? Math.ceil(totalItems / limit) : 1

  const maxVisiblePages = 3
  let startPage = Math.max(1, pageSize - Math.floor(maxVisiblePages / 2))
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1)
  }
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  )

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      router.push(
        `${pathname}?${createQueryString({ categoried: getCategory as string, pagesize: newPage.toString() })}`
      )
    }
  }

  if (errorDevelopers || errorCount) {
    return notFound()
  }

  return (
    <>
      {isLoadingDevelopers || isLoadingCount ? (
        <LoaderDataUI />
      ) : (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {developers?.map((cardItem) => {
            return (
              <CardResoure
                key={cardItem._id}
                title={cardItem.title}
                srcImage={urlFor(cardItem.mainImage.asset._ref).url()}
                alt={cardItem.mainImage.alt}
                link={cardItem.url}
              />
            )
          })}
        </div>
      )}
      <div
        className={cn(
          'fixed bottom-0 max-md:w-[90%] w-[40%] left-1/2 -translate-x-1/2 h-[60px]',
          interView ? 'hidden' : 'block'
        )}
      >
        {developers && developers.length > 0 && totalItems ? (
          <div
            className={cn(
              'blur-vignette bottom-0 left-0 w-full h-full z-10 bg-color-4'
            )}
            style={
              {
                '--radius': '10px',
                '--inset': '20px',
                '--transition-length': '44px',
                '--blur': '10px',
              } as React.CSSProperties
            }
          >
            <div className='flex justify-center gap-2  py-2 px-2 rounded-xl text-white blur-vignette z-60 relative'>
              <button
                onClick={() => handlePageChange(pageSize - 1)}
                disabled={pageSize === 1}
                className='px-4 py-2 bg-black rounded-lg disabled:opacity-50'
              >
                <ArrowLeft />
              </button>

              {startPage > 1 && (
                <span className='px-4 py-2 text-black'>...</span>
              )}
              {pageNumbers.map((pageNum) => (
                <motion.button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 rounded ${
                    pageSize === pageNum
                      ? 'bg-primary-color text-white'
                      : 'bg-black'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {pageNum}
                </motion.button>
              ))}
              {endPage < totalPages && (
                <span className='px-4 py-2 text-black'>...</span>
              )}
              <button
                onClick={() => handlePageChange(pageSize + 1)}
                disabled={pageSize === totalPages}
                className='px-4 py-2 bg-black  rounded-lg disabled:opacity-50'
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default ListResoures
