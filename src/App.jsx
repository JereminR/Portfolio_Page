import {NavBar} from './components/NavBar.jsx'
import {Hero} from './components/Hero.jsx'
import {AboutMe} from './components/AboutMe.jsx'
import {Skills} from './components/Skills.jsx'
import {Projects} from './components/Projects.jsx'
import {Contact} from './components/Contact.jsx'
import {Footer} from './components/Footer.jsx'
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <NavBar/>
      <main>
        <Hero/>
        <div className='
        relative border-b border-colorSutilBoard
        md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3
        md:before:content-[""]
        md:before:absolute md:before:top-0 md:before:bottom-0
        md:before:left-1/2 md:before:w-px
        md:before:my-5
      md:before:bg-colorSutilBoard
        '>
          <AboutMe/>
          <Skills/>
        </div>
        <div>
          <Projects/>
          <Contact/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
