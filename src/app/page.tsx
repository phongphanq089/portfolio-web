import LayoutWrapper from '@/components/layout/LayoutWrapper'
import BannerHero from '@/components/pages/home/banner-hero'
import ListProject from '@/components/pages/home/projects'
import SkillDeveloper from '@/components/pages/home/skill-developer'
import ImageParalaxSroll from '@/components/pages/home/ImageParalaxSroll'
import TextSrcollMotion from '@/components/shared/TextSrcollMotion'
import {
  footerQuery,
  ListSocial,
  paralaxImageScroll,
  portfolioHome,
} from '@/lib/queries-data'
import { SanityDocument } from 'next-sanity'
import { sanityFetch } from '@/sanity/sanityFetch'
import CardAbout from '@/components/pages/home/card-about'

export default async function Home() {
  const footeNav = await sanityFetch<SanityDocument>({
    query: footerQuery,
  })
  const lisProject = await sanityFetch<SanityDocument>({
    query: portfolioHome,
  })

  const listParalaxImageScroll = await sanityFetch<SanityDocument>({
    query: paralaxImageScroll,
  })

  const listScocial = await sanityFetch<SanityDocument>({
    query: ListSocial,
  })

  return (
    <LayoutWrapper footer={footeNav as SanityDocument}>
      <BannerHero />
      <div className='bg-black py-6 md:py-[100px] xl:py-[100px] z-20  rounded-2xl relative'>
        {/* <CardAbout /> */}
        <CardAbout listScocial={listScocial as SanityDocument} />
        <SkillDeveloper />
      </div>
      <div className='overflow-x-clip'>
        <TextSrcollMotion />
      </div>
      <ListProject lisProject={lisProject as SanityDocument} />

      <ImageParalaxSroll
        listParalaxImageScroll={listParalaxImageScroll as SanityDocument}
      />
    </LayoutWrapper>
  )
}
