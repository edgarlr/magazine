// import { useState, useEffect } from 'react'
import { useLocalStorage } from '@lib/hooks/use-local-storage'

type ReturnProps = {
  list: string[]
  addToList: (slug: string) => void
  removeFromList: (slug: string) => void
}

export const useList = (): ReturnProps => {
  const [list, setList] = useLocalStorage<string[]>('saved', [])

  const addToList = (slug: string) => {
    setList([...list, slug])
  }

  const removeFromList = (slug: string) => {
    setList(list.filter((article: string) => article !== slug))
  }

  // useEffect(() => {
  //   setList(list)
  // }, [list, setList])

  return { list, addToList, removeFromList }
}
