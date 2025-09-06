import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    // Check if user has a preference saved in localStorage
    const savedDarkMode = localStorage.getItem('darkMode')
    
    if (savedDarkMode !== null) {
      // Use saved preference
      const isDark = savedDarkMode === 'true'
      setDarkMode(isDark)
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else {
      // Use system preference if no saved preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(systemPrefersDark)
      if (systemPrefersDark) {
        document.documentElement.classList.add('dark')
      }
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    // Update the class on html element
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', newDarkMode.toString())
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 100) {
          setActiveSection(section.getAttribute('id'))
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        activeSection={activeSection} 
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App