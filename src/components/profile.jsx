import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
// import axios from "axios";

function Profile() {
  const navigate = useNavigate();

  const handleAdminClick = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/me", {
        method: "GET",
        credentials: "include"
      });
      if (!res.ok) {
        navigate("/login", { replace: true });
        return;
      }
      const data = await res.json();
      if (data && data.status) {
        navigate("/order", { replace: true });
      } else {
        navigate("/login", { replace: true });
      }
    } catch {
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="w-screen flex items-center md:place-content-between md:px-20 place-content-around bg-secondary h-40 md:h-30">
      <div className="logo flex justify-center rounded-full h-22 w-22 bg-third items-center overflow-hidden">
        <img 
          src={logo} 
          alt="Logo Kopi Senja" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h1 className="hidden md:block md:text-center md:text-[#2e2b21] md:font-bold md:text-5xl md:pl-15">
        Kopi Senja
      </h1>
      <div
        className="rounded-2xl w-40 flex justify-center items-center h-10 bg-third hover:!bg-[#615b42] transition-colors"
      >
        <button
          onClick={handleAdminClick}
          className="text-[20px] text-white w-full h-full"
        >
          Login Admin
        </button>
      </div>
    </div>
  );
}

export default Profile;
