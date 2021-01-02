import { Date } from '@components/ui'
import { Author, AuthorCard, CategoryTag, Title } from '../ui'
import ShareButton from '@components/core/ShareButton/ShareButton'
import AddToListButton from '@components/core/AddToListButton/AddToListButton'
import Markdown from '@components/core/Markdown/Markdown'

function Article({ article }: { article: TArticle | undefined }) {
  if (!article) return <p>something went wrong</p>

  return (
    <article>
      <header className="py-10">
        <CategoryTag category={article.category} />
        <Title title={article.title} />
        <Author author={article.author} />
        <Date date={article.published_at as string} />
      </header>
      <ul className="flex justify-end">
        <li>
          <AddToListButton article={article} />
        </li>
        <li>
          <ShareButton
            path={`/articles/${article.slug}`}
            title={article.title}
            message={'Check this article'}
          />
        </li>
      </ul>

      <Markdown content={article.content} />

      <footer className="border-t border-primary py-6">
        <AuthorCard author={article.author} />
        <ul className="flex justify-end">
          <li>
            <AddToListButton article={article} />
          </li>
          <li>
            <ShareButton
              path={`/articles/${article.slug}`}
              title={article.title}
              message={'Check this article'}
            />
          </li>
        </ul>
      </footer>
    </article>
  )
}

export default Article
