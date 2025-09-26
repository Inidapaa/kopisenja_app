import Navbar from "../components/navbar"
import Title from "../components/title"

const Checkout = () => {
  return (
    <>
    <Navbar/>
    <Title/>
    {/* ==========Daftar Pesanan========== */}
    <div className="h-auto w-screen flex justify-center items-center">
      <div className="grid md:grid-cols-3 my-10 gap-10">
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
    </div>
    
    {/* ========Ringkasan Pembayaran========== */}
    <h1 className="ml-7 md:text-3xl text-2xl font-bold md:text-center text-start">Ringkasan Pembayaran</h1>
    <div className="h-80 w-full my-10 px-9 md:px-10">
      <div className=" mx-auto flex justify-center items-center h-auto pb-10">
        <div className="grid md:grid-cols-2 gap-10 w-5xl">
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
        </div>
      </div>
    </div>
    </>
  )
}

export default Checkout