import { ArticleCard } from '..'

type Props = {
  articles: TArticle[]
  title: string
}

const ArticlesList = ({ articles, title }: Props) => {
  return (
    <section>
      <h6 className="py-2 uppercase">{title}</h6>

      {articles.map((article) => (
        <ArticleCard article={article} key={article.slug} />
      ))}
    </section>
  )
}

export default ArticlesList
