import SectionWrapperSticky from './components/SectionWrapperSticky'

import StickyFooter from '@/components/layout/footer/StickyFooter'

const HomePage = async () => {
  return (
    <div className='h-full '>
      <SectionWrapperSticky />

      <StickyFooter />
    </div>
  )
}

export default HomePage
