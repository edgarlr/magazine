import { Date } from '@components/ui/Date'
import Link from 'next/link'
import s from './ArticleCard.module.css'
import cn from 'classnames'

type Props = {
  article: TArticle
  index: number
}

const ArticleCardTop = ({ article, index }: Props) => {
  return (
    <article className={s.top}>
      <div className={s.topNumber}>{index + 1}</div>
      <section>
        <Link href={`/articles/${article.slug}`}>
          <a>
            <h3
              className={cn(
                s.title,
                'serif leading-tight overflow-hidden max-h-28 mb-3 hover:underline text-xl'
              )}
            >
              {article.title}
            </h3>
          </a>
        </Link>

        <div className="text-sm flex flex-wrap">
          <p>
            By
            <Link href={`/contributors/${article.author.slug}`}>
              <a className="pl-1 font-bold hover:underline">
                {article.author.name}
              </a>
            </Link>
          </p>
          <span className="mx-3">|</span>
          <Link href={`/${article.category.slug}`}>
            <a className="text-accent hover:underline">
              {article.category.title}
            </a>
          </Link>
          <span className="mx-3">|</span>
          <Date date={article.published_at as string} />
        </div>
      </section>
    </article>
  )
}

export default ArticleCardTop
