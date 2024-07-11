import {
  SkeletonFive,
  SkeletonFour,
  SkeletonOne,
  SkeletonSix,
  SkeletonTwo,
} from './Skeleton'

export const items = [
  {
    title: 'OPTIMIZATION (UX/UI)',
    description: (
      <span>
        Improve user experience by optimizing interface and performance. Apply
        modern UI/UX design principles to create the best user experience.
      </span>
    ),
    header: <SkeletonOne />,
    className: 'lg:col-span-1',
    icon: <span className='text-md'>📚</span>,
  },
  {
    title: 'WEBSITE DESIGN',
    description: (
      <span>
        Create custom websites according to customer requirements, from idea to
        implementation. Use modern technologies like React, Next.js, Tailwind
        CSS to create responsive and high-performance websites.
      </span>
    ),
    header: <SkeletonTwo />,
    className: 'lg:col-span-1',
    icon: <span className='text-md'>🎨</span>,
  },
  {
    title: 'SELF-STUDY SKILL',
    description: (
      <span className='text-white'>
        Always keep up to date with the latest trends and technology. Self-study
        and apply quickly to real projects to ensure that my solutions are
        always cutting-edge and effective.
      </span>
    ),
    header: <SkeletonFive />,
    className: 'lg:col-span-1',
    icon: <span className='text-md'>📈</span>,
  },
  {
    title: 'PROGRAMMING SKILLs',
    description: (
      <div className='flex flex-col'>
        <span>
          🌐 HTML, CSS, jQuery: 1 year of experience, proficient in using to
          create user interfaces.
        </span>
        <span>
          🌐 React, Next.js, Node.js: Self-taught and can develop comprehensive
          web applications (full-stack).
        </span>
        <span>
          🌐 Framer Motion: Use to create smooth animations based on scroll
          events.
        </span>
        <span>
          🌐 Tailwind CSS: Efficiently apply utility classes to build interfaces
          quickly and intuitively.
        </span>
      </div>
    ),
    header: <SkeletonFour />,
    className: 'lg:col-span-2',
    icon: <span className='text-md'>🚀</span>,
  },

  {
    title: 'TECHNOLOGY I USE',
    description: (
      <span className='font-semibold'>
        React, Vue, Nuxt , NextJS, Redux, Zutands, Express, Node JS, MongoDB,
        Docker, AWS , Framer-motion, Tailwindcss , Material Ui, Shadcn
      </span>
    ),
    header: <SkeletonSix />,
    className: 'lg:col-span-1',
    icon: <span className='text-md'> 👨‍💻</span>,
  },
]
