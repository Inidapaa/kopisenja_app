import { Link } from "react-router-dom";
import bgImage from "../assets/Background.jpg"; //gambar untuk bg
import fotoqr from "../assets/qris.jpg"; //gambar untuk isi konten
import { ArrowLeft } from "lucide-react";

const Qris = () => {
  return (
    <>
      <div
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center relative" //full satu layar, tengah, relative agar elemen lain bisa diposisikan absolute
        style={{ backgroundImage: `url(${bgImage})` }} //memasang gambar sebagai bg
      >
        <Link
          to="/checkout"
          // onClick={handleBack} //memberi aksi ketika di klik
          className="absolute top-4 left-4 p-2 z-20 " //tombol diujung kiri, bg putih, bayangan, tombol muncul diatas ov,
        >
          {/* icon panah kiri, warnanya abu-abu tua. */}
          <ArrowLeft size={24} className="text-gray-800" />
        </Link>

        {/* Konten */}
        <div className="bg-white shadow-lg rounded-4xl p-6 w-80 relative z-20">
          <img
            src={fotoqr}
            alt="Cappuccino"
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>
      </div>
    </>
  );
};

export default Qris;
