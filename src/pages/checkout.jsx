import Navbar from "../components/navbar";
import Menu1 from "../assets/matcha1.png";
import Title from "../components/title";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <Title />
      {/* ==========Daftar Pesanan========== */}
      <div className="h-auto w-screen flex justify-center items-center">
        <div className="md:flex flex-wrap justify-center max-w-[80vw] my-10 gap-x-10">
          <div className="bg-white mb-10 h-25 w-80 border-2 rounded-3xl flex place-content-between items-center">
            <img className="h-23 w-23 ml-2" src={Menu1} alt="" />
            <div className="flex flex-col">
              <h3 className="font-bold">Cappucino</h3>
              <p>300ml</p>
              <p className="font-bold text-[0.9rem]">Rp 10.000</p>
            </div>
            <div className="flex h-20 w-7 mr-2 rounded-3xl flex-col bg-secondary justify-center items-center text-white">
              <button type="" className="cursor-pointer">
                +
              </button>
              <p className="text-[0.8rem]">2</p>
              <button type="" className="cursor-pointer">
                -
              </button>
            </div>
          </div>
          <div className="bg-white mb-10 h-25 w-80 border-2 rounded-3xl flex place-content-between items-center">
            <img className="h-23 w-23 ml-2" src={Menu1} alt="" />
            <div className="flex flex-col">
              <h3 className="font-bold">Cappucino</h3>
              <p>300ml</p>
              <p className="font-bold text-[0.9rem]">Rp 10.000</p>
            </div>
            <div className="flex h-20 w-7 mr-2 rounded-3xl flex-col bg-secondary justify-center items-center text-white">
              <button type="" className="cursor-pointer">
                +
              </button>
              <p className="text-[0.8rem]">2</p>
              <button type="" className="cursor-pointer">
                -
              </button>
            </div>
          </div>
          <div className="bg-white mb-10 h-25 w-80 border-2 rounded-3xl flex place-content-between items-center">
            <img className="h-23 w-23 ml-2" src={Menu1} alt="" />
            <div className="flex flex-col">
              <h3 className="font-bold">Cappucino</h3>
              <p>300ml</p>
              <p className="font-bold text-[0.9rem]">Rp 10.000</p>
            </div>
            <div className="flex h-20 w-7 mr-2 rounded-3xl flex-col bg-secondary justify-center items-center text-white">
              <button type="" className="cursor-pointer">
                +
              </button>
              <p className="text-[0.8rem]">2</p>
              <button type="" className="cursor-pointer">
                -
              </button>
            </div>
          </div>
          <div className="bg-white mb-10 h-25 w-80 border-2 rounded-3xl flex place-content-between items-center">
            <img className="h-23 w-23 ml-2" src={Menu1} alt="" />
            <div className="flex flex-col">
              <h3 className="font-bold">Cappucino</h3>
              <p>300ml</p>
              <p className="font-bold text-[0.9rem]">Rp 10.000</p>
            </div>
            <div className="flex h-20 w-7 mr-2 rounded-3xl flex-col bg-secondary justify-center items-center text-white">
              <button type="" className="cursor-pointer">
                +
              </button>
              <p className="text-[0.8rem]">2</p>
              <button type="" className="cursor-pointer">
                -
              </button>
            </div>
          </div>
          <div className="bg-white mb-10 h-25 w-80 border-2 rounded-3xl flex place-content-between items-center">
            <img className="h-23 w-23 ml-2" src={Menu1} alt="" />
            <div className="flex flex-col">
              <h3 className="font-bold">Cappucino</h3>
              <p>300ml</p>
              <p className="font-bold text-[0.9rem]">Rp 10.000</p>
            </div>
            <div className="flex h-20 w-7 mr-2 rounded-3xl flex-col bg-secondary justify-center items-center text-white">
              <button type="" className="cursor-pointer">
                +
              </button>
              <p className="text-[0.8rem]">2</p>
              <button type="" className="cursor-pointer">
                -
              </button>
            </div>
          </div>
          <div className="bg-white mb-10 h-25 w-80 border-2 rounded-3xl flex place-content-between items-center">
            <img className="h-23 w-23 ml-2" src={Menu1} alt="" />
            <div className="flex flex-col">
              <h3 className="font-bold">Cappucino</h3>
              <p>300ml</p>
              <p className="font-bold text-[0.9rem]">Rp 10.000</p>
            </div>
            <div className="flex h-20 w-7 mr-2 rounded-3xl flex-col bg-secondary justify-center items-center text-white">
              <button type="" className="cursor-pointer">
                +
              </button>
              <p className="text-[0.8rem]">2</p>
              <button type="" className="cursor-pointer">
                -
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========Ringkasan Pembayaran========== */}
      <h1 className="ml-7 md:text-3xl text-2xl font-bold md:text-center text-start">
        Ringkasan Pembayaran
      </h1>
      <div className="h-100 w-screen my-10 px-9 md:px-10">
        <div className=" mx-auto flex justify-center items-center h-auto pb-10">
          <div className="grid gap-10 w-5xl">
            <div className="bg-white shadow-custom rounded-3xl flex justify-between items-center h-30 p-5">
              <h1 className="text-2xl">Total Pembayaran</h1>
              <div className="flex flex-col">
                <p className="text-center text-2xl">36.000</p>
                <span className="flex flex-col items-end text-gray-400">
                  <p className="text-[14px]">10.000 x 2</p>
                  <p className="text-[12px]">8.00 x 2</p>
                </span>
              </div>
            </div>
            <form className="bg-white flex flex-col shadow-custom rounded-3xl justify-center items-center h-39 p-5">
              <div className="flex flex-col gap-3 mb-2">
                <input
                  type="text"
                  className="  rounded-2xl bg-gray-100 px-4"
                  placeholder="Nama Pemesan"
                />
                <input
                  type="text"
                  className=" rounded-2xl bg-gray-100 px-4"
                  placeholder="Nomor Meja"
                />
                <select
                  name="payment"
                  id=""
                  className="rounded-2xl bg-gray-100 px-4 text-sm py-1 md:w-250"
                >
                  <option value="">Pilih Metode Pembayaran</option>
                  <option value="tunai">Tunai</option>
                  <option value="qris">QRIS</option>
                </select>
              </div>
              <Link
                to="/qrisPayment"
                className="bg-green-300 w-50 h-5  md:w-100  md:h-10 hover:bg-green-600 transition flex items-center justify-center rounded-3xl "
              >
                Bayar Sekarang
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
