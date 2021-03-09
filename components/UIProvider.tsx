import { useCallback, useState } from 'react'
import { ThemeProvider } from 'next-themes'
import ToastContainer from './ui/Toast/ToastContainer'
import { ToastContext } from '@lib/hooks/use-toast'

let id = 0

const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<TToast[]>([])

  const addToast = useCallback(
    (content) => {
      setToasts((toasts) => [...toasts, { id: id++, content }])
    },
    [setToasts]
  )

  const removeToast = useCallback(
    (id) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id))
    },
    [setToasts]
  )

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ThemeProvider>
        {children}
        <ToastContainer toasts={toasts} />
      </ThemeProvider>
    </ToastContext.Provider>
  )
}

export default UIProvider
