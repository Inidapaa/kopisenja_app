import React from "react";
import bgImage from "../assets/Background.jpg";
import { CircleUserRound } from "lucide-react";
import logo from "../assets/matcha1.png";

const Riwayat = () => {
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
      {/* Header background */}
      <div
        className="h-22 w-screen bg-cover bg-top relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-1 right-4 w-20 h-20 rounded-full flex items-center justify-center shadow">
          <CircleUserRound size={60} color="#333" />
        </div>
        <div className="absolute top-3 left-4 w-15 h-15 rounded-full flex items-center bg-[#333]">
          <img src={logo} alt="Logo Kopi Senja" />
        </div>
      </div>

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
    </div>
  );
};

export default Riwayat;
