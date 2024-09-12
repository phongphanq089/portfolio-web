import React from 'react'

const ButtonStyle = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  return (
    <div className={`button-style ${className}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </div>
  )
}

export default ButtonStyle
