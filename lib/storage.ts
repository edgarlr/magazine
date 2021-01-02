import { set, get, del, keys } from 'idb-keyval'
import { getMediaURL } from './api'

type SWR = ServiceWorkerRegistration & { index?: any }

async function registerContent(article: TArticle) {
  const registration: SWR = await navigator.serviceWorker.ready
  if (!registration.index) return null
  try {
    await registration.index.add({
      id: article.slug,
      url: `/lists/${article.slug}`,
      launchUrl: `/lists/${article.slug}`,
      title: article.title,
      description: article.description,
      category: 'article',
      icons: [
        {
          src: getMediaURL(article.cover.formats.thumbnail?.url),
        },
      ],
    })
  } catch (e) {
    console.error('Failed to register content', e)
  }
}

async function unregisterContent(id: string) {
  const registration: SWR = await navigator.serviceWorker.ready
  if (!registration.index) return null
  try {
    await registration.index.delete(id)
  } catch (e) {
    console.error('Failed to unregister content', e)
  }
}

export async function storeContent(article: TArticle) {
  await set(article.slug, JSON.stringify(article))
  await registerContent(article)
}

export async function removeContent(article: TArticle) {
  await del(article.slug)
  await unregisterContent(article.slug)
}

export async function getAllStoredContent() {
  const allKeys: any = await keys()
  const articles: any = await Promise.all(allKeys.map((key: any) => get(key)))
  return articles.map((article: any) => JSON.parse(article))
}
