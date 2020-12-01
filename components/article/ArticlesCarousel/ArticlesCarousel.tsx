import { ArticleCard } from '..'

type Props = {
  articles: TArticle[]
  title: string
}

const ArticlesCarousel = ({ title, articles }: Props) => {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between h-auto py-4">
        <p className="uppercase">{title}</p>
      </div>
      <div className="flex overflow-hidden overflow-x-scroll scroll-snap-x-mandatory scrollbar-none">
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
