import { ArticleCard } from '..'
import { useRef } from 'react'

import ScrollIndicator from './ScrollIndicator'

type Props = {
  articles: TArticle[]
  title: string
}

const ArticlesCarousel = ({ title, articles }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null)

  return (
    <section className="mb-6">
      <div className="flex items-center justify-between h-auto py-4">
        <p className="uppercase">{title}</p>
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

      <ScrollIndicator carouselRef={carouselRef} count={articles.length} />
    </section>
  )
}

export default ArticlesCarousel
