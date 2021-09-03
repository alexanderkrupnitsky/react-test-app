import "./index.css"
import { Content } from "./layouts/content"
import { Footer } from "./layouts/footer"
import { Header } from "./layouts/header"
import { Hero } from "./layouts/hero"
import { Nav } from "./layouts/nav"
import { Sidebar } from "./layouts/sidebar"

const App = () => {
  return (
    <main className='container'>
      <Header />
      <Hero />
      <Nav />
      <Content />
      <Sidebar />
      <Footer />
    </main>
  )
}

export { App }
