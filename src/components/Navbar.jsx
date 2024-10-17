export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center h-[72px] w-[1280px] mx-auto">
        <div className="flex items-center">
          <img
            className="w-[91px] h-[51px] mt-[10px]"
            src="/brand_logo.png"
            alt=""
          />
        </div>
        <ul className="flex w-[333px] h-[24] justify-between cursor-pointer font-poppins font-medium">
          <li>Home</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="bg-btn-red h-[40px] w-[75px] rounded text-white cursor-pointer">
          Login
        </button>
      </nav>
    </>
  );
};
