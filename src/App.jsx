import NavBar from "./components/Navbar/NavBar"
import Hero from "./components/hero"
import Intro from "./components/Intro"
import TopProducts from "./components/TopProducts"
import Services from "./components/Services"
import Footer from "./components/footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About"
import Contact from "./components/Contact"
import catalog from "./components/Catalog"



function App() {

  return (
    <Router>
      <div className="bg-white dark:bg-grey-900 dark:text-white duration-200 overflow-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Intro />
              <Services />
              <TopProducts />
              <Footer />
            </>
          }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route Path="/catalog" element={<catalog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
