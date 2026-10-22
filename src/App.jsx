import {NavBar} from './components/NavBar.jsx'
import {Hero} from './components/Hero.jsx'
import {AboutMe} from './components/AboutMe.jsx'
import {Skills} from './components/Skills.jsx'
import {Projects} from './components/Projects.jsx'
import {Contact} from './components/Contact.jsx'
import {Footer} from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <div className='
      min-h-screen
    '>
      <NavBar/>
      <main className='lg:px-6 xl:px-8'>
        <Hero/>

        <div className='
        relative border-b border-colorSutilBoard
        md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6
        xl:gap-8
        '>
          <AboutMe/>
          <Skills/>
        </div>

        <div className='lg:grid lg:grid-cols-3 lg:gap-6 xl:gap-8'>
          <Projects/>
          <Contact/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App
