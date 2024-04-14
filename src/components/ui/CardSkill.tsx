/* eslint-disable @next/next/no-img-element */
import React from 'react'

const CardSkill = ({ icon, title }: { icon: string; title?: string }) => {
  return (
    <div className='p-3 bg-light w-[100px] h-[100px] md:w-[160px] md:h-[160px] rounded-3xl shadow-shadow-card-skill border-2 border-color-3 flex justify-center items-center'>
      <img src={icon} alt='Nevgendev' className='w-[70%] h-auto object-cover' />
      <span className='text-md font-bold'>{title}</span>
    </div>
  )
}

export default CardSkill
