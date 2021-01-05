import { Date } from '@components/ui/Date'
import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import s from './ArticleCard.module.css'
import cn from 'classnames'
import Image from 'next/image'
// import ActionButtons from '../Article/ActionButtons'

type Props = {
  article: TArticle
  variant?: 'cover' | 'carousel'
  route?: string
}

const ArticleCard = ({ article, variant = 'cover', route }: Props) => {
  const rootClassName = cn({
    [s.cover]: variant === 'cover',
    [s.carousel]: variant === 'carousel',
  })

  return (
    <article className={rootClassName}>
      <Link href={`/${route || 'articles'}/${article.slug}`}>
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
        <Link href={`/${route || 'articles'}/${article.slug}`}>
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

      {/* <ActionButtons article={article} /> */}
    </article>
  )
}

export default ArticleCard
