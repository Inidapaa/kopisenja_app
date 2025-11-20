import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import bgImage from "../assets/Background.jpg";
import Navbar from "../components/navbar";
import Title from "../components/title";
import { fetchOrderDetail } from "../action/orders";

const STATUS_MAPPER = {
  pending: {
    label: "Menunggu Konfirmasi Barista",
    badge: "bg-yellow-100 text-yellow-700",
    description:
      "Pesanan kamu sudah masuk sistem dan sedang menunggu barista melakukan konfirmasi.",
  },
  processing: {
    label: "Sedang Diproses",
    badge: "bg-blue-100 text-blue-700",
    description:
      "Barista sedang menyiapkan minumanmu. Mohon tunggu sebentar di meja yang dipilih.",
  },
  completed: {
    label: "Pesanan Selesai",
    badge: "bg-green-100 text-green-700",
    description:
      "Pesanan sudah siap dinikmati. Terima kasih telah memesan di Kopi Senja!",
  },
};

const WaitingPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmState, setConfirmState] = useState({
    open: false,
    target: null,
  });
  const allowLeaveRef = useRef(false);

  const statusInfo = useMemo(() => {
    const status = order?.status || "pending";
    return STATUS_MAPPER[status] || STATUS_MAPPER.pending;
  }, [order]);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(Number(value || 0));

  useEffect(() => {
    let polling;

    const loadOrder = async () => {
      try {
        const data = await fetchOrderDetail(orderId);
        setOrder(data);
        setErrorMessage("");
      } catch (error) {
        setErrorMessage(error?.message || "Gagal memuat pesanan.");
      } finally {
        setLoading(false);
      }
    };

    loadOrder();
    polling = setInterval(loadOrder, 5000);

    return () => {
      clearInterval(polling);
    };
  }, [orderId]);

  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    const handlePopState = () => {
      if (allowLeaveRef.current) return;
      setConfirmState({ open: true, target: "back" });
      window.history.pushState(null, "", window.location.href);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (order?.status === "completed") {
      allowLeaveRef.current = true;
      setConfirmState({ open: false, target: null });
    }
  }, [order?.status]);

  const requestLeave = (targetPath) => {
    if (allowLeaveRef.current || order?.status === "completed") {
      return true;
    }
    setConfirmState({ open: true, target: targetPath });
    return false;
  };

  const handleNavbarNavigate = (path) => requestLeave(path);

  const confirmNavigation = () => {
    const target = confirmState.target;
    allowLeaveRef.current = true;
    setConfirmState({ open: false, target: null });
    if (target === "back") {
      navigate(-1);
    } else if (target) {
      navigate(target);
    } else {
      navigate("/");
    }
  };

  const cancelNavigation = () => {
    setConfirmState({ open: false, target: null });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar onNavigateRequest={handleNavbarNavigate} />
      <Title />
      <div className="px-4 py-10 flex justify-center">
        <div className="bg-white/90 rounded-4xl shadow-2xl w-full max-w-4xl p-8 mb-20">
          {loading ? (
            <p className="text-center text-lg text-gray-600">
              Memuat informasi pesanan...
            </p>
          ) : errorMessage ? (
            <div className="text-center">
              <p className="text-red-500 mb-4">{errorMessage}</p>
              <Link
                to="/menu"
                onClick={(event) => {
                  event.preventDefault();
                  requestLeave("/menu");
                }}
                className="bg-secondary text-white px-5 py-2 rounded-full"
              >
                Kembali ke Menu
              </Link>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-gray-500">Nomor Pesanan</p>
                  <h1 className="text-4xl font-extrabold text-secondary tracking-wide">
                    #{String(order.id).padStart(3, "0")}
                  </h1>
                </div>
                <div
                  className={`px-4 py-2 rounded-full font-semibold ${statusInfo.badge}`}
                >
                  {statusInfo.label}
                </div>
              </div>
              <p className="text-gray-600 mt-4">{statusInfo.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 rounded-3xl p-5">
                  <h2 className="text-xl font-semibold mb-4 text-secondary">
                    Detail Pemesan
                  </h2>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <span className="text-gray-500 block text-sm">Nama</span>
                      <span className="font-medium">
                        {order.customer_name || "-"}
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-500 block text-sm">
                        Metode Pembayaran
                      </span>
                      <span className="font-medium uppercase">
                        {order.payment_method}
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-500 block text-sm">
                        Nomor Meja
                      </span>
                      <span className="font-medium text-lg">
                        {order.meja?.nomor_meja || order.meja_id}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-3xl p-5">
                  <h2 className="text-xl font-semibold mb-4 text-secondary">
                    Ringkasan Pesanan
                  </h2>
                  <div className="space-y-4">
                    {order.order_items?.length ? (
                      order.order_items.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center border-b border-gray-200 pb-3"
                        >
                          <div>
                            <p className="font-semibold text-gray-800">
                              {item.product?.name || "Produk"}
                            </p>
                            <span className="text-sm text-gray-500">
                              x{item.quantity}
                            </span>
                          </div>
                          <p className="font-semibold text-gray-800">
                            {formatCurrency(
                              Number(item.product?.price || 0) * item.quantity
                            )}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">
                        Tidak ada detail item.
                      </p>
                    )}
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-lg font-semibold text-gray-600">
                        Total
                      </span>
                      <span className="text-2xl font-extrabold text-secondary">
                        {formatCurrency(order.total_amount)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-secondary/10 border border-secondary rounded-3xl p-5 text-secondary">
                  <h3 className="text-lg font-semibold mb-2">
                    Tips menikmati Kopi Senja:
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Pastikan nomor meja terlihat jelas oleh barista.</li>
                    <li>
                      Tetap di meja yang dipilih agar pesanan cepat diantar.
                    </li>
                    <li>
                      Hubungi staf jika status tidak berubah dalam 10 menit.
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => requestLeave("/menu")}
                    className="bg-secondary text-white px-8 py-3 rounded-full shadow hover:bg-secondary/90 transition"
                  >
                    Pesan Lagi
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {confirmState.open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-4xl shadow-2xl p-6 max-w-md w-full border border-secondary/20">
            <h3 className="text-2xl font-semibold text-secondary text-center">
              Tinggalkan halaman?
            </h3>
            <p className="text-gray-600 mt-3 text-center">
              Pesananmu masih diproses. Kalau keluar sekarang, kamu mungkin
              melewatkan update status terbaru. Yakin tetap mau pergi?
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <button
                type="button"
                onClick={cancelNavigation}
                className="flex-1 border border-secondary text-secondary rounded-3xl py-3 font-semibold hover:bg-secondary/5 transition"
              >
                Tetap di sini
              </button>
              <button
                type="button"
                onClick={confirmNavigation}
                className="flex-1 bg-secondary text-white rounded-3xl py-3 font-semibold hover:bg-secondary/90 transition"
              >
                Tinggalkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitingPage;
