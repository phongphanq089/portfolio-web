import { cn } from '@/lib/utils'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 lg:grid-cols-3 gap-4 container-2xl',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-1 sm:p-4 bg-black border border-text-1  justify-between flex flex-col space-y-4',
        className
      )}
    >
      {header}
      <div className='group-hover/bento:translate-x-2 transition duration-200'>
        {icon}
        <div className='font-bold text-white  mb-2 mt-2 text-sm'>{title}</div>
        <div className='font-normal text-white text-[18px]'>{description}</div>
      </div>
    </div>
  )
}
