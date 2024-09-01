import Image from 'next/image'

interface NextImageResize {
  src: string | any
  alt: string
  priority?: boolean
  sizes?: string
  className?: string
  classImage?: string
}

export const NextImageResize = ({
  src,
  alt,
  priority,
  className,
  classImage,
}: NextImageResize) => {
  return (
    <div className={`${className ? className : 'pt-[100%]'} relative `}>
      <Image
        src={src}
        alt={alt ? alt : 'image-default'}
        fill
        priority={priority}
        className={`h-auto object-cover ${classImage}`}
        sizes='100vw'
      />
    </div>
  )
}
