import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/home.jsx'
import Checkout from '../pages/checkout.jsx'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },

  {
    path: '/checkout',
    element: <Checkout/>
  }
])

export default Router