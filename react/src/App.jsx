import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './WelcomePage';
import ComputerPage from './ComputerPage';
import ContactPage from './ContactPage';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {

  return (
    <div>
      <nav>
        <ul>
        <li><Link to = "/">Home</Link></li>
        <li>designer, coder, storyteller...</li>
        <li><Link to = "/">work</Link></li>
        <li><Link to = "/">contact</Link></li>

        </ul>
      </nav>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/work" element={<ComputerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </div>
  );
};

export default App
