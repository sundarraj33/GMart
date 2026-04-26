import { useState } from "react";
import { BsList } from "react-icons/bs";

const Navbar = () => {
  const [show_menu, set_show_menu] = useState(false);

  return (
    <header className="w-full bg-green-50 relative z-50">
      <nav className="flex justify-between items-center p-2">
        
        {/* Logo */}
        <div>
          <p className="text-2xl font-bold">
            G<span className="text-orange-500">M</span>art
          </p>
        </div>

        {/* Menu */}
        <ul
          className={`
            ${show_menu ? "flex" : "hidden"}
            flex-col absolute top-16 left-0 w-full bg-green-50
            justify-center items-center py-8
            sm:static sm:flex sm:flex-row
            gap-5
          `}
        >
          <li className="text-orange-400 cursor-pointer text-xl font-medium">Home</li>
          <li className="hover:text-orange-400 cursor-pointer text-xl font-medium">About</li>
          <li className="hover:text-orange-400 cursor-pointer text-xl font-medium">Service</li>
          <li className="hover:text-orange-400 cursor-pointer text-xl font-medium">Contact</li>

          <li className="sm:hidden mt-4">
            <button className="bg-green-400 p-2 rounded text-white hover:bg-green-500">
              Login
            </button>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden sm:flex">
          <button className="bg-green-400 p-2 px-4 rounded text-white hover:bg-green-500">
            Login
          </button>
        </div>

        {/* Mobile Icon */}
        <div className="sm:hidden">
          <BsList
            onClick={() => set_show_menu(!show_menu)}
            className="w-10 h-10 text-orange-400 cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;