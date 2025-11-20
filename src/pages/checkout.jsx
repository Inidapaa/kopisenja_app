import Navbar from "../components/navbar";
import Menu1 from "../assets/matcha1.png";
import Title from "../components/title";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCart, updateQuantity, clearCart } from "../utils/cartStorage";
import { createCashOrder } from "../action/orders";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = getCart();
    setCart(cartData);
  }, []);

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = updateQuantity(productId, newQuantity);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price =
        typeof item.price === "string"
          ? parseInt(item.price.replace(/\D/g, ""))
          : item.price;
      return total + price * item.quantity;
    }, 0);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!customerName.trim() || !selectedTable || !paymentMethod) {
      setErrorMessage("Lengkapi nama, nomor meja, dan metode pembayaran.");
      return;
    }

    if (!cart.length) {
      setErrorMessage("Keranjang Anda masih kosong.");
      return;
    }

    if (paymentMethod === "qris") {
      navigate("/qrisPayment", {
        state: {
          customerName,
          meja: selectedTable,
          total: calculateTotal(),
        },
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const payload = {
        customer_name: customerName.trim(),
        meja_nomor: selectedTable.trim(),
        payment_method: paymentMethod,
        items: cart.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
          price:
            typeof item.price === "string"
              ? parseInt(item.price.replace(/\D/g, ""))
              : item.price,
        })),
      };

      const order = await createCashOrder(payload);
      clearCart();
      setCart([]);
      navigate(`/waiting/${order.id}`, { state: { orderId: order.id } });
    } catch (error) {
      setErrorMessage(error?.message || "Gagal memproses pesanan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <Title />
      <div className="h-auto w-screen flex justify-center items-center">
        <div className="md:flex flex-wrap justify-center max-w-[80vw] my-10 gap-x-10">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-white mb-10 h-25 w-80 border-2 rounded-3xl flex place-content-between items-center"
              >
                <img
                  className="h-23 w-23 ml-2"
                  src={item.image || Menu1}
                  alt={item.name}
                />
                <div className="flex flex-col">
                  <h3 className="font-bold">{item.name}</h3>
                  <p>{item.size || "300ml"}</p>
                  <p className="font-bold text-[0.9rem]">
                    {typeof item.price === "string"
                      ? item.price
                      : `Rp ${item.price.toLocaleString("id-ID")}`}
                  </p>
                </div>
                <div className="flex h-20 w-7 mr-2 rounded-3xl flex-col bg-secondary justify-center items-center text-white">
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <p className="text-[0.8rem]">{item.quantity}</p>
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-10">
              Keranjang Anda kosong
            </p>
          )}
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
                <p className="text-center text-2xl">
                  {formatCurrency(calculateTotal())}
                </p>
                <span className="flex flex-col items-end text-gray-400">
                  {cart.slice(0, 2).map((item) => (
                    <p key={item.id} className="text-[14px]">
                      {typeof item.price === "string"
                        ? item.price.replace("Rp ", "")
                        : item.price.toLocaleString("id-ID")}{" "}
                      x {item.quantity}
                    </p>
                  ))}
                </span>
              </div>
            </div>
            <form
              className="bg-white flex flex-col shadow-custom rounded-3xl justify-center items-center h-39 p-5"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-3 mb-2">
                <input
                  type="text"
                  className="rounded-2xl bg-gray-100 px-4"
                  placeholder="Nama Pemesan"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
                <select
                  className="rounded-2xl bg-gray-100 px-4 text-sm py-1 md:w-250"
                  value={selectedTable}
                  onChange={(e) => setSelectedTable(e.target.value)}
                >
                  <option value="">Pilih Nomor Meja</option>
                  <option value="1">Meja 1</option>
                  <option value="2">Meja 2</option>
                  <option value="3">Meja 3</option>
                  <option value="4">Meja 4</option>
                  <option value="5">Meja 5</option>
                </select>
                <select
                  name="payment"
                  className="rounded-2xl bg-gray-100 px-4 text-sm py-1 md:w-250"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="">Pilih Metode Pembayaran</option>
                  <option value="tunai">Tunai</option>
                  <option value="qris">QRIS</option>
                </select>
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm mb-2 text-center">
                  {errorMessage}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-300 w-50 h-5  md:w-100  md:h-10 hover:bg-green-600 transition flex items-center justify-center rounded-3xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Memproses..." : "Bayar Sekarang"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
