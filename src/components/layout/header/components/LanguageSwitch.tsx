'use client'
import { usUk, vn } from '@/assets'
import {
  FloatingPanelBody,
  FloatingPanelButton,
  FloatingPanelCloseButton,
  FloatingPanelContent,
  FloatingPanelFooter,
  FloatingPanelRoot,
  FloatingPanelTrigger,
} from '@/components/ui/FloatingPanel'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import { Languages } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'

const LanguageSwitch = () => {
  const actions = [
    {
      id: 1,
      icon: vn.src,
      label: 'Vietnamese',
      locale: 'vi',
    },
    {
      id: 2,
      icon: usUk.src,
      label: 'English',
      locale: 'en',
    },
  ]

  const t = useTranslations()

  const pathname = usePathname()
  const router = useRouter()
  const currentLocale = pathname.split('/')[1] || 'vi'

  const initialActiveTab =
    actions.find((action) => action.locale === currentLocale)?.id || 1
  const [activeTab, setActiveTab] = useState(initialActiveTab)

  useEffect(() => {
    const newActiveTab =
      actions.find((action) => action.locale === currentLocale)?.id || 1
    setActiveTab(newActiveTab)
  }, [currentLocale])

  const handleTabClick = (newTabId: number) => {
    if (newTabId !== activeTab) {
      const newLocale = newTabId === 1 ? 'vi' : 'en'
      const basePath = pathname.replace(`/${currentLocale}`, '') || '/'
      router.push(`/${newLocale}${basePath}`)
      setActiveTab(newTabId)
    }
  }

  return (
    <FloatingPanelRoot>
      <FloatingPanelTrigger
        title='Languages'
        className='flex items-center px-4 py-2 bg-accent  rounded-md hover:bg-accent/90 transition-colors'
      >
        <div className='flex item-center gap-2 max-sm:text-xs text-sm'>
          <Languages className='!text-primary-color w-4' />
          {t('languege')}
        </div>
      </FloatingPanelTrigger>
      <FloatingPanelContent className='w-56'>
        <FloatingPanelBody>
          <AnimatePresence>
            {actions.map((action, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1 }}
                  className='mb-3'
                >
                  <FloatingPanelButton
                    onClick={() => handleTabClick(action.id)}
                    className={cn(
                      'w-full flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-muted transition-colors',
                      activeTab === action.id && '!bg-primary-color text-white'
                    )}
                  >
                    <img
                      src={action.icon}
                      alt='phong phan'
                      className='w-[20px]  h-auto object-cover'
                    />
                    <span>{action.label}</span>
                  </FloatingPanelButton>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </FloatingPanelBody>
        <FloatingPanelFooter>
          <FloatingPanelCloseButton />
        </FloatingPanelFooter>
      </FloatingPanelContent>
    </FloatingPanelRoot>
  )
}

export default LanguageSwitch
