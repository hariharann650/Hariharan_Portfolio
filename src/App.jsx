import React from 'react'
import Navbar from './Components/navbar/navbar';
import Hero from './Components/hero/hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Mywork from './Components/Mywork/Mywork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App