import TextParalaxScroll from '@/components/shared/TextParalaxScroll'
import ImageParalaxSroll from '@/pages/home/ImageParalaxSroll'
import StackingCardProject from '@/pages/home/projects/StackingCardProject'
import SectionWrapperSticky from '@/pages/home/SectionWrapperSticky'

const HomePage = async () => {
  return (
    <div className='h-full'>
      <SectionWrapperSticky />
      <StackingCardProject />
      <div className='py-10 bg-dark'>
        <TextParalaxScroll />
      </div>
      <ImageParalaxSroll />
      {/* <div className='min-h-screen bg-dark'></div> */}
    </div>
  )
}

export default HomePage
