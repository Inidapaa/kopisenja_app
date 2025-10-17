import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home.jsx";
import Checkout from "../pages/checkout.jsx";
import Menu from "../pages/daftarmenu.jsx";
import Qris from "../pages/qr.jsx";
import Login from "../pages/login.jsx";
import OrderList from "../pages/daftarpesanan.jsx";
import History from "../pages/riwayat.jsx";
import Register from "../pages/register.jsx";

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
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/auth/admin/order",
    element: <OrderList />,
  },
  {
    path: "/auth/admin/history",
    element: <History />,
  },
]);

export default Router;
