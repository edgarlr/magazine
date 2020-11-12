import ArticleCoverFeatured from './ArticleCoverFeatured'

type Props = {
  articles: TArticleCover[]
  title: string
}

const ArticlesCarousel = ({ title, articles }: Props) => {
  return (
    <div>
      <div>{title}</div>
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
  )
}

export default ArticlesCarousel
