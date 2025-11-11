import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Work from './components/Work'
import ProjectSection from './components/ProjectSection'
import Vision from './components/Vision'
import StatsSection from './components/Stats'
import Marquee from './components/Marquee'
import Dribble from './components/Dribble'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full h-screen text-white bg-[#121315]'>
      <Navbar />
      <HeroSection />
      <div className="empty h-screen w-full"></div>
      <Work />
      <ProjectSection />
      <Vision />
      <StatsSection />
      <Marquee />
      <Dribble />
      <Footer />
    </div>
  )
}

export default App
