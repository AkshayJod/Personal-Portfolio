import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { FaBolt } from "react-icons/fa";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="flex justify-between items-center px-6 py-4 md:px-16 md:py-6 text-white shadow-md fixed top-0 left-0 w-full z-50 transition-all ease-in-out duration-300">
      <div className="flex items-center gap-3">
        <FaBolt className="w-10 h-10 text-yellow-400 animate-pulse" />
        <span className="text-xl md:text-2xl font-bold tracking-wide text-gray-100">
          Portfolio
        </span>
      </div>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } md:flex gap-6 font-semibold md:font-medium md:bg-transparent p-4 rounded-xl md:static text-center text-lg md:text-white md:p-0 transition-all ease-in-out duration-300`}
      >
        <a href="#About">
          <li className="text-white py-2 px-4 rounded-md hover:bg-gray-700 hover:scale-105 transition-all duration-200">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="text-white py-2 px-4 rounded-md hover:bg-gray-700 hover:scale-105 transition-all duration-200">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="text-white py-2 px-4 rounded-md hover:bg-gray-700 hover:scale-105 transition-all duration-200">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-white py-2 px-4 rounded-md hover:bg-gray-700 hover:scale-105 transition-all duration-200">
            Contact
          </li>
        </a>
      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-6 top-6 cursor-pointer text-white transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-6 top-6 cursor-pointer text-white transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
