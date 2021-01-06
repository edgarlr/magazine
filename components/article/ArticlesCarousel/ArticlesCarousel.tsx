import { ArticleCard } from '..'
import { useRef, MouseEvent } from 'react'
import ArrowLeft from '@components/icons/ArrowLeft'
import ArrowRight from '@components/icons/ArrowRight'
import { Button } from '@components/ui/Button'

type Props = {
  articles: TArticle[]
  title: string
}

const ArticlesCarousel = ({ title, articles }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToLeft = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    carouselRef.current?.scrollBy({ left: -1, top: 0, behavior: 'smooth' })
  }

  const scrollToRight = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    carouselRef.current?.scrollBy({ left: 1, top: 0, behavior: 'smooth' })
  }

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between h-auto py-4">
        <p className="uppercase">{title}</p>
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
    </section>
  )
}

export default ArticlesCarousel
