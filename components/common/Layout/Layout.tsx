import { Footer } from '../Footer'
import { Header } from '../Header'
import { Nav } from '../Nav'
import OfflineBanner from '../OfflineBanner'

type Props = {
  children: React.ReactNode
  navigation?: TNavigation
}

const Layout = ({ children, navigation }: Props) => {
  return (
    <>
      <Header />
      {navigation && <Nav categories={navigation.categories} />}

      <main className="min-h-screen px-4 pt-14 pb-20 flex flex-col mx-auto md:w-3/4 lg:w-2/3 xl:w-7/12">
        {children}
      </main>

      <OfflineBanner />

      {navigation && (
        <Footer categories={navigation.categories} pages={navigation.pages} />
      )}
    </>
  )
}

export default Layout
