'use client'
import { ArrowUpRightIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useMouse } from '@/hooks/useMouse'

export const MainMenusGradientCard = ({
  title,
  description,
  withArrow = false,
  circleSize = 400,
  className,
  children,
  size = 'md',
}: {
  title: string
  description?: string
  withArrow?: boolean
  circleSize?: number
  children?: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}) => {
  const [mouse, parentRef] = useMouse()

  return (
    <div
      className='group relative transform-gpu h-full overflow-hidden rounded-[20px] bg-white/10 p-2 transition-transform hover:scale-[1.01] active:scale-90'
      ref={parentRef as React.RefObject<HTMLDivElement>}
    >
      {withArrow && (
        <ArrowUpRightIcon className='absolute top-2 right-2 z-10 size-5 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 text-neutral-300' />
      )}
      <div
        className={cn(
          '-translate-x-1/2 -translate-y-1/2 absolute transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]',
          mouse.elementX === null || mouse.elementY === null
            ? 'opacity-0'
            : 'opacity-100'
        )}
        style={{
          maskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          background:
            'linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)',
        }}
      />
      <div className='absolute inset-px rounded-[19px] bg-neutral-900/80' />
      {children && (
        <div
          className={cn(
            'gird relative min-h-40 place-content-center overflow-hidden rounded-[15px] border-white bg-white/70 border-neutral-950 bg-black/50 text-white',
            className
          )}
        >
          {children}
        </div>
      )}
      <div className='relative px-4 pt-4 pb-2'>
        <h3 className='font-semibold text-sm text-neutral-300'>{title}</h3>
        {description && (
          <p className='mt-2 text-neutral-400 text-xs line-clamp-3'>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
