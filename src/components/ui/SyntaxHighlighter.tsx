'use client'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const SyntayanxHighlighter = ({ codeString }: { codeString: string }) => {
  return (
    <SyntaxHighlighter
      language='javascript'
      style={coldarkDark}
      showInlineLineNumbers={true}
    >
      {codeString}
    </SyntaxHighlighter>
  )
}

export default SyntayanxHighlighter
