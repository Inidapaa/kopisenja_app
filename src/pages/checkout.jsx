import Navbar from "../components/navbar"
import Title from "../components/title"

const Checkout = () => {
  return (
    <>
    <Navbar/>
    <Title/>
    {/* ==========Daftar Pesanan========== */}
    <div className="h-auto flex flex-col my-5 gap-5 items-center">
      <div className="bg-white h-25 w-80 border-2 rounded-3xl flex place-content-between items-center">
        <img src="" alt="" />
        <div className="flex flex-col">
          <h3 className="font-bold">Cappucino</h3>
          <p>300ml</p>
          <p className="font-bold text-[0.9rem]">Rp 10.000</p>
        </div>
        <div className="flex h-20 w-7 mr-2 rounded-3xl flex-col bg-secondary justify-center items-center text-white">
          <button type="">+</button>
          <p className="text-[0.8rem]">2</p>
          <button type="">-</button>
        </div>
      </div>
      <div className="bg-white h-25 w-80 border-2 rounded-3xl flex place-content-between items-center">
        <img src="" alt="" />
        <div className="flex flex-col">
          <h3 className="font-bold">Cappucino</h3>
          <p>300ml</p>
          <p className="font-bold text-[0.9rem]">Rp 10.000</p>
        </div>
        <div className="flex h-20 w-7 mr-2 rounded-3xl flex-col bg-secondary justify-center items-center text-white">
          <button type="">+</button>
          <p className="text-[0.8rem]">2</p>
          <button type="">-</button>
        </div>
      </div>
    </div>
    {/* ========Ringkasan Pembayaran========== */}
    <h1 className="ml-7 text-2xl font-bold">Ringkasan Pembayaran</h1>
    <div className="h-80 flex flex-col my-5 gap-5 items-center">
      <div className="bg-white h-25 w-80 shadow-custom rounded-3xl flex place-content-between p-5">
        <h1>Total Pembayaran</h1>
        <div className="flex flex-col">
          <p className="text-center">36.000</p>
          <span className="flex flex-col items-end text-gray-400">
          <p className="text-[10px]">10.000 x 2</p>
          <p className="text-[10px]">8.00 x 2</p>
          </span>
        </div>
      </div>
      <div className="bg-white h-25 w-80 shadow-custom rounded-3xl flex place-content-between p-5">
        <h1>Total Pembayaran</h1>
        <div className="flex flex-col">
          <p className="text-center">36.000</p>
          <span className="flex flex-col items-end text-gray-400">
          <p className="text-[10px]">10.000 x 2</p>
          <p className="text-[10px]">8.00 x 2</p>
          </span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Checkout