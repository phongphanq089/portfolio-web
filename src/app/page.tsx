import BannerHero from "@/components/home/BannerHero";
import ScrollBanner from "@/components/home/BannerScroll";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <BannerHero />
      <ScrollBanner />
    </>
  );
}
