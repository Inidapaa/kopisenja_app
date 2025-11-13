import React, { useEffect } from "react";
import AdminHeader from "../../components/admin_header.jsx";
import NavbarAdmin from "../../components/navbar_admin.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Riwayat = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/api/me", { withCredentials: true })
      .then(res => {
        if (!res.data || !res.data.status) navigate("/login");
      })
      .catch(() => navigate("/login"));
  }, [navigate]);

  // contoh dummy data
  const orders = [
    {
      id: 1,
      nama: "abcde",
      meja: "01",
      items: [{ nama: "Matcha", jumlah: 1, harga: 10000 }],
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-white">
      <AdminHeader />
      {/* Judul */}
      <h2 className="mt-5 text-center font-serif font-bold text-3xl text-[#504B38] z-20">
        Riwayat Pesanan
      </h2>
      {/* Wadah Pesanan */}
      <div className="p-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-2xl shadow p-4 mb-4 bg-gray-100 text-black"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg">Nomor Pesanan</h2>
              <span className="font-bold text-lg">
                {order.id.toString().padStart(2, "0")}
              </span>
            </div>
            <p>Nama : {order.nama}</p>
            <p>Nomor meja: {order.meja}</p>
            <p className="mt-2 font-medium">Daftar pesanan:</p>
            <ul className="pl-5 mt-1">
              {order.items.map((item, idx) => (
                <li key={idx} className="flex justify-between py-1">
                  <span>
                    {item.nama} x{item.jumlah}
                  </span>
                  <span>{item.harga.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <NavbarAdmin />
    </div>
  );
};

export default Riwayat;
