import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Toast from './Toast'

const ToastContainer = ({ toasts }: { toasts: TToast[] }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  return createPortal(
    <div className="fixed right-0 bottom-8 w-screen md:bottom-4 md:w-96 md:right-4">
      {toasts.map((item: TToast) => (
        <Toast key={item.id} id={item.id}>
          {item.content}
        </Toast>
      ))}
    </div>,
    document.body
  )
}

export default ToastContainer
