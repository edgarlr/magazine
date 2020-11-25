import { IconBookmark, IconThreeDots } from '@components/icons'
import { Date } from '@components/ui'
import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import s from './ArticleCard.module.css'
import cn from 'classnames'

type Props = {
  article: TArticle
  variant?: 'cover' | 'carousel'
}

const ArticleCard = ({ article, variant = 'cover' }: Props) => {
  const rootClassName = cn({
    [s.cover]: variant === 'cover',
    [s.carousel]: variant === 'carousel',
  })

  return (
    <article className={rootClassName}>
      <Link href={`/articles/${article.slug}`}>
        <figure>
          <img
            src={getMediaURL(article.cover.formats.thumbnail?.url)}
            alt={article.cover.alternativeText}
          />
        </figure>
      </Link>
      <section className="pt-4">
        <Link href={`/${article.category.slug}`}>
          <a className="uppercase text-sm font-bold text-accent">
            {article.category.title}
          </a>
        </Link>
        <Link href={`/articles/${article.slug}`}>
          <h3 className={s.title}>{article.title}</h3>
        </Link>
        <p className="font-serif text-s text-primary">
          By{' '}
          <Link href={`/contributors/${article.author.slug}`}>
            <em>{article.author.name}</em>
          </Link>
        </p>
        <Date date={article.published_at as string} />
      </section>
      <ul>
        <li>
          <button className="p-2">
            <IconBookmark />
          </button>
        </li>
        <li>
          <button className="p-2">
            <IconThreeDots />
          </button>
        </li>
      </ul>
    </article>
  )
}

export default ArticleCard
