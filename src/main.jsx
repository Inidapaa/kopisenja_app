import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import Profile from './pages/profile.jsx'
import Menu from './pages/home.jsx'
import Navbar from './pages/navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Profile/>
    <Menu/>
  </StrictMode>,
)
