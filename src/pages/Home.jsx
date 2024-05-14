import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Home/HeroSection'

function Home() {
  return (
    <div>
        <div className='overflow-hidden'>
            <Navbar></Navbar>
            <HeroSection />
        </div>
    </div>
  )
}

export default Home