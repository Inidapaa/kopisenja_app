import { Outlet } from "react-router-dom";
import { NotificationProvider } from "../context/NotificationProvider";

function Layout() {
  return (
    <NotificationProvider>
      <Outlet />
    </NotificationProvider>
  );
}

export default Layout;
