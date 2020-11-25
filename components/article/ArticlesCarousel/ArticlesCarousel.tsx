import { IconArrowLeft, IconArrowRight } from '@components/icons'
import { ArticleCard } from '..'
import s from './ArticlesCarousel.module.css'

type Props = {
  articles: TArticle[]
  title: string
}

const ArticlesCarousel = ({ title, articles }: Props) => {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between h-auto py-4">
        <p className="uppercase">{title}</p>
        <div>
          <button className="opacity-25">
            <IconArrowLeft />
          </button>
          <button>
            <IconArrowRight />
          </button>
        </div>
      </div>
      <div className={s.root}>
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
