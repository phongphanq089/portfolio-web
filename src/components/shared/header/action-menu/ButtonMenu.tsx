'use client'
import { motion } from 'framer-motion'

interface PropsType {
  isActive: boolean
  toggleMenu: () => void
}

const ButtonMenu = ({ isActive, toggleMenu }: PropsType) => {
  return (
    <div className={'button'}>
      <motion.div
        className={'slider'}
        animate={{ top: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={'el'}
          onClick={() => {
            toggleMenu()
          }}
        >
          <PerspectiveText label='Menu' />
        </div>
        <div
          className={'el'}
          onClick={() => {
            toggleMenu()
          }}
        >
          <PerspectiveText label='Close' />
        </div>
      </motion.div>
    </div>
  )
}
export default ButtonMenu
const PerspectiveText = ({ label }: { label: string }) => {
  return (
    <div className={'perspectiveText text-black'}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  )
}
