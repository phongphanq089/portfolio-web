import React from 'react'

const CodeBlock = () => {
  return (
    <div className='order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]'>
      <div className='flex flex-row'>
        <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600'></div>
        <div className='h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent'></div>
      </div>
      <div className='px-4 lg:px-8 py-3 2xl:py-5'>
        <div className='flex flex-row space-x-2'>
          <div className='h-3 w-3 rounded-full bg-red-400'></div>
          <div className='h-3 w-3 rounded-full bg-orange-400'></div>
          <div className='h-3 w-3 rounded-full bg-green-200'></div>
        </div>
      </div>
      <div className='overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-4 py-2 p-2 2xl:py-4'>
        <code className='font-mono text-xs md:text-sm lg:text-base'>
          <div className='blink'>
            <span className='mr-1 text-pink-500'>const</span>
            <span className='mr-1 text-white'>coder</span>
            <span className='mr-1 text-pink-500'>=</span>
            <span className='text-gray-400'>{'{'}</span>
          </div>
          <div>
            <span className='ml-4 lg:ml-8 mr-2 text-white'>Name:</span>
            <span className='text-gray-400'>{`'`}</span>
            <span className='text-amber-300'>Phong Phan</span>
            <span className='text-gray-400'>{`',`}</span>
          </div>
          <div className='ml-4 lg:ml-8 mr-2'>
            <span className=' text-white'>Skills:</span>
            <span className='text-gray-400'>{`['`}</span>
            <span className='text-amber-300'>React</span>
            <span className='text-gray-400'>{"', '"}</span>
            <span className='text-amber-300'>NextJS</span>
            <span className='text-gray-400'>{"', '"}</span>
            <span className='text-amber-300'>Redux</span>
            <span className='text-gray-400'>{"', '"}</span>
            <span className='text-amber-300'>zutands</span>
            <span className='text-gray-400'>{"', '"}</span>
            <span className='text-amber-300'>Express</span>
            <span className='text-gray-400'>{"', '"}</span>
            <span className='text-amber-300'>Node JS</span>
            <span className='text-gray-400'>{"', '"}</span>
            <span className='text-amber-300'>MongoDB</span>
            <span className='text-gray-400'>{"', '"}</span>
            <span className='text-amber-300'>Docker</span>
            <span className='text-gray-400'>{"', '"}</span>
            <span className='text-amber-300'>AWS</span>
            <span className='text-gray-400'>{"'],"}</span>
          </div>
          <div>
            <span className='ml-4 lg:ml-8 mr-2 text-white'>UI/UX design:</span>
            <span className='text-orange-400'>true</span>
            <span className='text-gray-400'>,</span>
          </div>
          <div>
            <span className='ml-4 lg:ml-8 mr-2 text-white'>Creative:</span>
            <span className='text-orange-400'>true</span>
            <span className='text-gray-400'>,</span>
          </div>
          <div>
            <span className='ml-4 lg:ml-8 mr-2 text-white'>HardWorker:</span>
            <span className='text-orange-400'>true</span>
            <span className='text-gray-400'>,</span>
          </div>
          <div>
            <span className='ml-4 lg:ml-8 mr-2 text-white'>QuickLearner:</span>
            <span className='text-orange-400'>true</span>
            <span className='text-gray-400'>,</span>
          </div>
          <div>
            <span className='ml-4 lg:ml-8 mr-2 text-white'>ProblemSolver:</span>
            <span className='text-orange-400'>true</span>
            <span className='text-gray-400'>,</span>
          </div>
          <div>
            <span className='ml-4 lg:ml-8 mr-2 text-green-400'>Hireable:</span>
            <span className='text-orange-400'>function</span>
            <span className='text-gray-400'>{'() {'}</span>
          </div>
          <div>
            <span className='ml-8 lg:ml-16 mr-2 text-orange-400'>return</span>
            <span className='text-gray-400'>{`(`}</span>
          </div>
          <div>
            <span className='ml-12 lg:ml-24 text-cyan-400'>this.</span>
            <span className='mr-2 text-white'>hardWorker</span>
            <span className='text-amber-300'>&amp;&amp;</span>
          </div>
          <div>
            <span className='ml-12 lg:ml-24 text-cyan-400'>this.</span>
            <span className='mr-2 text-white'>problemSolver</span>
            <span className='text-amber-300'>&amp;&amp;</span>
          </div>
          <div>
            <span className='ml-12 lg:ml-24 text-cyan-400'>this.</span>
            <span className='mr-2 text-white'>skills.length</span>
            <span className='mr-2 text-amber-300'>&gt;=</span>
            <span className='text-orange-400'>5</span>
          </div>
          <div>
            <span className='ml-8 lg:ml-16 mr-2 text-gray-400'>{`);`}</span>
          </div>
          <div>
            <span className='ml-4 lg:ml-8 text-gray-400'>{`};`}</span>
          </div>
          <div>
            <span className='text-gray-400'>{`};`}</span>
          </div>
        </code>
      </div>
    </div>
  )
}

export default CodeBlock
