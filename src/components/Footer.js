import React from "react";
import { SiInstagram } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <div className="flex justify-between items-start mt-[60px] w-[1100px] py-[90px] border-b border-b-[#404040] border-opacity-20 mb-[20px]">
          <div>
            <div className="flex justify-center items-center space-x-[14.87px] mb-[82.45px]">
              <img className="w-[33.55px] h-[33.55px]" src="/logo.png" alt="" />
              <div className="font-[poppins] text-[32px] font-bold">
                P2000.NET
              </div>
            </div>
            <div className="space-y-[19px]">
              <button className="px-3 py-2 bg-[#FB4A3F] text-white rounded-md border border-[#FB4A3F] hover:bg-white hover:text-black hover:border-[#FB4A3F] transition-all duration-500 mr-[10px] font-medium text-[14px]">
                Whatsapp
              </button>
              <div className="flex items-center space-x-[10.05px]">
                <div className="w-[25px] h-[25px] bg-[#404040] text-[#FFFFFF] rounded-full flex justify-center items-center">
                  <SiInstagram />
                </div>
                <div className="w-[25px] h-[25px] bg-[#404040] text-[#FFFFFF] rounded-full flex justify-center items-center">
                  <BsTwitter />
                </div>
                <div className="w-[25px] h-[25px] bg-[#404040] text-[#FFFFFF] rounded-full flex justify-center items-center">
                  <FaFacebookF />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-[11px]">
            <div className="font-bold text-[18px]">Sitemap</div>
            <div>Home</div>
            <div>Regio</div>
            <div>112 Meldingen</div>
            <div>Nieuws</div>
            <div>Contact</div>
          </div>
          <div className="space-y-[11px]">
            <div className="font-bold text-[18px]">Kennisbank</div>
            <div>Partnerbijdrage</div>
            <div>Partnerbijdrage</div>
            <div>Partnerbijdrage</div>
            <div>Partnerbijdrage</div>
            <div>Partnerbijdrage</div>
          </div>
          <div className="space-y-[6px]">
            <div className="font-bold text-[18px]">
              P2000.net WERKT SAMEN MET
            </div>
            <div className="flex justify-center items-center space-x-[12px]">
              <img src="/image1.png" alt="" />
              <img src="/image1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
        <div className="flex justify-start items-center space-x-8 w-[1100px] text-[16px]">
            <div>Copyright © 2022</div>
            <div>Algemene voorwaarden</div>
            <div>Cookiebeleid</div>
            <div>Privacybeleid</div>
        </div>
    </div>
  );
};

export default Footer;
