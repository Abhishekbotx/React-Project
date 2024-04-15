import React from 'react'
import Navbar from './components/Navbar'

// import APIapp from '../src/API & Useffect/APIapp'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Episode from './components/Episode'
import WhatWeDo from './components/WhatWeDo'
import Pricing from './components/Pricing'
import ShortFormsCards from './components/ShortFormsCards'
import CaseStudiecard from './components/CaseStudies'
import CaseStudySection from './components/CaseStudySection'
// import ShortFormsCards from './components/ShortFormsCards'
const App = () => {
  return (
    <div className='   w-full min-h-screen bg-slate-900 '>
      
      <Nav></Nav>
      <Hero></Hero>
      <ShortFormsCards></ShortFormsCards>
      <Episode></Episode>
      <ShortFormsCards></ShortFormsCards>
      <WhatWeDo></WhatWeDo>
      <Pricing></Pricing>
      {/* <CaseStudiecard></CaseStudiecard> */}

      <CaseStudySection></CaseStudySection>
      
    </div>
  )
}

export default App 