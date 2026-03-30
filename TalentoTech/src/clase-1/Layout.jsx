import Header from "./Header"
import Sidebar from "./Sidebar"
import Main from "./Main"
import Footer from "./Footer"

function Layout() {
  return (
    <div className="layout">
      <Header />

      <div className="content">
        <Sidebar />
        <Main />
      </div>

      <Footer />
    </div>
  )
}

export default Layout