import React from 'react'
import Link from 'next/link'

interface ButtonStyleProps {
  text?: string
  className?: string
  asLink?: string
  onClick?: () => void
  children: React.ReactNode
}

const ButtonUI: React.FC<ButtonStyleProps> = ({
  text,
  className,
  asLink,
  onClick,
  children,
}) => {
  const content = (
    <div className={`button-style ${className}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </div>
  )

  // Nếu có prop asLink, trả về Link, ngược lại trả về button
  if (asLink) {
    return (
      <Link href={asLink}>
        <a>{content}</a>
      </Link>
    )
  }

  return (
    <button onClick={onClick} className='bg-black'>
      {content}
    </button>
  )
}

export default ButtonUI
