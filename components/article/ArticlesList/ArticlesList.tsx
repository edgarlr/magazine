import { ArticleCard } from '..'
import ArticleCardLists from '../ArticleCard/ArticleCardLists'
import ArticleCardTop from '../ArticleCard/ArticleCardTop'

type Props = {
  articles: TArticle[]
  title: string
  variant?: 'default' | 'lists' | 'top'
}

const ArticlesList = ({ articles, title, variant = 'default' }: Props) => {
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
    <section>
      <div className="py-2 text-sm font-bold uppercase">{title}</div>
      {renderCards()}
    </section>
  )
}

export default ArticlesList
