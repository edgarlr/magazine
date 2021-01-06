import Link from 'next/link'
import { Markdown } from '@components/common/Markdown'
import AuthorCard from './AuthorCard'
import { Date } from '@components/ui/Date'
import ActionButtons from './ActionButtons'

function Article({ article }: { article: TArticle | undefined }) {
  if (!article) return <p>Something went wrong</p>

  return (
    <article>
      <header className="py-10">
        <Link href={`/${article.category.slug}`}>
          <a className="uppercase text-sm font-bold text-accent">
            {article.category.title}
          </a>
        </Link>

        <h1 className="serif pb-4">{article.title}</h1>

        <p className="serif text-s">
          By{' '}
          <Link href={`/contributors/${article.author.slug}`}>
            <a>{article.author.name}</a>
          </Link>
        </p>

        <Date date={article.published_at as string} />

        <ActionButtons article={article} />
      </header>

      <Markdown content={article.content} />

      <footer className="border-t border-primary py-6">
        <AuthorCard author={article.author} />
        <ActionButtons article={article} />
      </footer>
    </article>
  )
}

export default Article
