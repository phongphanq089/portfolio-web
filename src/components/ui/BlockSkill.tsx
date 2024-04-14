import Image from 'next/image'
import React from 'react'

const BlockSkill = ({ icon }: { icon: string }) => {
  return (
    <button className='skill-style'>
      <Image
        src={icon}
        width={200}
        height={200}
        alt='icon-skill'
        className='w-[25px] sm:w-[50px] 2xl:w-[80px] h-auto object-cover'
      />
    </button>
  )
}

export default BlockSkill
