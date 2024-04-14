import React from 'react'

const HeadingBlock = ({ text }: { text: string }) => {
  return (
    <h2 className='heading-style__block' data-heading={text}>
      {text}
    </h2>
  )
}

export default HeadingBlock
