import { useEffect, useRef } from 'react'

const createRootElement = (id: string): HTMLDivElement => {
  const rootContainer = document.createElement('div')
  rootContainer.setAttribute('id', id)
  return rootContainer
}

const addRootElement = (rootElem: HTMLDivElement) => {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild!.nextElementSibling
  )
}

export const usePortal = (id: string) => {
  const rootElemRef = useRef<Element | null>(null)

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`)
    const parentElem = existingParent || createRootElement(id)

    if (!existingParent) {
      addRootElement(parentElem as HTMLDivElement)
    }

    parentElem.appendChild(rootElemRef.current as Node)

    return () => {
      rootElemRef.current?.remove()
      if (!parentElem.childElementCount) {
        parentElem.remove()
      }
    }
  }, [id])

  const getRootElem = () => {
    /* Only run on client */
    if (typeof window !== `undefined` && !rootElemRef.current) {
      rootElemRef.current = document.createElement('div')
    }
    return rootElemRef.current
  }

  return getRootElem()
}
