import { ParsedUrlQuery } from 'querystring'
import { useEffect, useState } from 'react'
import { fetchAPI } from '../api'

type ReturnProps<T> = {
  isLoading: boolean
  data: T[] | []
}

export const useSearch = <T>(
  endpoint: string,
  query: ParsedUrlQuery
): ReturnProps<T> => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<T[] | []>([])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      // only will search for matching titles
      // THE CONTENT TYPE HAS TO HAVE A TITLE PROPERTY
      let url = `${endpoint}?title_contains=${encodeURIComponent(
        query.q as string
      )}`
      if (query.category) {
        url = `${url}&category.slug=${query.category}`
      }
      if (query.sort) {
        url = `${url}&_sort=published_at:${query.sort}`
      }
      try {
        const fetchedData = await fetchAPI(url)
        setData(fetchedData)
      } catch (error) {
        setData([])
      }
      setIsLoading(false)
    }
    // Only fetch if query is defined
    if (query.q) {
      fetchData()
    }
  }, [endpoint, query, setIsLoading, setData])

  return {
    isLoading,
    data,
  }
}
