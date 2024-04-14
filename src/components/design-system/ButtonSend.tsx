import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'
interface buttonProps {
  className?: string
  children: ReactNode
  icon?: JSX.Element
}

const iconSvg = (
  <>
    <svg
      width='20'
      className='button__icon-svg'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 14 15'
    >
      <path
        fill='currentColor'
        d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'
      ></path>
    </svg>

    <svg
      className='button__icon-svg  button__icon-svg--copy'
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      fill='none'
      viewBox='0 0 14 15'
    >
      <path
        fill='currentColor'
        d='M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z'
      ></path>
    </svg>
  </>
)

const ButtonSend = (props: buttonProps) => {
  const { className, children, icon } = props

  return (
    <a className={cn('buttonSend flex', className)} href='#'>
      <span className={cn('button__icon-wrapper', className)}>
        {icon ? icon : iconSvg}
      </span>
      {children}
    </a>
  )
}

export default ButtonSend
