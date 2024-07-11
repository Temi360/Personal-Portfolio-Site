import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <ul>
        <li>Home</li>
        <li>designer, coder, storyteller...</li>
        <li>work.</li>
        <li>contact.</li>

        </ul>
      </nav>
      <Routes>

      </Routes>
      </Router>
  );
};

export default App
