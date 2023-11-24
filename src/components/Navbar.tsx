import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { PiUserCircleFill } from "react-icons/pi";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="bg-transparent absolute top-0 left-0 z-10 w-full flex justify-between items-center md:px-10 py-4 border-b px-8">
      <Logo />
      <NavLinks />
      <div className="text-white text-2xl flex gap-2 items-center">
        <Link to="/search">
          <IoSearch />
        </Link>
        <button>
          <PiUserCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
