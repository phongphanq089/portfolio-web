// author: Khoa Phan <https://www.pldkhoa.dev>

'use client'

import { useState } from 'react'
import Image from 'next/image'

import { cn, getLocalizedValue } from '@/lib/utils'
import StackingCards, {
  StackingCardItem,
} from '@/components/ui/Card-ui/StackCard'
import { urlFor } from '@/sanity/config'
import { usePathname } from 'next/navigation'
import { QuotesType } from '@/types'

export default function StackingCardsDemo({
  listQuotes,
}: {
  listQuotes: QuotesType[]
}) {
  const pathname = usePathname()

  const [container, setContainer] = useState<HTMLElement | null>(null)

  const lang = (pathname.split('/')[1] as 'vi' | 'en') || 'en'

  return (
    <div
      className='bg-transparent  text-white'
      ref={(node) => setContainer(node)}
    >
      <StackingCards
        totalCards={listQuotes.length}
        scrollOptons={{ container: { current: container } }}
      >
        <div className='relative font-calendas h-[50vh] md:h-screen w-full z-10 text-2xl md:text-7xl font-bold uppercase flex justify-center items-center text-primary-color whitespace-pre'>
          Scroll down ↓
        </div>
        {listQuotes.map((quote, index) => {
          return (
            <StackingCardItem
              key={quote._id}
              index={index}
              className='h-screen'
              topPosition='100px'
            >
              <div
                style={{
                  backgroundColor: quote.bgColor,
                }}
                className={cn(
                  `bg-[${quote.bgColor}]`,
                  'flex-col xl:flex-row px-2 md:px-8 py-10 flex  min-h-[70vh] xl:h-[80vh] mx-auto relative'
                )}
              >
                <div className='flex-1 flex flex-col mt-3'>
                  <h3 className='font-bold text-[32px] md:text-[3vw] mb-5 line-clamp-7 leading-none text-black'>
                    {getLocalizedValue(quote.Description, lang)}
                  </h3>
                </div>

                <div className='w-[80%]  xl:w-1/3 rounded-xl aspect-video relative overflow-hidden'>
                  <Image
                    src={urlFor(quote.Image.asset._ref).url()}
                    alt={getLocalizedValue(quote.Description, lang)}
                    className='object-cover'
                    fill
                  />
                </div>
              </div>
            </StackingCardItem>
          )
        })}
      </StackingCards>
    </div>
  )
}
