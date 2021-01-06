import { Layout } from '@components/common/Layout'

const offline = () => {
  return (
    <Layout>
      <div className="text-center my-auto">
        <h4 className="my-1">You are offline</h4>
        <p>
          This page can&apos;t be displayed because you are not connected to the
          internet
        </p>
      </div>
    </Layout>
  )
}

export default offline
