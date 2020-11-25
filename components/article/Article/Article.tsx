import ReactMarkdown from 'react-markdown'
import s from './Article.module.css'
import {
  IconBookmark,
  IconDownload,
  IconShare,
  IconTwitter,
} from '@components/icons'
import Contributor from '@components/contribuitors/Contributor'
import ContributorFeatured from '@components/contribuitors/ContributorFeatured'
import { Date } from '@components/ui'

function Article({ article }: { article: TArticle | undefined }) {
  if (!article) return <p>something went wrong</p>

  return (
    <article>
      <header>
        <span>{article.category.title}</span>
        <h1 className="text-3xl font-serif">{article.title}</h1>
        <p>
          by <em>{article.author.name}</em>
        </p>
        <Date date={article.published_at as string} />
      </header>
      <div>
        <IconBookmark />
        <IconDownload />
      </div>

      <section className={s.markdown}>
        <ReactMarkdown>{article.content || ''}</ReactMarkdown>
      </section>

      <footer>
        {article.author.featured === null ? (
          <Contributor contributor={article.author} />
        ) : (
          <ContributorFeatured contributor={article.author} />
        )}
        <ul>
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
