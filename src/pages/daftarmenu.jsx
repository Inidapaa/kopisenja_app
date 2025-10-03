import bgImage from "../assets/Background.jpg";
import { House, SquareMenu, ShoppingCart, Star, Plus } from "lucide-react";
import cappuccinoImg from "../assets/matcha1.png";
import chocolateImg from "../assets/matcha1.png";
import matchaImg from "../assets/matcha1.png";
import friesImg from "../assets/matcha1.png";
import mixPlateImg from "../assets/matcha1.png";
import Navbar from "../components/navbar.jsx";

const Menu = () => {
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
          <h2 className="font-bold text-black font-serif text-2xl mt-6 mb-3">
            Minuman
          </h2>
          <div className="space-y-4">
            {/* cappuccino */}
            <div className="flex items-center bg-white rounded-3xl shadow-md p-3">
              <img
                src={cappuccinoImg}
                alt="Cappuccino"
                className="w-20 h-20 object-cover"
              />
              <div className="flex-1 px-3">
                <h3 className="font-bold text-black">Cappuccino</h3>
                <p className="text-sm text-gray-600">300ml</p>
                <p className="text-black">Rp 10.000</p>
                <p className="text-yellow-500 flex items-center gap-1">
                  <Star size={16} /> 4.8
                </p>
              </div>
              <button className="text-red-500">
                <Plus size={28} />
              </button>
            </div>

            {/* Chocolate */}
            <div className="flex items-center bg-white rounded-3xl shadow-md p-3">
              <img
                src={chocolateImg}
                alt="Chocolate"
                className="w-20 h-20 object-cover"
              />
              <div className="flex-1 px-3">
                <h3 className="font-bold text-black">Chocolate</h3>
                <p className="text-sm text-gray-600">300ml</p>
                <p className="text-black">Rp 10.000</p>
                <p className="text-yellow-500 flex items-center gap-1">
                  <Star size={16} /> 4.6
                </p>
              </div>
              <button className="text-red-500">
                <Plus size={28} />
              </button>
            </div>

            {/* Matcha */}
            <div className="flex items-center bg-white rounded-3xl shadow-md p-3">
              <img
                src={matchaImg}
                alt="Matcha"
                className="w-20 h-20 object-cover"
              />
              <div className="flex-1 px-3">
                <h3 className="font-bold text-black">Matcha</h3>
                <p className="text-sm text-gray-600">300ml</p>
                <p className="text-black">Rp 10.000</p>
                <p className="text-yellow-500 flex items-center gap-1">
                  <Star size={16} /> 5.0
                </p>
              </div>
              <button className="text-red-500">
                <Plus size={28} />
              </button>
            </div>
          </div>

          <h2 className="font-bold text-black font-serif text-2xl mt-6 mb-3">
            Makanan
          </h2>

          <div className="space-y-4">
            {/* French Fries */}
            <div className="flex items-center bg-white rounded-3xl shadow-md p-3">
              <img
                src={friesImg}
                alt="French Fries"
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div className="flex-1 px-3">
                <h3 className="font-bold text-black">French Fries</h3>
                <p className="text-xs text-gray-600">
                  French fries gurih dengan pilihan saus pedas atau mayonaise.
                </p>
                <p className="text-black">Rp 8.000</p>
                <p className="text-yellow-500 flex items-center gap-1">
                  <Star size={16} /> 4.5
                </p>
              </div>
              <button className="text-red-500">
                <Plus size={28} />
              </button>
            </div>

            {/* Mix Plate */}
            <div className="flex items-center bg-white rounded-3xl shadow-md p-3">
              <img
                src={mixPlateImg}
                alt="Mix Plate"
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div className="flex-1 px-3">
                <h3 className="font-bold text-black">Mix Plate</h3>
                <p className="text-xs text-gray-600">
                  Piring kombo berisi sosis, nugget, kentang goreng
                </p>
                <p className="text-black">Rp 15.000</p>
                <p className="text-yellow-500 flex items-center gap-1">
                  <Star size={16} /> 4.7
                </p>
              </div>
              <button className="text-red-500">
                <Plus size={28} />
              </button>
            </div>
          </div>
        </div>

        {/* Navbar bawah */}
        <Navbar />
        {/* <div className="fixed bottom-0 w-screen h-20 rounded-t-3xl bg-white flex justify-center items-center shadow-lg z-20">
          <ul className="flex gap-10">
            <li>
              <a href="#">
                <House size={32} color="#504B38" strokeWidth={1.5} />
              </a>
            </li>
            <li>
              <a href="#">
                <SquareMenu size={32} color="#504B38" strokeWidth={1.5} />
              </a>
            </li>
            <li>
              <a href="#">
                <ShoppingCart size={32} color="#504B38" strokeWidth={1.5} />
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default Menu;
