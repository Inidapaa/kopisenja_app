import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import {Router} from './routes/index.jsx'
import {RouterProvider} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>
)


