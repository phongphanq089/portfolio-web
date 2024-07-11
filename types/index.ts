export interface typeMenuItems {
  title: string
  link: string
  icon?: string
  imgSrc: string
  isNotfound: boolean
}

export interface projectType {
  name: string
  client: string
  description: string
  src: string
  year: number
}

export interface FooterMenuType {
  heading: string
  navigation?: boolean
  children: {
    name: string
    link: string
    target?: true
    image: string
  }[]
}
