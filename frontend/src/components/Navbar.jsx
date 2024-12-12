import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-auto px-4 md:px-8 lg:px-16 py-4 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Company Logo"
            className="w-[100px] md:w-[120px] h-auto"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="text-[#0149ad] text-sm md:text-lg font-medium font-poppins text-left pl-4">
            Home
          </div>
          <div className="text-[#0149ad] text-sm md:text-lg font-medium font-poppins text-left pl-4">
            About Us
          </div>
          <div className="text-[#0149ad] text-sm md:text-lg font-medium font-poppins text-left pl-4">
            Services
          </div>
          <div className="text-[#0149ad] text-sm md:text-lg font-medium font-poppins text-left pl-4">
            Projects
          </div>
          <div className="w-[120px] md:w-[140px] h-[40px] flex items-center justify-center bg-[#0149ad] rounded-[20px]">
            <span className="text-white text-xs md:text-sm font-extrabold font-raleway">
              GET IN TOUCH
            </span>
          </div>
        </div>

       
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#0149ad] text-2xl font-bold"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="mt-4 flex flex-col items-start gap-4 md:hidden">
          <div className="text-[#0149ad] text-sm font-medium font-poppins text-left pl-4">
            Home
          </div>
          <div className="text-[#0149ad] text-sm font-medium font-poppins text-left pl-4">
            About Us
          </div>
          <div className="text-[#0149ad] text-sm font-medium font-poppins text-left pl-4">
            Services
          </div>
          <div className="text-[#0149ad] text-sm font-medium font-poppins text-left pl-4">
            Projects
          </div>
          <div className="w-[120px] h-[40px] flex items-center justify-center bg-[#0149ad] rounded-[20px] ml-4">
            <span className="text-white text-xs font-extrabold font-raleway">
              GET IN TOUCH
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;