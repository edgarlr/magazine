import { Header, Nav } from '@components/core'

type Props = {
  children: React.ReactNode
  nav?: TCategory[]
}

const Layout = ({ children, nav }: Props) => {
  return (
    <>
      <Header />
      {nav && <Nav categories={nav} />}
      <main className="flex flex-col px-4 pt-14">{children}</main>
    </>
  )
}

export default Layout
