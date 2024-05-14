// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Home/Button';

function Navbar({ username, setUsername }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername('');
    navigate('/login');
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            {!username ? (
              <li>
                <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li>
            ) : (
              <li>
                <Link to='/login' className='nav-links-mobile' onClick={() => { handleLogout(); closeMobileMenu(); }}>
                  Sign Out
                </Link>
              </li>
            )}
          </ul>
          {button && !username && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          {button && username && <Button buttonStyle='btn--outline' onClick={handleLogout}>SIGN OUT</Button>}
          {username && <div className='navbar-username'>Welcome, {username}!</div>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;