import { ArticleCard } from '..'

type Props = {
  articles: TArticle[]
  title: string
}

const ArticlesList = ({ articles, title }: Props) => {
  return (
    <section>
      <div className="py-2 uppercase">{title}</div>

      {articles.map((article) => (
        <ArticleCard article={article} key={article.slug} />
      ))}
    </section>
  )
}

export default ArticlesList
