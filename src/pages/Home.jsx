import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Home/HeroSection'
import Testing from '../components/Home/Testing'

function Home() {
  return (
    <div>
        <div className='overflow-hidden'>
            <Navbar></Navbar>
            <HeroSection />
            <Testing />
        </div>
    </div>
  )
}

export default Home