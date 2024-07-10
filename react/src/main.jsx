import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Grady from './Grady.jsx'
import Temi from './Temi.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Temi />
    <Grady />
  </React.StrictMode>,
)
