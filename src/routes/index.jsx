import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/home.jsx'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }
])