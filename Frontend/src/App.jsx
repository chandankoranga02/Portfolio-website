import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Vission from './components/Vission'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Work from './components/Work'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <>
   <Navbar/>
   <Hero/>
   <Vission/>
   <Skills/>
   <Projects/>
   <Work/>
   <Education/>
   <Contact/>
   <Footer/>
</>
  );
}

export default App;