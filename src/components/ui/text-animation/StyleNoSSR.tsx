import React from 'react'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../../../public/font/CompressaPRO-GX.woff2',
})

const StyleNoSSR = ({
  fontFamily,
  fontUrl,
}: {
  fontFamily: string
  fontUrl: string
}) => {
  return (
    <div>
      <style>{`
        @font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
          font-style: normal;
        }

      `}</style>
    </div>
  )
}

export default StyleNoSSR
