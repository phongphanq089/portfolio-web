import Link from 'next/link'
import WrapperImage from './WrapperImage'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { CommandCode } from '@/components/ui/Codesnippet'

const ArticePortableText = {
  block: {
    h1: ({ children, value }: { children: React.ReactNode; value: any }) => (
      <h1 id={value._key} className='font-bold text-sm xl:text-md mb-3'>
        {children}
      </h1>
    ),
    h2: ({ children, value }: { children: React.ReactNode; value: any }) => (
      <h2 id={value._key} className='font-bold text-sm xl:text-md mb-3'>
        {children}
      </h2>
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
      <code className='flex transform-gpu items-center justify-between gap-5 rounded-full bg-fuchsia-300/20 px-5 py-3 tracking-tighter text-fuchsia-800 transition-all hover:bg-fuchsia-300/15 active:scale-90 active:bg-fuchsia-300/30 dark:text-fuchsia-400 w-fit'>
        {children}
      </code>
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
  },
}

export default ArticePortableText
