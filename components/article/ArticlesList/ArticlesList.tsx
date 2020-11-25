import { ArticleCard } from '..'

const ArticlesList = ({ articles }: { articles: TArticle[] }) => {
  return (
    <section>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.slug} />
      ))}
    </section>
  )
}

export default ArticlesList
