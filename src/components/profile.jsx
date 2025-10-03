import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className=" w-screen flex items-center md:place-content-between md:px-20 place-content-around bg-secondary h-40 md:h-30">
      <div className="logo flex justify-center rounded-full h-22 w-22 bg-third items-center">
        <p className="text-2xl font-bold">Logo</p>
        <img src="" alt="" />
      </div>
      <h1 className="hidden md:block md:text-center md:text-[#2e2b21] md:font-bold md:text-5xl md:pl-15">
        Kopi Senja
      </h1>
      <div
        action=""
        className=" rounded-2xl w-40 flex justify-center items-center h-10 bg-third hover:!bg-[#615b42] transition-colors"
      >
        <Link to="/login" className="text-[20px] text-white">
          Login Admin
        </Link>
      </div>
    </div>
  );
}

export default Profile;
