import { IconBookmark, IconThreeDots } from '@components/icons'
import { getMediaURL } from '@lib/api'
import dateFormatter from '@lib/dateFormatter'
import Link from 'next/link'

const ArticleCover = ({ article }: { article: TArticle }) => {
  return (
    <div className="pt-6 pb-4 border-b border-gray-600 relative text-gray-500">
      <div className="relative w-full">
        <Link href={`/articles/${article.slug}`}>
          <img
            src={getMediaURL(article.cover.formats.thumbnail?.url)}
            alt={article.cover.alternativeText}
            className="w-full object-cover"
          />
        </Link>
      </div>
      <div className="pt-4">
        <Link href={`/${article.category.slug}`}>
          <a className="uppercase text-xs font-bold text-purple-400">
            {article.category.title}
          </a>
        </Link>
        <Link href={`/articles/${article.slug}`}>
          <h3 className="font-serif capitalize text-2xl text-white">
            {article.title}
          </h3>
        </Link>
        <p className="font-serif text-sm text-white">
          By{' '}
          <Link href={`/contributors/${article.author.slug}`}>
            <span className="italic">{article.author.name}</span>
          </Link>
        </p>
        <span className="text-xs">{dateFormatter(article.published_at)}</span>
      </div>
      <div className="absolute bottom-0 right-0 pb-3">
        <button className="p-2">
          <IconBookmark />
        </button>
        <button className="p-2">
          <IconThreeDots />
        </button>
      </div>
    </div>
  )
}

export default ArticleCover
