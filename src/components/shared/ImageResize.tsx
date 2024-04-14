import Image from 'next/image'

interface ImageResize {
  src: string | any
  alt: string
  heightSize?: string
  priority?: boolean
  sizes?: string
  className?: string
}
export const ImageResize = ({
  src,
  alt,
  heightSize,
  priority,
  className,
}: ImageResize) => {
  return (
    <div className={`${heightSize ? heightSize : 'pt-[100%]'} relative `}>
      <Image
        src={src}
        alt={alt ? alt : 'image-default'}
        fill
        priority={priority}
        className={`h-auto object-cover ${className}`}
        sizes='(min-width: 1200px) 100vw, (max-width: 1200px) 60vw, 40vw'
      />
    </div>
  )
}
