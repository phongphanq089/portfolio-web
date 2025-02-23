export const cursorVariants = {
  default: (mouseX: number, mouseY: number) => ({
    opacity: 0,
    height: 0,
    width: 0,
    scale: 0,
    fontSize: '16px',
    backgroundColor: 'transparent',
    x: mouseX,
    y: mouseY,
  }),
  project: (mouseX: number, mouseY: number) => ({
    opacity: 1,
    scale: 1,
    backgroundColor: '#000',
    color: '#fff',
    height: 80,
    width: 80,
    fontSize: '18px',
    x: mouseX - 32,
    y: mouseY - 32,
  }),
  contact: (mouseX: number, mouseY: number) => ({
    opacity: 1,
    scale: 1,
    backgroundColor: '#FFBCBC',
    color: '#000',
    height: 80,
    width: 80,
    fontSize: '32px',
    x: mouseX - 48,
    y: mouseY - 48,
  }),
}

export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 180,
    translateX: -50,
  },
  enter: (i: any) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.8, type: 'linear', ease: [0.76, 0, 0.24, 1] },
  },
}

export const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: 'tween', ease: 'easeInOut' },
  },
}
