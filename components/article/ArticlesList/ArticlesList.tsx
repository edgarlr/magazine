import { ArticleCard } from '..'
import ArticleCardLists from '../ArticleCard/ArticleCardLists'

type Props = {
  articles: TArticle[]
  title: string
  variant?: 'default' | 'lists'
}

const ArticlesList = ({ articles, title, variant = 'default' }: Props) => {
  const renderCards = () => {
    if (variant === 'lists') {
      return articles.map((article) => (
        <ArticleCardLists article={article} key={article.slug} />
      ))
    }
    return articles.map((article) => (
      <ArticleCard article={article} key={article.slug} />
    ))
  }

  return (
    <section>
      <div className="py-2 uppercase">{title}</div>
      {renderCards()}
    </section>
  )
}

export default ArticlesList
