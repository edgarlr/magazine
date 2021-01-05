import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
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

      <main className="min-h-screen px-4 pt-14 pb-20 flex flex-col">
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
