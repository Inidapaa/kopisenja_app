import bgImage from "../assets/Background.jpg";
import { CircleUserRound, CheckCircle2 } from "lucide-react";
import logo from "../assets/matcha1.png";

const Pesanan = () => {
  // State untuk daftar pesanan (sementara kosong, bisa isi dummy kalau mau preview

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
        Daftar Pesanan
      </h2>

      {/* Content area */}
    </div>
  );
};

export default Pesanan;
