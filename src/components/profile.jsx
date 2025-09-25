function Profile() {
    return (
        <div className=" w-screen flex items-center place-content-around gap-5 bg-secondary h-40">
          <div className="logo flex justify-center rounded-full h-22 w-22 bg-third items-center">
            <p className="text-2xl font-bold">Logo</p>
          </div>
          <div action="" className=" rounded-2xl w-40 flex justify-center items-center h-10 bg-third hover:!bg-[#615b42] transition-colors">
            <a href='#' className="text-[20px] text-white">Login Admin</a>
          </div>
        </div>
    )
}

export default Profile

