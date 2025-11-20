import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home.jsx";
import Checkout from "../pages/checkout.jsx";
import Menu from "../pages/daftarmenu.jsx";
import Qris from "../pages/qr.jsx";
import Login from "../pages/login.jsx";
import OrderList from "../pages/admin/daftarpesanan.jsx";
import History from "../pages/admin/riwayat.jsx";
import Register from "../pages/register.jsx";
import CrudProducts from "../pages/admin/crudproducts.jsx";
import Layout from "../components/Layout.jsx";
import WaitingPage from "../pages/waiting.jsx";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
        path: "/waiting/:orderId",
        element: <WaitingPage />,
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
        path: "/order",
        element: <OrderList />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/admin/crud",
        element: <CrudProducts />,
      },
    ],
  },
]);

export default Router;
