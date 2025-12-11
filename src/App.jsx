import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Project from './Components/Project'
import Educations from './Components/Educations'
import Experience from './Components/Experience'
import Skills from './Components/Skills'

function App() {

  return (
    <div className='App'>
      <Home />
      <About />
      <Experience/>
      <Skills/>
      <Educations />
      <Project />
      <Contact />
    </div>
  )
}

export default App
