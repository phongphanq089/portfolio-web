import Link from 'next/link'

import { CodeBlock } from './CodeBlock'
import WrapperImage from './WrapperImage'
import { ShinyRotatingBorderButton } from '@/components/ui/button/ShinyRotatingBorderButton'
import GlowText from '@/components/ui/typography-motion/GlowText'
import { Quote } from 'lucide-react'

const ArticePortableText = {
  block: {
    h1: ({ children, value }: { children: React.ReactNode; value: any }) => (
      <h1 id={value._key} className='font-bold text-sm xl:text-md mb-3'>
        {children}
      </h1>
    ),
    h2: ({ children, value }: { children: React.ReactNode; value: any }) => (
      <GlowText id={value._key} className='font-bold text-sm xl:text-md mb-3'>
        {children}
      </GlowText>
    ),
    h3: ({ children, value }: { children: React.ReactNode; value: any }) => (
      <h3 id={value._key} className='font-bold text-[18px] xl:text-sm mb-3'>
        {children}
      </h3>
    ),
    h4: ({ children, value }: { children: React.ReactNode; value: any }) => (
      <h4 id={value._key} className='font-bold text-[18px] xl:text-sm mb-3'>
        {children}
      </h4>
    ),
    h5: ({ children, value }: { children: React.ReactNode; value: any }) => (
      <h5 id={value._key} className='font-bold text-[18px] xl:text-sm mb-3'>
        {children}
      </h5>
    ),
    h6: ({ children, value }: { children: React.ReactNode; value: any }) => (
      <h6 id={value._key} className='font-bold text-[18px] xl:text-sm mb-3'>
        {children}
      </h6>
    ),
    quote: ({ children }: { children: React.ReactNode }) => (
      <ShinyRotatingBorderButton>{children}</ShinyRotatingBorderButton>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className='list-disc pl-8'>{children}</ul>
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
    quote: ({ children }: { children: React.ReactNode }) => (
      <ShinyRotatingBorderButton>{children}</ShinyRotatingBorderButton>
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
      <ShinyRotatingBorderButton>{children}</ShinyRotatingBorderButton>
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
    }) => (
      <div className='mb-3'>
        <CodeBlock
          language='jsx'
          filename='DummyComponent.jsx'
          highlightLines={[9, 13, 14, 18]}
          code={value.code}
        />
      </div>
    ),

    image: ({ value }: { value: any }) => <WrapperImage value={value} />,
    quote: ({ children }: { children: React.ReactNode }) => (
      <ShinyRotatingBorderButton>{children}</ShinyRotatingBorderButton>
    ),
  },
}

export default ArticePortableText
