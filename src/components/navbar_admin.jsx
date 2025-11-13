import { Link } from "react-router-dom";
import { ClipboardList, Clock, PlusCircle } from "lucide-react";

function NavbarAdmin() {
  return (
    <div className="fixed bottom-0 w-screen h-20 rounded-t-4xl bg-white flex justify-center items-center shadow-custom z-40">
      <ul className="flex gap-10">
        <Link to="/order">
          <li>
            <ClipboardList size={50} color="#504B38" strokeWidth={1.5} />
          </li>
        </Link>
        <Link to="/history">
          <li>
            <Clock size={50} color="#504B38" strokeWidth={1.5} />
          </li>
        </Link>
        <Link to="/admin/crud">
          <li>
            <PlusCircle size={50} color="#504B38" strokeWidth={1.5} />
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default NavbarAdmin;
