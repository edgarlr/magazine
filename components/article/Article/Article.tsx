import ReactMarkdown from 'react-markdown'
import { Date } from '@components/ui'
import { Author, AuthorCard, CategoryTag, Title } from '../ui'
import {
  IconBookmark,
  IconDownload,
  IconShare,
  IconTwitter,
} from '@components/icons'

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
      <ul className="flex">
        <li>
          <IconBookmark />
        </li>
        <li>
          <IconDownload />
        </li>
      </ul>

      <section className="markdown">
        <ReactMarkdown>{article.content || ''}</ReactMarkdown>
      </section>

      <footer className="border-t border-primary py-6">
        <AuthorCard author={article.author} />
        <ul className="flex  justify-end py-4">
          <li>
            <IconTwitter />
          </li>
          <li>
            <IconShare />
          </li>
          <li>
            <IconBookmark />
          </li>
        </ul>
      </footer>
    </article>
  )
}

export default Article
