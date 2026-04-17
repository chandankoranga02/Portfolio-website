import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'

function App() {
  return (
    <>
   <Navbar/>
   <Hero/>
</>
  );
}

export default App;