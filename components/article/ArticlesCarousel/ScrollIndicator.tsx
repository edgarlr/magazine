import React, { RefObject, useEffect, useState } from 'react'
import cn from 'classnames'

type Props = {
  count: number
  carouselRef: RefObject<HTMLDivElement>
}

const ScrollIndicator = ({ count, carouselRef }: Props) => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const element = carouselRef?.current

    if (!element) return

    const scrollListener = () => {
      const windowScroll = element.scrollLeft
      const totalWidth = element.scrollWidth - element.clientWidth

      if (windowScroll === 0) setScrollProgress(0)
      if (windowScroll > totalWidth) setScrollProgress(100)
      return setScrollProgress((windowScroll / totalWidth) * 100)
    }

    element.addEventListener('scroll', scrollListener)
    return () => element.removeEventListener('scroll', scrollListener)
  }, [carouselRef])

  const activeDot = Math.floor((scrollProgress * count) / 101)

  return (
    <div className="flex justify-center h-auto mt-6 ">
      {[...Array(count).keys()].map((i) => (
        <div
          className={cn(
            'w-2 h-2 mx-1 bg-primary-20 rounded-lg',
            activeDot === i ? 'bg-primary' : ''
          )}
          key={i}
        ></div>
      ))}
    </div>
  )
}

ScrollIndicator.displayName = 'Hello'
export default ScrollIndicator
