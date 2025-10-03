import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home.jsx";
import Checkout from "../pages/checkout.jsx";
import Menu from "../pages/daftarmenu.jsx";
import Qris from "../pages/qr.jsx";
import Login from "../pages/login.jsx";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/menu",
    element: <Menu />,
  },

  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/qrisPayment",
    element: <Qris />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
