import React, { useRef, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'


const App = () => {

  const heroRef=useRef(null)
  const skillRef=useRef(null)
  const projectRef=useRef(null)
  const contactRef=useRef(null)

  console.log(contactRef)
  
  return (
    <div className='bg-black'>
    <Navbar heroRef={heroRef} skillRef={skillRef} projectRef={projectRef} contactRef={contactRef}/>
    <Hero heroRef={heroRef}/>
    <Skills skillRef={skillRef}/>
    <Projects projectRef={projectRef}/>
    <Contact contactRef={contactRef}/>
    </div>
  )
}

export default App