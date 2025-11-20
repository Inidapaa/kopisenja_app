import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminHeader from "../../components/admin_header.jsx";
import NavbarAdmin from "../../components/navbar_admin.jsx";
import { fetchOrders, updateOrderStatus } from "../../action/orders";

const STATUSES = [
  { value: "processing", label: "Sedang diproses" },
  { value: "completed", label: "Selesai" },
];

const STATUS_STYLE = {
  processing: "bg-blue-100 text-blue-700",
  completed: "bg-green-100 text-green-700",
};

const Riwayat = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [filter, setFilter] = useState("processing");
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/me", { withCredentials: true })
      .then((res) => {
        if (!res.data || !res.data.status) navigate("/login");
        else loadOrders();
      })
      .catch(() => navigate("/login"));
  }, [navigate]);

  const loadOrders = async () => {
    try {
      setLoading(true);
      const data = await fetchOrders();
      setOrders(data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error?.message || "Gagal memuat riwayat pesanan.");
    } finally {
      setLoading(false);
    }
  };

  const filteredOrders = useMemo(
    () => orders.filter((order) => order.status === filter),
    [orders, filter]
  );

  const handleComplete = async (orderId) => {
    try {
      setUpdatingId(orderId);
      await updateOrderStatus(orderId, "completed");
      await loadOrders();
    } catch (error) {
      setErrorMessage(error?.message || "Gagal memperbarui pesanan.");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-white pb-24">
      <AdminHeader />
      <h2 className="mt-5 text-center font-serif font-bold text-3xl text-[#504B38] z-20">
        Riwayat Pesanan
      </h2>

      <div className="px-5 mt-6 flex gap-3">
        {STATUSES.map((status) => (
          <button
            key={status.value}
            type="button"
            onClick={() => setFilter(status.value)}
            className={`px-4 py-2 rounded-full border ${
              filter === status.value
                ? "bg-[#504B38] text-white border-[#504B38]"
                : "bg-white text-[#504B38] border-gray-200"
            }`}
          >
            {status.label}
          </button>
        ))}
      </div>

      <div className="p-5">
        {loading ? (
          <p className="text-center text-gray-500">Memuat data...</p>
        ) : errorMessage ? (
          <p className="text-center text-red-500">{errorMessage}</p>
        ) : filteredOrders.length === 0 ? (
          <p className="text-center text-gray-500">
            Belum ada pesanan dengan status ini.
          </p>
        ) : (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="border rounded-3xl shadow p-5 mb-4 bg-gray-50 text-black"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                <div>
                  <p className="text-sm text-gray-500">Nomor Pesanan</p>
                  <span className="font-bold text-2xl">
                    #{String(order.id).padStart(3, "0")}
                  </span>
                </div>
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    STATUS_STYLE[order.status] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {STATUSES.find((s) => s.value === order.status)?.label ||
                    order.status}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p>Nama: {order.customer_name}</p>
                  <p>Nomor meja: {order.meja?.nomor_meja || order.meja_id}</p>
                  <p>Metode bayar: {order.payment_method}</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Daftar pesanan:</p>
                  <ul className="space-y-1">
                    {order.order_items?.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between text-sm border-b border-dashed border-gray-200 pb-1"
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
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="font-semibold text-gray-600">Total</span>
                <span className="text-2xl font-bold text-[#504B38]">
                  Rp {Number(order.total_amount || 0).toLocaleString("id-ID")}
                </span>
              </div>
              {order.status === "processing" && (
                <button
                  type="button"
                  onClick={() => handleComplete(order.id)}
                  disabled={updatingId === order.id}
                  className="mt-4 w-full bg-[#504B38] text-white py-2 rounded-2xl hover:bg-[#6b644a] transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {updatingId === order.id
                    ? "Memperbarui..."
                    : "Tandai Selesai"}
                </button>
              )}
            </div>
          ))
        )}
      </div>
      <NavbarAdmin />
    </div>
  );
};

export default Riwayat;
