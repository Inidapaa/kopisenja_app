import bgImage from "../assets/Background.jpg";
import logo from "../assets/logo.jpeg";
import { CircleUserRound } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminHeader() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/api/logout", {}, { withCredentials: true });
    } catch (err) {
      console.error("Logout failed:", err);
    }
    localStorage.clear();
    sessionStorage.clear();
    window.location.replace("/login");
    console.log("Logout successful");
  };

  const gotoHome = () => {
    navigate("/");
  };

  return (
    <div
      className="h-22 w-screen bg-cover bg-top relative mb-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-1 right-4 w-20 h-20 rounded-full flex items-center justify-center shadow z-20">
        <button onClick={() => setOpen((v) => !v)} className="focus:outline-none">
          <CircleUserRound size={60} color="#333" />
        </button>
        {open && (
          <div className="absolute top-16 right-0 bg-white rounded-xl shadow-xl py-2 min-w-[180px] border z-50 animate-fadeIn">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-5 py-2 text-black hover:bg-gray-200"
            >
              Logout
            </button>
            <button
              onClick={gotoHome}
              className="block w-full text-left px-5 py-2 text-black hover:bg-gray-200"
            >
              Kembali ke Home
            </button>
          </div>
        )}
      </div>
      <div className="absolute top-3 left-4 w-15 h-15 rounded-full flex items-center justify-center bg-third overflow-hidden z-20 shadow-md">
        <img 
          src={logo} 
          alt="Logo Kopi Senja" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
}
