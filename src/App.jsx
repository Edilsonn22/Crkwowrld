import NavBar from "./components/Navbar/NavBar"
import Hero from "./components/hero"
import Intro from "./components/intro"
import TopProducts from "./components/TopProducts"
import Services from "./components/Services"
import Footer from "./components/footer"



function App() {

  return (
    <div className="bg-white dark:bg-grey-900 dark:text-white duration-200 overflow-hidden">
      <NavBar />
      <Hero />
      <Intro />
      <Services />
      <TopProducts />
      <Footer />
    </div>

  )
}

export default App;
