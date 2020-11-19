import { IconBookmark, IconDownload } from '@components/icons'
import { getMediaURL } from '@lib/api'
import dateFormatter from '@lib/dateFormatter'
import Link from 'next/link'
import s from './ArticleCoverFeatured.module.css'

const ArticleCoverFeatured = ({ article }: { article: TArticle }) => {
  return (
    <div className="flex items-center h-56 relative text-gray-500  min-w-full mr-20">
      <div className="pt-4">
        <Link href={`/${article.category.slug}`}>
          <a className="uppercase text-sm font-bold text-purple-400">
            {article.category.title}
          </a>
        </Link>
        <Link href={`/articles/${article.slug}`}>
          <h3 className={s.title}>{article.title}</h3>
        </Link>
        <p className="font-serif text-s text-white">
          By{' '}
          <Link href={`/contributors/${article.author.slug}`}>
            <span className="italic">{article.author.name}</span>
          </Link>
        </p>
        <span className="text-sm">{dateFormatter(article.published_at)}</span>
      </div>
      <div className="absolute bottom-0 bg-primary left-1/2 transform -translate-x-1/2 ">
        <button className="pl-4">
          <IconBookmark />
        </button>
        <button className="p-4">
          <IconDownload />
        </button>
      </div>
      <div className="relative w-2/3 pb-2/5 transform translate-x-1/3">
        <Link href={`/articles/${article.slug}`}>
          <img
            src={getMediaURL(article.cover.formats.thumbnail?.url)}
            alt={article.cover.alternativeText}
            className="absolute h-full w-full object-cover"
          />
        </Link>
      </div>
    </div>
  )
}

export default ArticleCoverFeatured
