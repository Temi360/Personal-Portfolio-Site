import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DeskPage from './DeskPage.jsx'
import WelcomePage from './WelcomePage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WelcomePage />
    <DeskPage />
    <App />
  </React.StrictMode>,
)
