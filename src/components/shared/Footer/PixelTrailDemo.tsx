import PixelTrail from './BackgroundCircles'

const PixelTrailDemo: React.FC = () => {
  return (
    <div className='relative w-full h-dvh bg-white text-black flex flex-col font-calendas z-10 overflow-hidden'>
      <div className='absolute inset-0 z-0 '>
        <PixelTrail
          pixelSize={40}
          fadeDuration={0}
          delay={1200}
          pixelClassName=' bg-[#ff3c00] '
        />
      </div>

      <div className='justify-center items-center flex flex-col w-full h-full z-10 pointer-events-none space-y-2 md:space-y-8'>
        <h2 className='text-3xl cursor-pointer sm:text-5xl md:text-7xl tracking-tight'>
          fancy ✽ components{' '}
        </h2>
        <p className='text-xs md:text-2xl'>
          with react, motion, and typrscript.
        </p>
      </div>
    </div>
  )
}

export default PixelTrailDemo
