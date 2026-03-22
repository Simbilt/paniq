import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import WorkShowcase from './components/WorkShowcase'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <WorkShowcase />
      <Contact />
    </div>
  )
}

export default App

