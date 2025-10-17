import { Link } from "react-router-dom";
import { CircleUserRound, ArrowLeft } from "lucide-react";

const Register = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen relative bg-[url('../assets/Background.jpg')] bg-cover bg-center px-4 sm:px-6">
      <Link
        to="/login"
        className="absolute top-4 left-4 p-2 md:top-6 md:left-6"
      >
        <ArrowLeft className="w-10 h-10 md:w-8 md:h-8 text-[#3d392c]" />
      </Link>

      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-2xl shadow-lg p-6 md:p-8 relative flex flex-col items-center">
        <div className="absolute -top-20 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center">
          <CircleUserRound className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#504B38]" />
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl font-medium font-Poppins text-gray-800 mt-8 mb-8 text-center">
          Daftar sebagai admin
        </h2>

        <form className="w-full space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 sm:py-3 md:py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none text-sm sm:text-base md:text-lg"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 sm:py-3 md:py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none text-sm sm:text-base md:text-lg"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 sm:py-3 md:py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none text-sm sm:text-base md:text-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 sm:py-3 md:py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none text-sm sm:text-base md:text-lg"
          />
          <button
            type="submit"
            className="w-full py-2 sm:py-3 md:py-4 bg-[#504B38] hover:bg-[#3d392c] text-white font-medium rounded-full shadow-md transition duration-200 text-sm sm:text-base md:text-lg"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
