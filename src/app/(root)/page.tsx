import SectionWrapperSticky from '@/pages/home/SectionWrapperSticky'

const HomePage = async () => {
  return (
    <div className='h-full'>
      <SectionWrapperSticky />
      <div className='min-h-screen bg-dark'></div>
    </div>
  )
}

export default HomePage
