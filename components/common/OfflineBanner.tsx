import { useIsOffline } from '@lib/hooks/use-is-offline'

const OfflineBanner = () => {
  const { isOffline } = useIsOffline()

  if (!isOffline) return null

  return (
    <div className="flex justify-center items-center fixed bottom-0 py-2 left-0 right-0 bg-secondary z-20">
      <p className="text-gray-300">No Internet Connection</p>
    </div>
  )
}

export default OfflineBanner
