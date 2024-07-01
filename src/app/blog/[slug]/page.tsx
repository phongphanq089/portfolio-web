/* eslint-disable @next/next/no-img-element */
import LayoutWrapperDetail from '@/components/layout/LayoutWrapDetail'
import SyntayanxHighlighter from '@/components/ui/SyntaxHighlighter'
import { TracingBeam } from '@/components/ui/TracingBeam'
import React from 'react'

const PageDetail = () => {
  return (
    <LayoutWrapperDetail>
      <div className='container-2xl overflow-hidden'>
        <TracingBeam className='pl-6 lg:px-6'>
          <div className='mx-auto antialiased pt-4 relative'>
            <h1 className='text-xl font-semibold mb-3'>
              Setup React Typescript with Vite & ESLint
            </h1>
            <div className='flex items-center gap-1 mb-5'>
              <div className='bg-white w-6 h-6 rounded-full flex items-center justify-center'>
                DEV
              </div>
              <div className='flex flex-col'>
                <div className='text-[18px] font-semibold'>Phong Phan</div>
                <div className='text-[18px] font-semibold'>
                  November 13, 2023
                </div>
              </div>
            </div>
            <img
              src='https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fd54myazcikrr2qvwdwwj.png'
              alt='Setup React Typescript with Vite & ESLint'
              className='w-full object-cover h-auto mb-2'
            />
            <p className='mb-2 text-sm'>
              Vite is trending recently, because of its simple setup and much
              faster execution speed than Webpack.
            </p>
            <h2 className='text-md font-semibold mb-3'>
              🥇ReactJs Vite folder structure
            </h2>
            <p className='mb-2 text-sm'>
              Below is the complete directory structure of the ReactJs
              Typescript Vite ESLint Prettier project
            </p>

            <SyntayanxHighlighter
              codeString={`📦react-app
 ┣ 📂dist
 ┣ 📂public
 ┃ ┗ 📜vite.svg
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜react.svg
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜index.css
 ┃ ┣ 📜main.tsx
 ┃ ┗ 📜vite-env.d.ts
 ┣ 📜.editorconfig
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc.cjs
 ┣ 📜.gitignore
 ┣ 📜.prettierignore
 ┣ 📜.prettierrc
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜tsconfig.json
 ┣ 📜tsconfig.node.json
 ┗ 📜vite.config.ts`}
            />
            <ul className='text-sm'>
              <li>dist folder: Folder containing build files.</li>
              <li>
                Public folder: Contains index.html file and related files such
                as favicon.ico, robots.txt,...
              </li>
              <li>src folder: Contains our main source code.</li>
              <li>
                Folder src/assets: Contains media, css (the App.css and
                index.css files above I left intact when first created, you can
                put them in assets/styles for simplicity), fonts.
              </li>
              <li>
                The remaining config files will be introduced in the sections
                below.
              </li>
            </ul>

            <h2 className='text-md font-semibold mb-3'>
              🥇Step 1 - Create Vite project
            </h2>
            <p className='mb-2 text-sm'>
              Vite requires Node version 14.18+, 16+ to operate stably. However,
              some templates require a higher version, so if it warns, please
              update nodejs to a higher version. You can use npm or yarn or
              pnpm, here I use npm for simplicity.
            </p>
            <p className='mb-2 text-sm'>with npm</p>
            <SyntayanxHighlighter codeString={`npm create vite@latest`} />
            <p className='mb-2 text-sm'>with npm</p>
            <SyntayanxHighlighter codeString={`yarn create vite`} />
            <p className='mb-2 text-sm'>with PNPM</p>
            <SyntayanxHighlighter codeString={`pnpm create vite`} />
            <p className='mb-2 text-sm'>with PNPM</p>
            <SyntayanxHighlighter
              codeString={`Need to install the following packages:
  create-vite@4.1.0
Ok to proceed? (y) y
✔ Project name: … react-app`}
            />
          </div>
        </TracingBeam>
      </div>
    </LayoutWrapperDetail>
  )
}

const dummyContent = [
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: 'React',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: 'Changelog',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: 'Launch Week',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default PageDetail
