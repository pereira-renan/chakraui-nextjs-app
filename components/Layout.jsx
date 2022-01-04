import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <>
    <Head>
      <title>{process.env.title}</title>
    </Head>
    <header>
      <Navbar title={process.env.title} />
    </header>
    <main>{children}</main>
    <footer></footer>
  </>
)

export default Layout
