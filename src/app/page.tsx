import { projects } from '@/components/contants/data-poduct-portfolio'
import ProductPortfolio from '@/components/home/product-portfolio'
import LayoutWrapper from '@/components/layout/LayoutWrapper'
import BannerHero from '@/components/shared/BannerHero'
import CardProfile from '@/components/shared/CardProfile'
import ServiceDev from '@/components/shared/ServiceDev'
import Image from 'next/image'

export default function Home() {
  return (
    <LayoutWrapper>
      <BannerHero />
      <ServiceDev />
      <div className='container-xxl'>
        <div className='py-2 lg:py-6'>
          <h1 className='text-2xl xl:text-9xl font-[900] text-color-3'>
            MY PROJECTS
          </h1>
        </div>
        <CardProfile projects={[projects[0], projects[1]]} />
        <CardProfile projects={[projects[2], projects[3]]} reversed={true} />
        <CardProfile projects={[projects[4], projects[5]]} />
        <CardProfile projects={[projects[6], projects[7]]} reversed={true} />
      </div>
    </LayoutWrapper>
  )
}
