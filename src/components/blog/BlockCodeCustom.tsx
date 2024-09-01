'use client'
import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface BlockCodeCustomProps {
  children: {
    code: string
    language: string
  }
}

const BlockCodeCustom = ({ children }: BlockCodeCustomProps) => {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopyClick = () => {
    const textToCopy = children.code
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  const codeHighlightCache = new Map<string, JSX.Element>()

  const retrieveCodeFromHighlightCache = (
    language: string,
    content: string
  ): JSX.Element => {
    const cachedItem = codeHighlightCache.get(content)
    if (!cachedItem) {
      const highlighterProps = {
        language,
        children: content,
        style: coldarkDark,
        wrapLines: true,
        customStyle: {
          borderRadius: '10px',
        },
      }
      const highlightedCode = (
        <SyntaxHighlighter {...highlighterProps}>{content}</SyntaxHighlighter>
      )

      codeHighlightCache.set(content, highlightedCode)
      return highlightedCode
    }

    return cachedItem
  }

  return (
    <div className='relative'>
      <div className='absolute top-2 right-2'>
        <button
          onClick={handleCopyClick}
          className='bg-color-4 text-color-3 font-bold p-1 rounded-md text-xs'
        >
          {isCopied ? 'Copied' : 'Copy'}
        </button>
      </div>

      {retrieveCodeFromHighlightCache(children?.language, children?.code)}
    </div>
  )
}

export default BlockCodeCustom
