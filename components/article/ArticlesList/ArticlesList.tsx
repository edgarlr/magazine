import { ArticleCard } from '..'
import ArticleCardLists from '../ArticleCard/ArticleCardLists'
import ArticleCardTop from '../ArticleCard/ArticleCardTop'

type Props = {
  articles: TArticle[]
  title: string
  variant?: 'default' | 'lists' | 'top'
  className?: string
}

const ArticlesList = ({
  articles,
  title,
  variant = 'default',
  className = '',
}: Props) => {
  const renderCards = () => {
    if (variant === 'lists') {
      return articles.map((article) => (
        <ArticleCardLists article={article} key={article.slug} />
      ))
    }
    if (variant === 'top') {
      return articles.map((article, index) => (
        <ArticleCardTop article={article} index={index} key={article.slug} />
      ))
    }
    return articles.map((article) => (
      <ArticleCard article={article} key={article.slug} />
    ))
  }

  return (
    <section className={className}>
      <div className="mt-10 text-center py-4 font-serif text-xl border-b border-primary-50 uppercase">
        {title}
      </div>
      {renderCards()}
    </section>
  )
}

export default ArticlesList
