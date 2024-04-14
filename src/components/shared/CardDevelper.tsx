import React from 'react'

const CardDevelper = () => {
  return (
    <div className='bg-color-1 rounded-2xl shadow-sm shadow-color-1'>
      <div className='group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute  before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-[160px] w-[260px] 2xl:h-[200px] 2xl:w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8'>
        <div className='z-10 flex flex-col items-center gap-2'>
          <span className='text-light text-3xl sm:text-4xl 2xl:text-6xl font-bold'>
            JR{' '}
          </span>
          <p className='text-gray-50'>Frontend developer</p>
        </div>
      </div>
    </div>
  )
}

export default CardDevelper
