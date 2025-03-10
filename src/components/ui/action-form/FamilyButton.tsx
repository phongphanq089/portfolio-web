'use client'

import { FC, ReactNode, useState } from 'react'
import { Languages, PlusIcon, XIcon } from 'lucide-react'
import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

const CONTAINER_SIZE = 200

interface FamilyButtonProps {
  children: React.ReactNode
}

const FamilyButton: React.FC<FamilyButtonProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => setIsExpanded(!isExpanded)

  return (
    <div
      className={cn(
        'rounded-[24px] border border-primary-color  shadow-sm dark:border-yellow-400/20',
        'bg-gradient-to-b  from-neutral-900 to-black',
        isExpanded
          ? 'w-[204px] bg-gradient-to-b dark:from-stone-900 dark:to-neutral-900'
          : 'dark:from-neutral-900 dark:to-stone-950 bg-gradient-to-b'
      )}
    >
      <div className='rounded-[23px] border   border-primary-color '>
        <div className='rounded-[22px]  dark:border-stone-800 '>
          <div className='rounded-[21px]  flex items-center justify-center '>
            <FamilyButtonContainer
              isExpanded={isExpanded}
              toggleExpand={toggleExpand}
            >
              {isExpanded ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.3,
                      duration: 0.4,
                      ease: 'easeOut',
                    },
                  }}
                >
                  {children}
                </motion.div>
              ) : null}
            </FamilyButtonContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

// A container that wraps content and handles animations
interface FamilyButtonContainerProps {
  isExpanded: boolean
  toggleExpand: () => void
  children: ReactNode
}

const FamilyButtonContainer: FC<FamilyButtonContainerProps> = ({
  isExpanded,
  toggleExpand,
  children,
}) => {
  return (
    <motion.div
      className={cn(
        'relative  shadow-lg flex flex-col space-y-1  items-center  text-white  cursor-pointer z-10',
        !isExpanded ? '' : ''
      )}
      layoutRoot
      layout
      initial={{ borderRadius: 21, width: '4rem', height: '4rem' }}
      animate={
        isExpanded
          ? {
              borderRadius: 20,
              width: CONTAINER_SIZE,
              height: CONTAINER_SIZE + 50,

              transition: {
                type: 'spring',
                damping: 25,
                stiffness: 400,
                when: 'beforeChildren',
              },
            }
          : {
              borderRadius: 21,
              width: '4rem',
              height: '4rem',
            }
      }
    >
      {children}

      <motion.div
        className='absolute bottom-4  '
        initial={{ x: '-50%' }}
        animate={{
          x: isExpanded ? '0%' : '-50%',
          transition: {
            type: 'tween',
            ease: 'easeOut',
            duration: 0.3,
          },
        }}
        style={{
          left: isExpanded ? '' : '50%',
          bottom: 8,
        }}
      >
        {isExpanded ? (
          <motion.div
            className='p-[10px] group bg-neutral-800/50 border border-cyan-100/30 hover:border-neutral-200 text-orange-50  shadow-2xl transition-colors duration-300 rounded-full'
            onClick={toggleExpand}
            layoutId='expand-toggle'
            initial={false}
            animate={{
              rotate: -360,
              transition: {
                duration: 0.4,
              },
            }}
          >
            <XIcon
              className={cn(
                'h-7 w-7 text-cyan-100/30 dark:text-neutral-400/80 group-hover:text-neutral-500 transition-colors duration-200 '
              )}
            />
          </motion.div>
        ) : (
          <motion.div
            className={cn(
              'p-[10px] group bg-color-5 text-cyan-50  transition-colors duration-200 !rounded-full'
            )}
            style={{ borderRadius: 24 }}
            onClick={toggleExpand}
            layoutId='expand-toggle'
            initial={{ rotate: -360 }}
            animate={{
              rotate: 360,
              transition: {
                duration: 0.4,
              },
            }}
          >
            <Languages className='h-7 w-7 text-primary-color' />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default FamilyButton
