import { Header } from '@components/core'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="px-4">
      <Header />
      <main className="pt-20">{children}</main>
    </div>
  )
}

export default Layout
