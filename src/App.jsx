import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'

function App() {

  return (
    <div className='App'>
      <Home />
      <About />
    </div>
  )
}

export default App
