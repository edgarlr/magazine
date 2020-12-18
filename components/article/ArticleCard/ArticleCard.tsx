import { Date } from '@components/ui'
import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import s from './ArticleCard.module.css'
import cn from 'classnames'
import Image from 'next/image'
import ShareButton from '@components/core/ShareButton/ShareButton'
import AddToListButton from '@components/core/AddToListButton/AddToListButton'

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
          <Image
            src={getMediaURL(article.cover.url)}
            alt={article.cover.alternativeText || ''}
            layout="fill"
            className="object-cover"
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
          <h3
            className={cn(
              s.title,
              'serif leading-tight overflow-hidden max-h-28'
            )}
          >
            {article.title}
          </h3>
        </Link>
        <p className="serif text-s">
          By{' '}
          <Link href={`/contributors/${article.author.slug}`}>
            <em>{article.author.name}</em>
          </Link>
        </p>
        <Date date={article.published_at as string} />
      </section>
      <ul>
        <li>
          <AddToListButton slug={article.slug} />
        </li>
        <li>
          <ShareButton
            path={`/articles/${article.slug}`}
            title={article.title}
            message={'Check this article'}
          />
        </li>
      </ul>
    </article>
  )
}

export default ArticleCard
