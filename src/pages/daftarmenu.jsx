import { getAllMenu } from "../action/products";
import bgImage from "../assets/Background.jpg";
import { House, SquareMenu, ShoppingCart, Star, Plus } from "lucide-react";
import matchaImg from "../assets/matcha1.png";
import Navbar from "../components/navbar.jsx";
import React, { useEffect, useState, useMemo } from "react";

const Menu = () => {
  const [produk, setProduk] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllMenu()
      .then(data => {
        setProduk(data || []);
        setLoading(false);
      })
      .catch(err => {
        setError("Gagal fetch ke backend: " + err.message);
        setLoading(false);
      });
  }, []);

  const { minuman, makanan } = useMemo(() => {
    const lower = (s) => (typeof s === "string" ? s.toLowerCase() : "");
    return {
      minuman: (produk || []).filter(p => lower(p.category) === "minuman"),
      makanan: (produk || []).filter(p => lower(p.category) === "makanan"),
    };
  }, [produk]);

  return (
    <>
      <div
        className="min-h-screen w-screen bg-cover bg-center relative flex flex-col"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* overlay */}
        {/* <div className="absolute inset-0 bg-white/20 z-10"></div> */}

        <h1 className="mt-8 text-center font-serif font-bold text-3xl text-black ">
          Daftar Menu
        </h1>

        <div className="flex-1 px-6 pb-28">
          {loading ? (
            <div className="text-center py-10">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500 py-10">{error}</div>
          ) : (
            <div className="space-y-8">
              {/* Minuman */}
              <div>
                <h2 className="font-bold text-black font-serif text-2xl mt-6 mb-3">Minuman</h2>
                <div className="space-y-4">
                  {minuman.length === 0 && <div className="text-sm text-gray-600">Belum ada minuman</div>}
                  {minuman.map((item) => (
                    <div key={item.id} className="flex items-center bg-white rounded-3xl shadow-md p-3">
                      <img
                        src={item.image || matchaImg}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                      <div className="flex-1 px-3">
                        <h3 className="font-bold text-black">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <p className="text-black">Rp {Number(item.price)?.toLocaleString()}</p>
                      </div>
                      <button className="text-red-500">
                        <Plus size={28} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Makanan */}
              <div>
                <h2 className="font-bold text-black font-serif text-2xl mt-6 mb-3">Makanan</h2>
                <div className="space-y-4">
                  {makanan.length === 0 && <div className="text-sm text-gray-600">Belum ada makanan</div>}
                  {makanan.map((item) => (
                    <div key={item.id} className="flex items-center bg-white rounded-3xl shadow-md p-3">
                      <img
                        src={item.image || matchaImg}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                      <div className="flex-1 px-3">
                        <h3 className="font-bold text-black">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <p className="text-black">Rp {Number(item.price)?.toLocaleString()}</p>
                      </div>
                      <button className="text-red-500">
                        <Plus size={28} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navbar bawah */}
        <Navbar />
      </div>
    </>
  );
};

export default Menu;
