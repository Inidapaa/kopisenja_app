import { Link } from "react-router-dom";
import { Clock, MapPin } from "lucide-react";
import matcha1 from "../assets/matcha1.png";
import Profile from "../components/profile.jsx";
import Navbar from "../components/navbar.jsx";
import { getAllMenu } from "../action/products";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMenu()
      .then(data => {
        // Ambil 3 produk terbaru (sudah terurut descending dari backend)
        const latest = (data || []).slice(0, 3);
        setLatestProducts(latest);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Profile />
      <div className="h-[102vh] bg-[url('../assets/Background.jpg')] bg-cover bg-center">
        <div className="flex flex-col text-[#504B38]">
          <h1 className="font-bold text-5xl text-center mt-5 md:text-5xl md:mt-10">
            Halo, Senja's!
          </h1>
          <p className="text-[20px] m-5 font-bold md:text-center md:text-2xl">
            Di tiap tetes kopi ada cerita, di tiap senja ada makna. Kopi Senja
            hadir untuk kamu yang ingin singgah, agar hari tak sekadar lewat
            tanpa rasa.
          </p>
        </div>
        {/* ------------ABOUT SECTION------------- */}
        <div className="justify-center items-center mx-5 font-bold text-[#504B38]">
          <ul className="flex place-content-around">
            <li className="flex gap-4 items-center">
              <Clock className="w-10 h-10 md:h-15 md:w-15" /> 15.00-22.00
            </li>
            <li className="flex gap-2 items-center">
              <MapPin className="w-10 h-10 md:h-15 md:w-15" />
              Jl. Ikan tombro, Mojolangu
            </li>
            <li className="flex gap-2 items-center">
              <Clock className="w-10 h-10 md:h-15 md:w-15" /> 15.00-22.00
            </li>
          </ul>
        </div>
        {/* -----------CARD SECTION---------- */}
        <h3 className="font-bold text-2xl text-[#504B38] mx-5 mt-10 mb-4 md:text-4xl md:text-center md:mb-6">
          Menu Terbaru
        </h3>
        <div className="flex justify-center items-center px-5">
          {loading ? (
            <div className="text-center text-[#504B38] py-8 text-lg">Loading...</div>
          ) : latestProducts.length === 0 ? (
            <div className="text-center text-[#504B38] py-8 text-lg">Belum ada menu tersedia</div>
          ) : (
            <div className="grid grid-cols-3 gap-3 md:gap-8 w-full max-w-4xl mx-auto">
              {latestProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col items-center py-3 px-2 md:py-4 md:px-3">
                  <img
                    className="w-full aspect-square object-cover rounded-xl mb-2 md:mb-3"
                    src={product.image || matcha1}
                    alt={product.name}
                  />
                  <div className="w-full text-center px-1">
                    <h4 className="text-xs font-bold text-[#504B38] mb-1 line-clamp-1 md:text-xl md:mb-2">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#504B38] font-semibold md:text-lg">
                      Rp{Number(product.price).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
              {/* Jika produk kurang dari 3, tampilkan placeholder */}
              {latestProducts.length < 3 && Array.from({ length: 3 - latestProducts.length }).map((_, idx) => (
                <div key={`placeholder-${idx}`} className="bg-white rounded-2xl shadow-md opacity-50 overflow-hidden flex flex-col items-center py-3 px-2 md:py-4 md:px-3">
                  <div className="w-full aspect-square bg-gray-200 rounded-xl mb-2 md:mb-3"></div>
                  <div className="w-full text-center px-1">
                    <div className="h-3 bg-gray-200 rounded mb-1 w-3/4 mx-auto md:h-5 md:mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/3 mx-auto md:h-4"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center items-center mt-10">
          <Link
            to="/menu"
            className=" flex items-center justify-center bg-third h-10 w-30 rounded-2xl text-white hover:shadow-md transition"
          >
            Lihat Menu
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
