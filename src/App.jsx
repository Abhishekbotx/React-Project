import React from 'react'
import Navbar from './components/Navbar'

// import APIapp from '../src/API & Useffect/APIapp'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Episode from './components/Episode'
// import ShortFormsCards from './components/ShortFormsCards'
const App = () => {
  return (
    <div className='   w-full min-h-screen  '>
      
      <Nav></Nav>
      <Hero></Hero>
      <Episode></Episode>
      {/* <ShortFormsCards></ShortFormsCards> */}

      
    </div>
  )
}

export default App 