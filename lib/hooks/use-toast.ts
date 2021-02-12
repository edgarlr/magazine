import { createContext, useContext } from 'react'

type ToastContextProps = {
  addToast: (content: TToast['content']) => void
  removeToast: (id: TToast['id']) => void
}

export const ToastContext = createContext<ToastContextProps | null>(null)

export const useToast = (): ToastContextProps => {
  const result = useContext(ToastContext)

  if (!result) {
    throw new Error()
  }

  return result
}
