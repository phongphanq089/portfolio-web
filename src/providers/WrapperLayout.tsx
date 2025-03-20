/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import BackgroundGradientCursor from '@/components/layout/background-gradient'
import React from 'react'
import NextTopLoader from 'nextjs-toploader'
import {
  QueryClient,
  QueryClientProvider,
  isServer,
} from '@tanstack/react-query'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (isServer) {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

const effects = {
  mask: { cursor: true, x: 0, y: 0, radius: 100 },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilte: 0,
    colorStart: 'blue-500',
    colorEnd: 'transparent',
    opacity: 50,
  },
  dots: { display: true, size: 2, color: 'gray-500', opacity: 20 },
  lines: { display: false, opacity: 100 },
  grid: { display: true, opacity: 100 },
}

const WrapperLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        <div>
          <NextTopLoader
            color='#ff3c00'
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing='ease'
            speed={200}
            shadow='0 0 10px #ff3c00,0 0 5px #ff3c00'
            template='<div class="bar" role="bar"><div class="peg"></div></div>
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          {children}

          <BackgroundGradientCursor
            mask={effects.mask}
            dots={effects.dots}
            grid={effects.grid}
            lines={effects.lines}
          ></BackgroundGradientCursor>
        </div>
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  )
}

export default WrapperLayout
