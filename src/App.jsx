import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Project from './Components/Project'
import Educations from './Components/Educations'

function App() {

  return (
    <div className='App'>
      <Home />
      <About />
      <Educations />
      <Project />
      <Contact />
    </div>
  )
}

export default App
