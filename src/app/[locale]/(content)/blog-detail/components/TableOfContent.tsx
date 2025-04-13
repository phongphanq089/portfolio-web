'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { type HTMLProps, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import confetti from 'canvas-confetti'
import { Lock } from 'lucide-react'
import { useTranslations } from 'next-intl'

type Heading = {
  id: string
  text: string
  level: number
  index: number
}

const TableOfContent = ({
  className,
  idOfParentContainer,
  ...props
}: {
  readonly props?: HTMLProps<HTMLDivElement>
  readonly className?: string
  readonly idOfParentContainer: string
}) => {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeIds, setActiveIds] = useState<string[]>([])
  const [activeTableOfContentIds, setActiveTableOfContentIds] = useState<
    string[]
  >([])
  const [firstActiveHeading2, setFirstActiveHeading2] = useState<string | null>(
    null
  )
  const [lastActiveHeading2, setLastActiveHeading2] = useState<string | null>(
    null
  )
  const [bottomCoordinate, setBottomCoordinate] = useState<number>(0)

  const [isLastHeadingVisible, setIsLastHeadingVisible] = useState(false)
  const [topCoordinate, setTopCoordinate] = useState<number>(0)
  const refTableOfContentList = useRef<HTMLOListElement>(null)
  useEffect(() => {
    if (activeTableOfContentIds.length > 0) {
      setFirstActiveHeading2(activeTableOfContentIds[0])
      setLastActiveHeading2(
        activeTableOfContentIds[activeTableOfContentIds.length - 1]
      )
    } else {
      setFirstActiveHeading2(null)
      setLastActiveHeading2(null)
    }
  }, [activeTableOfContentIds])

  useEffect(() => {
    // Get coordinates of the bottom of the last active heading and the top of the first active heading
    const lastChildId =
      activeTableOfContentIds[activeTableOfContentIds.length - 1]
    const firstChildId = activeTableOfContentIds[0]
    const lastChild = document.getElementById(
      `${lastChildId}-table-of-content-item`
    )
    const firstChild = document.getElementById(
      `${firstChildId}-table-of-content-item`
    )

    if (lastChild && firstChild) {
      const lastChildRect = lastChild.getBoundingClientRect()
      const firstChildRect = firstChild.getBoundingClientRect()

      // Calculate relative coordinates from the ol element
      if (!refTableOfContentList.current) {
        return
      }
      setBottomCoordinate(
        lastChildRect.bottom -
          refTableOfContentList.current.getBoundingClientRect().top
      )
      setTopCoordinate(
        firstChildRect.top -
          refTableOfContentList.current.getBoundingClientRect().top
      )
    }
  }, [activeTableOfContentIds])

  useEffect(() => {
    if (!headings) {
      return
    }
    if (activeIds.length > 0) {
      const previousHeading = getPreviousHeading(activeIds[0], headings)
      if (previousHeading) {
        const activeIdsWithPreviousHeading = [previousHeading, ...activeIds]
        setActiveTableOfContentIds(activeIdsWithPreviousHeading)
      } else {
        setActiveTableOfContentIds(activeIds)
      }
    } else {
      // Keep the previous active ids if there are no active ids but without the first one
      setActiveTableOfContentIds((prevIds) => {
        if (prevIds.length > 0) {
          return prevIds.slice(1)
        }
        return []
      })
    }
  }, [activeIds, headings])

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    const content = document.getElementById(idOfParentContainer)
    if (!content) {
      return
    }

    const headingElements = Array.from(
      content.querySelectorAll('h1, h2, h3, h4, h5, h6')
    )

    const newHeadings: Heading[] = headingElements.map((elem, index) => {
      let id = elem.id
      if (!id) {
        id =
          elem.textContent
            ?.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[!@#$%^&*(),.?":{}|<>]/g, '') ?? ''
        elem.id = id
      }
      const level = Number.parseInt(elem.tagName.substring(1), 10)
      return { id, text: elem.textContent ?? '', level, index }
    })

    setHeadings(newHeadings)

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      const updateActiveIds = (
        prevIds: string[],
        entries: IntersectionObserverEntry[]
      ) => {
        const updatedIds = [...prevIds]
        let lastHeadingVisible = false

        for (const entry of entries) {
          const index = updatedIds.indexOf(entry.target.id)
          const isLastHeading =
            entry.target.id === headings[headings.length - 1]?.id

          if (entry.isIntersecting) {
            if (index === -1) {
              updatedIds.push(entry.target.id)
              updatedIds.sort(
                (a, b) =>
                  headingElements.findIndex((el) => el.id === a) -
                  headingElements.findIndex((el) => el.id === b)
              )
            }
            if (isLastHeading) {
              lastHeadingVisible = true
            }
          } else if (index !== -1) {
            updatedIds.splice(index, 1)
          }
        }

        setIsLastHeadingVisible(lastHeadingVisible)
        return updatedIds
      }

      setActiveIds((prevIds) => updateActiveIds(prevIds, entries))
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-10px',
      // threshold: [0.5, 1],
      threshold: [1],
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    )

    for (const elem of headingElements) {
      observer.observe(elem)
    }

    return () => {
      observer.disconnect()
    }
  }, [idOfParentContainer])

  function getPreviousHeading(id: string, headings: Heading[]) {
    const index = headings.findIndex((heading) => heading.id === id)
    if (index === 0) {
      return null
    }
    return headings[index - 1]?.id
  }

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }

  useEffect(() => {
    if (headings.length === 0) return

    const lastHeadingId = headings[headings.length - 1]?.id

    if (activeIds.includes(lastHeadingId)) {
      handleConfetti()
    }
  }, [activeIds, headings])

  // if (headings.length === 0) {
  //   return <ShinyGradientSkeletonHorizontal />
  // }
  const t = useTranslations('blogDetail')
  return (
    <nav
      className={cn(
        'card-gradient dark:bg-neutral-800  shadow-xl p-2 max-xl:!border-none',
        className
      )}
      {...props}
    >
      <div className='flex items-center justify-between pl-4 mb-3 border-b border-gray-400 pb-3'>
        <h3 className='font-bold text-sm '>{t('contentTable.title')}</h3>
        <svg
          width='25'
          height='25'
          viewBox='0 0 112 117'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          strokeWidth='2px'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path
            d='M71.21 8.59961V82.8196L57.54 90.6096L51.21 94.2196V18.5996L60.39 14.0096L71.21 8.59961Z'
            stroke='#0c0303'
            strokeLinejoin='round'
          />
          <path
            d='M40.39 43.4697V87.9697L10.08 35.6897L30.08 25.6897L40.39 43.4697Z'
            stroke='#0c0303'
            strokeLinejoin='round'
          />
          <path
            d='M89.1 90.1696L65.19 103.8L45.8 114.85L2.5 40.1696L10.08 35.6896L40.39 87.9696V12.3496L51.21 18.5996V94.2196L57.54 90.6096L71.21 82.8196L81.52 76.9396L82.13 77.9996L89.1 90.1696Z'
            stroke='#0c0303'
            strokeLinejoin='round'
          />
          <path
            d='M109.1 80.1697L89.1 90.1697L82.13 77.9997L81.52 76.9397L101.52 66.9397L109.1 80.1697Z'
            stroke='#0c0303'
            strokeLinejoin='round'
          />
          <path
            d='M109.1 80.1697L65.8 104.85L45.8 114.85L65.19 103.8L89.1 90.1697L109.1 80.1697Z'
            stroke='#0c0303'
            strokeLinejoin='round'
          />
          <path
            d='M71.21 8.59961L60.39 14.0096L51.21 18.5996L40.39 12.3496L60.39 2.34961L71.21 8.59961Z'
            stroke='#0c0303'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      <ol className='relative overflow-hidden ' ref={refTableOfContentList}>
        {headings.map((heading, _index) => {
          return (
            <li
              className='group relative px-1 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100'
              id={`${heading.id}-table-of-content-item`}
              key={heading.id}
            >
              <span
                className={cn(
                  'relative z-30 block transform-gpu py-1.5 pr-5 pl-2 text-xs tracking-tight transition-all hover:translate-x-0.5',
                  // Before element : positionning
                  'before:absolute before:top-0.5 before:right-0 before:bottom-0.5 before:left-0 ',
                  // Before element : animation
                  'before:scale-x-75 before:scale-y-50 before:transform-gpu before:rounded-lg before:bg-neutral-400/10 before:opacity-0 before:transition-all before:duration-300 group-hover:before:scale-100 before:group-hover:opacity-100',
                  (heading.level === 1 || heading.level === 2) &&
                    'font-semibold',
                  heading.level === 3 && 'font-normal'
                )}
                // href={`#${heading.id}`}
                onClick={() => handleScrollTo(heading.id)}
                style={{
                  marginLeft: `${(heading.level - 1) * 8}px`,
                }}
              >
                {heading.text}
              </span>
            </li>
          )
        })}
        <AnimatePresence>
          {firstActiveHeading2 && lastActiveHeading2 && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className='pointer-events-none absolute z-10 w-2 select-none bg-primary-color'
              exit={{ opacity: 0, y: -100 }}
              initial={{ opacity: 0, y: -100 }}
              layout
              // layout={true}
              layoutId='underline'
              style={{
                top: topCoordinate,
                bottom: `calc(100% - ${bottomCoordinate}px)`,
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          )}
        </AnimatePresence>

        <div
          className={cn(
            'bg-gray-300 dark:bg-color-3 p-3',
            activeIds.includes(headings[headings.length - 1]?.id)
              ? 'bg-primary-color text-white'
              : ''
          )}
        >
          <div className='flex items-center gap-3'>
            <div
              className={cn(
                'p-2 flex items-center justify-center border border-gray-800 dark:border-gray-100 rounded-full flex-1',
                activeIds.includes(headings[headings.length - 1]?.id)
                  ? 'border-gray-100'
                  : ''
              )}
            >
              <Lock />
            </div>
            <div className='flex flex-col'>
              <span className='text-xs'>{t('contentTable.bottom')}</span>
            </div>
          </div>
        </div>
      </ol>
    </nav>
  )
}

export default TableOfContent
