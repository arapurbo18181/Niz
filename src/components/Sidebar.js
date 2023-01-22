import { data } from "autoprefixer";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  const arr = [
    {
      id: 1,
      title: "Brandweer met gepaste spoed",
      img: "/image.png",
      btn1: "Brandweer",
      btn2: "Gepaste spoed",
      time: "16:40",
      data1: "Hoekenrode in Amsterdam Zuidoost",
      data2: "Noord-Holland",
    },
    {
      id: 2,
      title: "Brandweer met gepaste spoed",
      img: "/image.png",
      btn1: "Brandweer",
      btn2: "Gepaste spoed",
      time: "16:40",
      data1: "Hoekenrode in Amsterdam Zuidoost",
      data2: "Noord-Holland",
    },
    {
      id: 3,
      title: "Brandweer met gepaste spoed",
      img: "/image.png",
      btn1: "Brandweer",
      btn2: "Gepaste spoed",
      time: "16:40",
      data1: "Hoekenrode in Amsterdam Zuidoost",
      data2: "Noord-Holland",
    },
    {
      id: 4,
      title: "Brandweer met gepaste spoed",
      img: "/image.png",
      btn1: "Brandweer",
      btn2: "Gepaste spoed",
      time: "16:40",
      data1: "Hoekenrode in Amsterdam Zuidoost",
      data2: "Noord-Holland",
    },
    {
      id: 5,
      title: "Brandweer met gepaste spoed",
      img: "/image.png",
      btn1: "Brandweer",
      btn2: "Gepaste spoed",
      time: "16:40",
      data1: "Hoekenrode in Amsterdam Zuidoost",
      data2: "Noord-Holland",
    },
    {
      id: 6,
      title: "Brandweer met gepaste spoed",
      img: "/image.png",
      btn1: "Brandweer",
      btn2: "Gepaste spoed",
      time: "16:40",
      data1: "Hoekenrode in Amsterdam Zuidoost",
      data2: "Noord-Holland",
    },
    {
      id: 7,
      title: "Brandweer met gepaste spoed",
      img: "/image.png",
      btn1: "Brandweer",
      btn2: "Gepaste spoed",
      time: "16:40",
      data1: "Hoekenrode in Amsterdam Zuidoost",
      data2: "Noord-Holland",
    },
    {
      id: 8,
      title: "Brandweer met gepaste spoed",
      img: "/image.png",
      btn1: "Brandweer",
      btn2: "Gepaste spoed",
      time: "16:40",
      data1: "Hoekenrode in Amsterdam Zuidoost",
      data2: "Noord-Holland",
    },
    {
      id: 9,
      title: "Brandweer met gepaste spoed",
      img: "/image.png",
      btn1: "Brandweer",
      btn2: "Gepaste spoed",
      time: "16:40",
      data1: "Hoekenrode in Amsterdam Zuidoost",
      data2: "Noord-Holland",
    },
    {
      id: 10,
      title: "Brandweer met gepaste spoed",
      img: "/image.png",
      btn1: "Brandweer",
      btn2: "Gepaste spoed",
      time: "16:40",
      data1: "Hoekenrode in Amsterdam Zuidoost",
      data2: "Noord-Holland",
    },
    {
      id: 11,
      title: "Brandweer met gepaste spoed",
      img: "/image.png",
      btn1: "Brandweer",
      btn2: "Gepaste spoed",
      time: "16:40",
      data1: "Hoekenrode in Amsterdam Zuidoost",
      data2: "Noord-Holland",
    },
  ];
  return (
    <div className="w-[1100px] mt-[60px] flex justify-center space-x-[32px]">
      <div className="w-[838px]">
        <div className="flex justify-between font-[poppins] font-semibold">
          <div className="text-2xl">P2000 meldingen</div>
          <div className="flex justify-center items-center space-x-[12px] text-[16px] text-[#FB4A3F]">
            <div>Selecteer je regio</div>
            <div>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center items-center space-x-[24px]">
          <div className="w-[66px] h-[114px] flex justify-center items-center space-x-[16px]">
            <div className="text-[#FB4A3F] font-medium text-xl">16:40</div>
            <div className="min-w-[16px] h-4 bg-[#FFFFFF] rounded-full shadow shadow-gray-400 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-[#FB4A3F]"></div>
            </div>
          </div>
          <div className="w-[748px] flex justify-between shadow py-6">
            <div className="flex space-x-[15px]">
              <div className="ml-[21px]">
                <img className="w-[80px] h-[64px]" src="/image.png" alt="" />
              </div>
              <div className="">
                <div className="text-[#404040] font-semibold text-[16px] font-[poppins] mb-[10px]">
                  <span className="text-[#FB4A3F]">Brandweer</span> met gepaste
                  spoed{" "}
                </div>
                <div className="">
                  <button className="px-3 py-2 bg-[#E85748] text-white rounded-md border border-[#FB4A3F] hover:bg-white hover:text-black hover:border-[#FB4A3F] transition-all duration-500 mr-[10px] font-[poppins] font-semibold text-xs">
                    Brandweer
                  </button>
                  <button className="px-3 py-2 bg-[#E85748] text-white rounded-md border border-[#FB4A3F] hover:bg-white hover:text-black hover:border-[#FB4A3F] transition-all duration-500 font-[poppins] font-semibold text-xs">
                    Gepaste spoed
                  </button>
                </div>
              </div>
            </div>
            <div className="mr-8">
              <div className="font-[poppins] text-[14px] font-semibold text-[#FB4A3F] mb-4">
                Hoekenrode in Amsterdam Zuidoost
              </div>
              <div className="font-[poppins] text-[14px] font-semibold w-full flex justify-end items-end">
                Noord-Holland
              </div>
            </div>
          </div>
        </div>
        {arr.map((elem) => {
          return (
            <div
              key={elem.id}
              className="mt-4 flex justify-center items-center space-x-[24px]"
            >
              <div className="w-[66px] h-[114px] flex justify-center items-center space-x-[16px]">
                <div className="text-[#FB4A3F] font-medium text-xl">
                  {elem.time}
                </div>
                <div className="min-w-[16px] h-4 bg-[#FFFFFF] rounded-full shadow shadow-gray-400 flex justify-center items-center">
                  <div className="w-2 h-2 rounded-full bg-[#FB4A3F] flex justify-center items-end"><div className="w-[1px] h-[130px] bg-[#E1E1E1] -z-10"></div></div>
                </div>
              </div>
              <div className="w-[748px] flex justify-between shadow py-6">
                <div className="flex space-x-[15px]">
                  <div className="ml-[21px]">
                    <img className="w-[80px] h-[64px]" src={elem.img} alt="" />
                  </div>
                  <div className="">
                    <div className="text-[#404040] font-semibold text-[16px] font-[poppins] mb-[10px]">
                      <span className="text-[#FB4A3F]">Brandweer</span> met
                      gepaste spoed{" "}
                    </div>
                    <div className="">
                      <button className="px-3 py-2 bg-[#E85748] text-white rounded-md border border-[#FB4A3F] hover:bg-white hover:text-black hover:border-[#FB4A3F] transition-all duration-500 mr-[10px] font-[poppins] font-semibold text-xs">
                        {elem.btn1}
                      </button>
                      <button className="px-3 py-2 bg-[#E85748] text-white rounded-md border border-[#FB4A3F] hover:bg-white hover:text-black hover:border-[#FB4A3F] transition-all duration-500 font-[poppins] font-semibold text-xs">
                        {elem.btn2}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mr-8">
                  <div className="font-[poppins] text-[14px] font-semibold text-[#FB4A3F] mb-4">
                    {elem.data1}
                  </div>
                  <div className="font-[poppins] text-[14px] font-semibold w-full flex justify-end items-end">
                    {elem.data2}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col space-y-[16px] text-2xl">
        <div className="relative flex justify-center items-center text-white">
          <img src="/van.png" alt="" />
          <div className="absolute text-center">Dit is een placeholder voor reclame</div>
        </div>
        <div className="relative flex justify-center items-center text-white">
          <img src="/van.png" alt="" />
          <div className="absolute text-center">Dit is een placeholder voor reclame</div>
        </div>
        <div className="relative flex justify-center items-center text-white">
          <img src="/van2.png" alt="" />
          <div className="absolute text-center">Dit is een placeholder voor reclame</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
