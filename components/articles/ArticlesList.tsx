import ArticleCover from './ArticleCover'

const ArticlesList = ({ articles }: { articles: TArticleCover[] }) => {
  return (
    <section>
      {articles.map((article) => (
        <ArticleCover
          key={article.slug}
          category={article.category}
          title={article.title}
          author={article.author}
          date={article.date}
          image={article.urls.image}
        />
      ))}
    </section>
  )
}

export default ArticlesList
