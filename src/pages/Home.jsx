import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Home/HeroSection'
import Testing from '../components/Home/Testing'
import Kntl from '../components/Home/kntl'

function Home() {
  return (
    <div>
        <div className='overflow-hidden'>
            <Navbar></Navbar>
            <HeroSection />
            <Testing />
            <Kntl />
        </div>
    </div>
  )
}

export default Home