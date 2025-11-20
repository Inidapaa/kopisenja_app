import { Link } from "react-router-dom";
import { House, SquareMenu, ShoppingCart } from "lucide-react";
import { useCartCount } from "../hooks/useCartCount";

function Navbar() {
  const { cartCount } = useCartCount();

  return (
    <div className="fixed bottom-0 w-screen h-20 rounded-t-4xl bg-white flex justify-center items-center shadow-custom">
      <ul className="flex gap-10">
        <Link to="/">
          <li>
            {" "}
            <House size={50} color="#504B38" strokeWidth={1.5} />
          </li>
        </Link>
        <Link to="/menu">
          <li>
            {" "}
            <SquareMenu size={50} color="#504B38" strokeWidth={1.5} />
          </li>
        </Link>
        <Link to="/checkout">
          <li className="relative">
            <ShoppingCart size={50} color="#504B38" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
