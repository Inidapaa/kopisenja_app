import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ClipboardList, Clock, PlusCircle } from "lucide-react";
import { fetchOrders } from "../action/orders";
import { useNotification } from "../hooks/useNotification";

function NavbarAdmin() {
  const location = useLocation();
  const [pendingCount, setPendingCount] = useState(0);
  const [processingCount, setProcessingCount] = useState(0);
  const prevCountRef = useRef(null);
  const { showNotification } = useNotification();

  useEffect(() => {
    let interval;
    const loadCounts = async () => {
      try {
        const [pendingData, processingData] = await Promise.all([
          fetchOrders({ status: "pending" }),
          fetchOrders({ status: "processing" }),
        ]);
        setPendingCount(pendingData.length);
        setProcessingCount(processingData.length);
        if (
          prevCountRef.current !== null &&
          pendingData.length > prevCountRef.current
        ) {
          showNotification("Pesanan baru menunggu konfirmasi", {
            description: "Buka daftar pesanan untuk memproses.",
            icon: ClipboardList,
          });
        }
        prevCountRef.current = pendingData.length;
      } catch {
        // ignore
      }
    };
    loadCounts();
    interval = setInterval(loadCounts, 5000);
    return () => clearInterval(interval);
  }, [showNotification]);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed bottom-0 w-screen h-20 rounded-t-4xl bg-white flex justify-center items-center shadow-custom z-40">
      <ul className="flex gap-10">
        <Link to="/order">
          <li className="relative">
            <ClipboardList
              size={50}
              color={isActive("/order") ? "#7A6A43" : "#504B38"}
              strokeWidth={1.5}
            />
            {pendingCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full min-w-6 h-6 flex items-center justify-center px-2">
                {pendingCount}
              </span>
            )}
          </li>
        </Link>
        <Link to="/history">
          <li className="relative">
            <Clock
              size={50}
              color={isActive("/history") ? "#7A6A43" : "#504B38"}
              strokeWidth={1.5}
            />
            {processingCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full min-w-6 h-6 flex items-center justify-center px-2">
                {processingCount}
              </span>
            )}
          </li>
        </Link>
        <Link to="/admin/crud">
          <li>
            <PlusCircle
              size={50}
              color={isActive("/admin/crud") ? "#7A6A43" : "#504B38"}
              strokeWidth={1.5}
            />
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default NavbarAdmin;
