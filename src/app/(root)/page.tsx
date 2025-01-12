import TextParalaxScroll from '@/components/shared/TextParalaxScroll'
import { portfolioHome } from '@/lib/queries-data'
import ImageParalaxSroll from '@/pages/home/ImageParalaxSroll'
import StackingCardProject from '@/pages/home/projects/StackingCardProject'
import SectionWrapperSticky from '@/pages/home/SectionWrapperSticky'
import { sanityFetch } from '@/sanity/sanityFetch'
import { SanityDocument } from 'next-sanity'

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
