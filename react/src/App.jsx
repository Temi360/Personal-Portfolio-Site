import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
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
        <li><Link to = "/work">work</Link></li>
        <li><Link to = "/contact">contact</Link></li>

        </ul>
      </nav>
      <Routes>
      <Route path="/" element={<WelcomePage />} />
        <Route path="/work" element={<ComputerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </div>
  );
};



const WelcomePage = () => (
       <>
          <div>
              This will be where the welcome page is
          </div>
       </>
  );

export default App
