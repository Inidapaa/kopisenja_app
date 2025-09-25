import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import Profile from './components/profile.jsx'
import Menu from './pages/home.jsx'
import Navbar from './components/navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu/>
  </StrictMode>,
)
