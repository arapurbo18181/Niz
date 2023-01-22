import React from "react";
import { SlCalender } from "react-icons/sl";
import { MdLocationOn } from "react-icons/md";
import { FaShuttleVan } from "react-icons/fa";
import Sidebar from "./Sidebar";



const Main = () => {

  

  return (
    <div className="w-[100vw] flex flex-col justify-center items-center">
      <div className="absolute w-[1100px] h-[72px] top-[234px] bg-[#FFFFFF] flex justify-between shadow-md rounded">
        <div className="ml-[32px] my-[16px] flex justify-center items-center">
          Zoek op plaatsnaam
        </div>
        <div className="mr-[32px] my-[16px] flex justify-center items-center underline text-[#FB4A3F]">
          Mijn locatie
        </div>
      </div>
      <div className="w-[1100px] h-[72px] mt-24 flex justify-center items-center">
        <div className="w-[259px] h-[72px] rounded border flex justify-center items-center border-[#FC2B4D] font-[poppins] font-semibold text-[16px] shadow mr-[16px]">
          <div className="text-[#FC2B4D] text-2xl mr-[16px]"><SlCalender/></div>
          <div>Selecteer datum</div>
        </div>
        <div className="w-[259px] h-[72px] rounded border flex justify-center items-center border-[#FC2B4D] font-[poppins] font-semibold text-[16px] shadow mr-[16px]">
          <div className="text-[#FC2B4D] text-2xl mr-[16px]"><MdLocationOn/></div>
          <div>Selecteer provincie</div>
        </div>
        <div className="w-[259px] h-[72px] rounded border flex justify-center items-center border-[#FC2B4D] font-[poppins] font-semibold text-[16px] shadow mr-[32px]">
          <div className="text-[#FC2B4D] text-2xl mr-[16px]"><FaShuttleVan/></div>
          <div>Selecteer hulpdienst</div>
        </div>
        <div className="w-[259px] h-[72px] rounded border flex justify-center items-center border-[#FC2B4D] font-[poppins] font-semibold text-[16px] shadow bg-[#FC2B4D] text-white">Bekijk meldingen (10.000)</div>
      </div>
      <Sidebar/>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button >click</button>
    </div>
  );
};

export default Main;
