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
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
