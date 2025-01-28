import TextParalaxScroll from '@/components/shared/TextParalaxScroll'
import { sanityFetch } from '@/sanity/sanityFetch'
import { SanityDocument } from 'next-sanity'
import StackingCardProject from './components/projects/StackingCardProject'
import SectionWrapperSticky from './components/SectionWrapperSticky'
import ImageParalaxSroll from './components/ImageParalaxSroll'
import { portfolioHome } from '@/sanity/query'

const HomePage = async () => {
  const lisProject = await sanityFetch<SanityDocument>({
    query: portfolioHome,
  })
  return (
    <div className='h-full'>
      <SectionWrapperSticky />
      <StackingCardProject lisProject={lisProject as SanityDocument} />

      <div className='py-10 bg-dark'>
        <TextParalaxScroll />
      </div>
      <ImageParalaxSroll />
    </div>
  )
}

export default HomePage
