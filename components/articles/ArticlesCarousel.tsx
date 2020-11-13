import { IconArrowLeft, IconArrowRight } from '@components/icons'
import ArticleCoverFeatured from './ArticleCoverFeatured'
import s from './ArticlesCarousel.module.css'
type Props = {
  articles: TArticleCover[]
  title: string
}

const ArticlesCarousel = ({ title, articles }: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between h-auto">
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
          <ArticleCoverFeatured
            key={article.slug}
            category={article.category}
            title={article.title}
            author={article.author}
            date={article.date}
            image={article.urls.image}
          />
        ))}
      </div>
    </div>
  )
}

export default ArticlesCarousel
