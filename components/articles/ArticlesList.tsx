import ArticleCover from './ArticleCover'

const ArticlesList = ({ articles }: { articles: TArticle[] }) => {
  return (
    <section>
      {articles.map((article) => (
        <ArticleCover article={article} key={article.slug} />
      ))}
    </section>
  )
}

export default ArticlesList
