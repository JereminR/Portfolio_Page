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
      <NavBar></NavBar>
      <main>
        <Hero></Hero>
        <div className='
        sm:flex sm:flex-row sm:gap-5'>
          <AboutMe></AboutMe>
          <Skills></Skills>
        </div>
        <div className='
        sm:flex sm:flex-row sm:gap-5'>
          <Projects></Projects>
          <Contact></Contact>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
