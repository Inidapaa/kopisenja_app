import { Link, useNavigate } from "react-router-dom";
import { CircleUserRound, ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { loginUser } from "../action/auth";
import bgImage from "../assets/Background.jpg";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await loginUser(form.email, form.password);
      setLoading(false);
      navigate("/order"); // Order Page admin
    } catch (err) {
      setLoading(false);
      setError(err.message || "Gagal login");
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center w-screen h-screen relative bg-cover bg-center px-4 sm:px-6" style={{ backgroundImage: `url(${bgImage})` }}>
      <Link to="/" className="absolute top-4 left-4 p-2 md:top-6 md:left-6">
        <ArrowLeft className="w-10 h-10 md:w-8 md:h-8 text-[#3d392c]" />
      </Link>
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-2xl shadow-lg p-6 md:p-8 relative flex flex-col items-center">
        <div className="absolute -top-20 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center">
          <CircleUserRound className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#504B38]" />
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium font-Poppins text-gray-800 mt-8 mb-8 text-center">
          Masuk
        </h2>
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 sm:py-3 md:py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none text-sm sm:text-base md:text-lg"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 sm:py-3 md:py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none text-sm sm:text-base md:text-lg"
            required
          />
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 sm:py-3 md:py-4 bg-[#504B38] hover:bg-[#3d392c] text-white font-medium rounded-full shadow-md transition duration-200 text-sm sm:text-base md:text-lg disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Masuk..." : "Login"}
          </button>
        </form>
      </div>
      <div>
        <Link to="/register" className="underline">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
