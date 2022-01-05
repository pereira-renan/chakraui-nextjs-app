import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <>
    <Head>
      <title>zenStatus</title>
    </Head>
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
    <footer></footer>
  </>
)

export default Layout
