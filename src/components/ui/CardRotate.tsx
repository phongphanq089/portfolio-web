import React, { useState, useMemo } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
} from '@/assets'

interface CardData {
  id: number
  url: string
}

const SwipeCards: React.FC = () => {
  const initialCards = useMemo<CardData[]>(
    () => [
      {
        id: 1,
        url: banner1.src,
      },
      {
        id: 2,
        url: banner2.src,
      },
      {
        id: 3,
        url: banner3.src,
      },
      {
        id: 4,
        url: banner4.src,
      },
      {
        id: 5,
        url: banner5.src,
      },
      {
        id: 6,
        url: banner6.src,
      },
      {
        id: 7,
        url: banner7.src,
      },
      {
        id: 8,
        url: banner8.src,
      },
    ],
    []
  )

  const [cards, setCards] = useState<CardData[]>(initialCards)

  const handleCardRemove = (id: number): void => {
    setCards((prev) => {
      const updatedCards = prev.filter((card) => card.id !== id)

      if (updatedCards.length === 0) {
        return [...initialCards]
      }

      return updatedCards
    })
  }

  return (
    <div className='grid h-fit w-full place-items-center bg-neutral-100'>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          cards={cards}
          onRemove={handleCardRemove}
        />
      ))}
    </div>
  )
}

interface CardProps {
  card: CardData
  cards: CardData[]
  onRemove: (id: number) => void
}

const Card: React.FC<CardProps> = ({ card, cards, onRemove }) => {
  const x = useMotionValue(0)

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18])
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0])

  const isFront = card.id === cards[cards.length - 1].id

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : card.id % 2 ? 6 : -6

    return `${rotateRaw.get() + offset}deg`
  })

  const handleDragEnd = (): void => {
    if (Math.abs(x.get()) > 100) {
      onRemove(card.id)
    }
  }

  return (
    <motion.img
      src={card.url}
      alt='Placeholder alt'
      className='h-[360px] w-[260px] xs:h-96 xs:w-72 4xl:h-[450px] 4xl:w-[350px] origin-bottom rounded-lg bg-white object-cover '
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: '0.125s transform',
        boxShadow: isFront
          ? '0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)'
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? 'x' : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    />
  )
}

export default SwipeCards
