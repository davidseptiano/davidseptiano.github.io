import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Home/HeroSection'

function Home() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div>
        <div className='overflow-hidden'>
          <Navbar username={username} setUsername={setUsername} />
          <HeroSection />
        </div>
    </div>
  )
}

export default Home