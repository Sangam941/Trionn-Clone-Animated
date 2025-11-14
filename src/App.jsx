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
import JungleTrek from './components/JungleTrek'
import SocialLinks from './components/SocialLinks'

const App = () => {
  return (
    <div className='w-full min-h-screen text-white bg-[#121315] overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <div className="empty h-screen w-full max-md:hidden"></div>
      <Work />
      <ProjectSection />
      <Vision />
      <StatsSection />
      <Marquee />
      <Dribble />
      <JungleTrek />
      <SocialLinks />
      <Footer />
    </div>
  )
}

export default App
