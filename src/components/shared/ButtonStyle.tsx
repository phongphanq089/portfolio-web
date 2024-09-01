import React from 'react'

const ButtonStyle = ({ text }: { text: string }) => {
  return (
    <div className='button-style'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </div>
  )
}

export default ButtonStyle
