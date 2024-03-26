
import './App.css'
import Contactme from './components/ContactMe/Contactme'
import Footer from './components/footer/Footer'
import Home from './components/homepage/Home'
import Navbar1 from './components/navbar/Navbar1'
import Project from './components/projects/Project'
import Services from './components/services/Services'
import Skills from './components/skill/Skills'

function App() {
  

  return (
    <>
      <Navbar1/>
      <Home/>
      <Skills/>
      <Services/>
      <Project/>
      <Contactme/>
      <Footer/>
    </>
  )
}

export default App
