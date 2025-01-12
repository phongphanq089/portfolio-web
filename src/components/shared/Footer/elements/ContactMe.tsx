import { IconContact } from '@/components/ui/RenderIcon'
import Link from 'next/link'
import React from 'react'

const ContactMe = () => {
  return (
    <div>
      <div className='w-full translate-y-5 md:translate-y-16'>
        <div className='flex items-center justify-center'>
          <div className='h-full  w-[300px] sm:w-[400px] flex flex-col justify-center px-3 col-span-2 relative z-10 mb-5'>
            <Link
              href='mailto:phongphanq089@gmail.com'
              title='phongphanq089@gmail.com'
              className='block link-contact pb-4 mb-4'
            >
              <p className='text-xs text-center font-semibold dark:text-white mb-3'>
                phongphanq089@gmail.com
              </p>
              <div className='w-full block  '>
                <IconContact />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
