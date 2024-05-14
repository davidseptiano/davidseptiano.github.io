// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Login from './components/Login/Login';

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login setUsername={setUsername} />} />
          <Route path="/" element={username ? <Home /> : <Navigate to="/login" />} />
          <Route path="/services" element={username ? <Services /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;