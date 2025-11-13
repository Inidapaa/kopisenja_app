import AdminHeader from "../../components/admin_header.jsx";
import NavbarAdmin from "../../components/navbar_admin.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Pesanan = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/api/me", { withCredentials: true })
      .then(res => {
        if (!res.data || !res.data.status) navigate("/login");
      })
      .catch(() => navigate("/login"));
  }, [navigate]);

  return (
    <div className="min-h-screen w-screen bg-white">
      <AdminHeader />
      {/* Judul */}
      <h2 className="mt-5 text-center font-serif font-bold text-3xl text-[#504B38] z-20">
        Daftar Pesanan
      </h2>
      {/* Content area */}
      <NavbarAdmin />
    </div>
  );
};

export default Pesanan;
