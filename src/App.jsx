import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Project from './Components/Project'
import Educations from './Components/Educations'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import { FaArrowUp } from 'react-icons/fa6'

function App() {
const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only when the user scrolls 100px down (away from Home)
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className='App'>
      <Home />
      <div className="">
        <About />
        <Experience/>
        <Skills/>
        <Educations />
        <Project />
        <Contact />
      {showTopBtn && (
        <a href="#Home" style={{ textDecoration: "none", color: "white" }}>
          <div className="Move_Top">
            <FaArrowUp />
          </div>
        </a>
      )}
      </div>
    </div>
  )
}

export default App
