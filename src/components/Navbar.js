import React from "react";
import { IoIosSunny, IoIosContact } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="absolute top-[48px] w-[1102px] h-[54px] flex justify-between">
      <div className="flex justify-center items-center space-x-[18.12px]">
        <img className="h-[40.49px] w-[40.88px]" src="/logo.png" alt="" />
        <h2 className="font-[poppins] font-bold text-4xl text-[#404040]">
          P2000.NET
        </h2>
      </div>
      <div className="flex justify-center items-center space-x-[48px]">
        <div className="font-[poppins] font-semibold text-xl text-[#404040] hover:text-[#FB4A3F]">
          Meldingen
        </div>
        <div className="font-[poppins] font-semibold text-xl text-[#404040] hover:text-[#FB4A3F]">
          Nieuws
        </div>
        <div className="font-[poppins] font-semibold text-xl text-[#404040] hover:text-[#FB4A3F]">
          Contact
        </div>
        <div className="flex space-x-[14px]">
          <div>
            <IoIosContact className="text-[#404040] h-6 w-6 mt-" />
          </div>
          <div className="font-[poppins] font-semibold text-xl text-[#404040] hover:text-[#FB4A3F]">
            Account
          </div>
        </div>
        <div>
            <button className="px-8 py-2 bg-[#FB4A3F] text-white rounded-md border border-[#FB4A3F] hover:bg-white hover:text-black hover:border-[#FB4A3F] transition-all duration-500">Dark Mode</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
