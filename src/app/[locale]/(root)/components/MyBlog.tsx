'use client'
import LoaderDataUI from '@/components/ui/LoaderDataUI'
import TrueFocus from '@/components/ui/typography-motion/TrueFocus'
import { listLatestBlogs } from '@/sanity/lib/query'
import { sanityClientFetch } from '@/sanity/lib/sanityClient'
import { BLogList } from '@/types'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import BlogCardItem from '../../(content)/blogs/components/CardBlogs'
import { getLocalizedValue } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { InteractiveHoverButton } from '@/components/ui/button/InteractiveHoverButton'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const MyBlog = () => {
  const pathname = usePathname()
  const { data: listBlog, isLoading: isLoadingDevelopers } = useQuery({
    queryKey: ['listBlogs'],
    queryFn: async () => {
      const resources =
        await sanityClientFetch.fetch<BLogList[]>(listLatestBlogs)
      return resources
    },
  })
  const lang = (pathname.split('/')[1] as 'vi' | 'en') || 'en'

  const t = useTranslations('blogHome')
  return (
    <div className='max-w-6xl mx-auto relative z-10 mt-20 mb-20 px-3'>
      <div className='text-[40px] sm:text-[60px] text-center flex items-center justify-center mb-20'>
        <TrueFocus
          sentence={t('title')}
          manualMode={false}
          blurAmount={5}
          borderColor='red'
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>
      {isLoadingDevelopers ? (
        <LoaderDataUI />
      ) : (
        <div className='grid grid-cols-1 gap-4  md:grid-cols-2'>
          {listBlog?.map((cardItem) => {
            return (
              <BlogCardItem
                key={cardItem._id}
                title={getLocalizedValue(cardItem.title, lang)}
                slug={cardItem.slug.current}
                description={getLocalizedValue(cardItem.meta_description, lang)}
                image={cardItem.mainImage.asset._ref}
                category={cardItem.category}
              />
            )
          })}
        </div>
      )}
      <div className=' flex items-center justify-center mt-10'>
        <Link href='/blogs'>
          <InteractiveHoverButton>{t('view')}</InteractiveHoverButton>
        </Link>
      </div>
    </div>
  )
}

export default MyBlog
