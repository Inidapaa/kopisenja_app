import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminHeader from "../../components/admin_header.jsx";
import NavbarAdmin from "../../components/navbar_admin.jsx";
import { fetchOrders, updateOrderStatus } from "../../action/orders";
import { useNotification } from "../../hooks/useNotification";

const Pesanan = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [processingId, setProcessingId] = useState(null);
  const { showNotification } = useNotification();

  const loadOrders = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchOrders({ status: "pending" });
      setOrders(data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error?.message || "Gagal mengambil pesanan.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let interval;
    const verifyAndLoad = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/me", {
          withCredentials: true,
        });
        if (!res.data || !res.data.status) {
          navigate("/login");
          return;
        }
        await loadOrders();
        interval = setInterval(loadOrders, 5000);
      } catch {
        navigate("/login");
      }
    };
    verifyAndLoad();
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [navigate, loadOrders]);

  const handleConfirmOrder = async (orderId) => {
    try {
      setProcessingId(orderId);
      await updateOrderStatus(orderId, "processing");
      await loadOrders();
      const orderNumber = String(orderId).padStart(3, "0");
      showNotification(`Pesanan #${orderNumber} dipindahkan ke Riwayat`, {
        description:
          "Lihat tab Riwayat untuk melanjutkan pemantauan prosesnya.",
      });
    } catch (error) {
      setErrorMessage(error?.message || "Gagal mengonfirmasi pesanan.");
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-white pb-24">
      <AdminHeader />
      <h2 className="mt-5 text-center font-serif font-bold text-3xl text-[#504B38] z-20">
        Daftar Pesanan
      </h2>
      <div className="px-5 mt-6 space-y-4">
        {loading ? (
          <p className="text-center text-gray-500">Memuat pesanan...</p>
        ) : errorMessage ? (
          <div className="text-center text-red-500">{errorMessage}</div>
        ) : orders.length === 0 ? (
          <p className="text-center text-gray-500">
            Belum ada pesanan yang menunggu konfirmasi.
          </p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-white border border-gray-200 rounded-3xl shadow p-5 text-black"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <p className="text-sm text-gray-500">Nomor Pesanan</p>
                  <p className="text-2xl font-semibold text-[#504B38]">
                    #{String(order.id).padStart(3, "0")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Meja</p>
                  <p className="text-lg font-bold">
                    {order.meja?.nomor_meja || order.meja_id}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">Nama Pemesan</p>
                <p className="text-lg font-medium">{order.customer_name}</p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">Detail Pesanan</p>
                <ul className="space-y-1">
                  {order.order_items?.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between border-b border-dashed border-gray-200 pb-1"
                    >
                      <span>
                        {item.product?.name} x{item.quantity}
                      </span>
                      <span>
                        Rp{" "}
                        {(
                          Number(item.product?.price || 0) * item.quantity
                        ).toLocaleString("id-ID")}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-semibold text-gray-700">Total</span>
                  <span className="text-2xl font-bold text-[#504B38]">
                    Rp {Number(order.total_amount || 0).toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleConfirmOrder(order.id)}
                disabled={processingId === order.id}
                className="mt-5 w-full bg-[#504B38] text-white py-3 rounded-2xl font-semibold hover:bg-[#6b644a] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {processingId === order.id
                  ? "Mengonfirmasi..."
                  : "Konfirmasi & Proses"}
              </button>
            </div>
          ))
        )}
      </div>
      <NavbarAdmin />
    </div>
  );
};

export default Pesanan;
