import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './profile.jsx'
import Menu from './home.jsx'
import Navbar from './navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Profile/>
    <Menu/>
  </StrictMode>,
)
