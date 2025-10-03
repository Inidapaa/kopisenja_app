import { Link } from "react-router-dom";
import { House, SquareMenu, ShoppingCart } from "lucide-react";

function Navbar() {
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
          <li>
            {" "}
            <ShoppingCart size={50} color="#504B38" strokeWidth={1.5} />
            {/* <span className="absolute top-3 right-18 w-6 h-6 rounded-full bg-primary text-center text-black">
              4
            </span> */}
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
