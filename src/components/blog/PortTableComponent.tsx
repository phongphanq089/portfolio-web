import React from 'react'
import BlockCodeCustom from './BlockCodeCustom'
import Link from 'next/link'
import ImagePortable from './ImagePortable'

const articePortableText = {
  block: {
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className='text-[18px]'>{children}</p>
    ),
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className='font-semibold text-sm xl:text-md'>{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className='font-semibold text-sm xl:text-md'>{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className='font-semibold text-[18px] xl:text-sm'>{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className='font-semibold text-[18px] xl:text-sm'>{children}</h4>
    ),
    h5: ({ children }: { children: React.ReactNode }) => (
      <h5 className='font-semibold text-[18px] xl:text-sm'>{children}</h5>
    ),
    h6: ({ children }: { children: React.ReactNode }) => (
      <h6 className='font-semibold text-[18px] xl:text-sm'>{children}</h6>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className='list-disc pl-2'>{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className='pl-2'>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li className='pl-1 my-2'>{children}</li>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <li className='list-decimal'>{children}</li>
    ),
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value: any }) => {
      const rel = !value?.href?.startsWith('/')
        ? 'noreferrer noopener'
        : undefined
      const targ = !value?.href?.startsWith('/') ? '_blank' : undefined
      return !value?.href?.startsWith('/') ? (
        <a
          href={value.href}
          rel={rel}
          target={targ}
          className='text-appPurple-100 dark:text-appRed-100 text-decoration-underline'
          aria-label={`${children}`}
        >
          {children}
        </a>
      ) : (
        <Link
          href={value.href}
          className='text-appPurple-100 dark:text-appRed-100 text-decoration-underline'
        >
          {children}
        </Link>
      )
    },
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className='font-semibold'>{children}</strong>
    ),
    emphasis: ({ children }: { children: React.ReactNode }) => (
      <em className='font-italic'>{children}</em>
    ),
    code: ({ children }: { children: React.ReactNode }) => (
      <span className=' rounded-md text-sm px-1 py-2 font-bold'>
        {children}
      </span>
    ),
  },
  types: {
    code: ({
      value,
    }: {
      value: {
        code: string
        language: string
      }
    }) => <BlockCodeCustom>{value}</BlockCodeCustom>,

    image: ({ value }: { value: any }) => <ImagePortable value={value} />,
  },
}

export default articePortableText
