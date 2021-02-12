import { ArticleCard } from '..'
import { useRef, MouseEvent, useState, useEffect } from 'react'
import ArrowLeft from '@components/icons/ArrowLeft'
import ArrowRight from '@components/icons/ArrowRight'
import { Button } from '@components/ui/Button'
import cn from 'classnames'
import { useIsMobile } from '@lib/hooks/use-media-queries'

type Props = {
  articles: TArticle[]
  title: string
}

const ArticlesCarousel = ({ title, articles }: Props) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const isMobile = useIsMobile()

  const scrollToLeft = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    carouselRef.current?.scrollBy({ left: -1, top: 0, behavior: 'smooth' })
  }

  const scrollToRight = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    carouselRef.current?.scrollBy({ left: 1, top: 0, behavior: 'smooth' })
  }

  const renderScrollIndicator = () => {
    const selectedRange = Math.floor((scrollProgress * articles.length) / 110)

    return articles.map((article, index) => (
      <div
        className={cn(
          'w-2 h-2 mx-1 bg-primary-20 rounded-lg',
          selectedRange === index ? 'bg-primary' : ''
        )}
        key={article.slug}
      ></div>
    ))
  }

  useEffect(() => {
    if (!carouselRef.current) return
    const element = carouselRef.current

    const scrollListener = () => {
      const windowScroll = element.scrollLeft
      const totalWidth = element.scrollWidth - element.clientWidth

      if (windowScroll === 0) {
        return setScrollProgress(0)
      }
      if (windowScroll > totalWidth) {
        return setScrollProgress(100)
      }
      return setScrollProgress((windowScroll / totalWidth) * 100)
    }

    element.addEventListener('scroll', scrollListener)
    return () => element.removeEventListener('scroll', scrollListener)
  }, [])

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between h-auto py-4">
        <p className="uppercase">{title}</p>
        {!isMobile && (
          <ul className="flex">
            <li>
              <Button onClick={scrollToLeft} ariaLabel="Previus article">
                <ArrowLeft />
              </Button>
            </li>
            <li>
              <Button onClick={scrollToRight} ariaLabel="Next article">
                <ArrowRight />
              </Button>
            </li>
          </ul>
        )}
      </div>

      <div
        ref={carouselRef}
        className="flex overflow-hidden overflow-x-scroll scroll-snap-x-mandatory scrollbar-none"
      >
        {articles.map((article) => (
          <ArticleCard
            article={article}
            key={article.slug}
            variant="carousel"
          />
        ))}
      </div>

      <div className="flex justify-center h-auto mt-6 ">
        {renderScrollIndicator()}
      </div>
    </section>
  )
}

export default ArticlesCarousel
