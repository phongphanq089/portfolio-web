import LayoutWrapper from '@/components/layout/LayoutWrapper'
import ListProject from '@/components/pages/home/ListProject'
import BannerHero from '@/components/pages/home/BannerHero'
import PerspectiveMotion from '@/components/pages/home/perspective-motion'
import SmoothParalaxSroll from '@/components/pages/home/SmoothParalaxSroll'

export default function Home() {
  return (
    <LayoutWrapper>
      {/* ================= */}
      {/* BANNER HERO */}
      <BannerHero />
      {/* ABOUT DEV */}
      <PerspectiveMotion />
      {/* ================= */}
      <ListProject />
      <SmoothParalaxSroll />
      {/* ================= */}
    </LayoutWrapper>
  )
}
