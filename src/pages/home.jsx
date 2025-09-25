import {Clock, MapPin, Star} from 'lucide-react'
import matcha1 from '../assets/matcha1.png'
import Profile from '../components/profile.jsx'
import Navbar from '../components/navbar.jsx'


function Menu () {
  return (
    <>
    <Navbar/>
    <Profile/>
    <div className="h-screen mb-10 bg-[url('../assets/Background.jpg')] bg-cover bg-center">
      <div className="flex flex-col text-[#504B38]">
        <h1 className="font-bold text-5xl text-center mt-5">Halo, Senja's!</h1>
        <p className="text-[20px] m-5 font-bold">Di tiap tetes kopi ada cerita, di tiap senja ada makna. Kopi Senja hadir untuk kamu yang ingin singgah, agar hari tak sekadar lewat tanpa rasa.</p>
      </div>
      {/* ------------ABOUT SECTION------------- */}
      <div className="justify-center items-center mx-10 font-bold text-[#504B38]">
        <ul className="flex place-content-around">
          <li className="flex gap-4"><Clock className="w-10 h-10" /> 15.00-22.00</li>
          <li className="flex gap-2"><MapPin className="w-13 h-10" />Jl. Ikan tombro, Mojolangu</li>
          <li className="flex gap-2"><Clock className="w-10 h-10" /> 15.00-22.00</li>
        </ul>
      </div>
      {/* -----------CARD SECTION---------- */}
      <div className="flex flex-col mx-5 my-10">
        <h3 className="font-bold text-2xl text-[#504B38]">Menu Favorit</h3>
        <div className="grid grid-cols-3 mx-5 gap-5 place-content-around mt-2">
          <div className="bg-white h-35 w-25 px-3 rounded-3xl shadow-custom hover:shadow-2xl transition">
            <img className=" h-20 w-20" src={matcha1} alt="" />
            <h4 className="text-[10px] font-bold text-[#504B38]">Matcha</h4>
            <p className="text-[10px] text-[#504B38]">Rp15.000</p>
            <span> <Star color="#fbff00"/></span>
          </div>
          <div className="bg-white h-35 w-25 px-3 rounded-3xl shadow-custom hover:shadow-2xl transition">
            <img className=" h-20 w-20" src={matcha1} alt="" />
            <h4 className="text-[10px] font-bold text-[#504B38]">Matcha</h4>
            <p className="text-[10px] text-[#504B38]">Rp15.000</p>
            <span> <Star color="#fbff00"/></span>
          </div>
          <div className="bg-white h-35 w-25 px-3 rounded-3xl shadow-custom transition">
            <img className=" h-20 w-20" src={matcha1} alt="" />
            <h4 className="text-[10px] font-bold text-[#504B38]">Matcha</h4>
            <p className="text-[10px] text-[#504B38]">Rp15.000</p>
            <span> <Star color="#fbff00"/></span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-third h-10 w-30 rounded-2xl text-white hover:shadow-md transition">Lihat Menu</button>
      </div>
    </div>
    </>
  )
}

export default Menu