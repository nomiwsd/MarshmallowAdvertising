import React from "react";
import logo from "../../Assets/logo-2-01.png";
import Digitalbg from "../../Assets/Untitled-1.png";
import Socialbg from "../../Assets/31-1.png";
import Creativebg from "../../Assets/32-1.png";
import Mediabg from "../../Assets/33-1.png";
import Portfoliobg from "../../Assets/34-1-768x640.png";
import Aboutbg from "../../Assets/Header-About-About-_1_.png";
import { TbLocation } from "react-icons/tb";
import { BiChevronDown } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <header className="">
      <div className="flex justify-between items-center md:hidden p-3 mx-3">
      <img src={logo} alt="" className="w-16 h-16" />
      <FaBars className="w-8 h-8"/>
      </div>
      <div className="hidden md:flex justify-center items-center">
      <nav className="w-full px-3">
        <ul className="flex justify-evenly items-center py-4">
          <li>
            <button className="peer text-lg md:text-sm font-poppins text-[#000000] relative flex">
              Digital
              <BiChevronDown className="text-[20px] text-red-700 pt-1 md:pt-0 peer-hover:rotate-180 hover:rotate-180 pb-1 md:pb-0 first-letter:text-[32px]" />
            </button>

            <div
              className="hidden absolute top-24 left-0 peer-hover:flex hover:flex focus:flex w-full h-screen flex-col 
              bg-[#FFEF78] drop-shadow-lg z-20"
            >
              <div className="w-full flex justify-between items-start h-screen">
                <div className="flex flex-col justify-start px-5 my-16">
                  <h1 className="text-[48px] font-bold font-poppins text-left">
                    Digital
                  </h1>
                  <hr className="w-32 border-2 bg-[#FFEA75]" />
                  <ul className="flex-1 flex-col justify-start">
                    <li className="text-[36px] font-bold text-left flex pt-1">
                      Social Media Paid Campaigns
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />{" "}
                    </li>
                    <li className="text-[36px] font-bold text-left flex ">
                      PPC & CPC Ads{" "}
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />
                    </li>
                    <li className="text-[36px] font-bold text-left flex">
                      Web Development{" "}
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />
                    </li>
                    <li className="text-[36px] font-bold text-left flex">
                      Youtube Advertising
                      <FaArrowRight className="mt-3 text-4xl font-black" />
                    </li>
                  </ul>
                </div>
                <div className="flex-1 justify-end items-end relative ">
                  <img
                    src={Digitalbg}
                    alt=""
                    className="h-[350px] absolute top-72  w-full"
                  />
                </div>
              </div>
            </div>
          </li>
          {/* Social */}
          <li>
            <button className="peer text-lg md:text-sm font-poppins text-[#000000] relative flex">
              Social
              <BiChevronDown className="text-[20px] text-red-700 pt-1 md:pt-0 peer-hover:rotate-180 hover:rotate-180 pb-1 md:pb-0 first-letter:text-[32px]" />
            </button>

            <div
              className="hidden absolute top-24 left-0 peer-hover:flex hover:flex focus:flex w-full h-screen flex-col 
              bg-[#E3F989] drop-shadow-lg z-20"
            >
              <div className="w-full flex justify-evenly items-start h-screen">
                <div className="flex flex-col justify-start px-5 my-16">
                  <h1 className="text-[48px] font-bold font-poppins text-left">
                    Social
                  </h1>
                  <hr className="w-32 border-2 bg-[#FFEA75]" />
                  <ul className="flex-1 flex-col justify-start">
                    <li className="text-[36px] font-bold text-left flex pt-1">
                      Instagram{" "}
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />{" "}
                    </li>
                    <li className="text-[36px] font-bold text-left flex ">
                      Facebook
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />
                    </li>
                    <li className="text-[36px] font-bold text-left flex">
                      Twitter
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />
                    </li>
                    <li className="text-[36px] font-bold text-left flex">
                      LinkedIn
                      <FaArrowRight className="mt-3 text-4xl font-black" />
                    </li>
                  </ul>
                </div>
                <div className="flex-1 justify-end items-end relative ">
                  <img
                    src={Socialbg}
                    alt=""
                    className="h-[350px] absolute top-[310px] left-[350px] w-[700px]"
                  />
                </div>
              </div>
            </div>
          </li>
          {/* Creative */}
          <li>
            <button className="peer text-lg md:text-sm font-poppins text-[#000000] relative flex">
              Creative
              <BiChevronDown className="text-[20px] text-red-700 pt-1 md:pt-0 peer-hover:rotate-180 hover:rotate-180 pb-1 md:pb-0 first-letter:text-[32px]" />
            </button>

            <div
              className="hidden absolute top-24 left-0 peer-hover:flex hover:flex focus:flex w-full h-screen flex-col 
              bg-[#D7ABFF] drop-shadow-lg z-20"
            >
              <div className="w-full flex justify-between items-start h-screen">
                <div className="flex flex-col justify-start px-5 my-16">
                  <h1 className="text-[48px] font-bold font-poppins text-left">
                    Creative
                  </h1>
                  <hr className="w-32 border-2 bg-[#FFEA75]" />
                  <ul className="flex-1 flex-col justify-start">
                    <li className="text-[36px] font-bold text-left flex pt-1">
                      Branding
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />{" "}
                    </li>
                    <li className="text-[36px] font-bold text-left flex ">
                      Blog & Content Writing
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />
                    </li>
                    <li className="text-[36px] font-bold text-left flex">
                      TV ad & Video Production
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />
                    </li>
                    <li className="text-[36px] font-bold text-left flex">
                      2D/3D Animation
                      <FaArrowRight className="mt-3 text-4xl font-black" />
                    </li>
                  </ul>
                </div>
                <div className="flex-1 justify-end items-end relative ">
                  <img
                    src={Creativebg}
                    alt=""
                    className="h-[350px] absolute top-72 left-44 w-[600px]"
                  />
                </div>
              </div>
            </div>
          </li>
          <li className="mx-6">
            <img src={logo} alt="" className="w-16 h-16" />
          </li>
          {/* Media */}
          <li>
            <button className="peer text-lg md:text-sm font-poppins text-[#000000] relative flex">
              Media
              <BiChevronDown className="text-[20px] text-red-700 pt-1 md:pt-0 peer-hover:rotate-180 hover:rotate-180 pb-1 md:pb-0 first-letter:text-[32px]" />
            </button>

            <div
              className="hidden absolute top-24 left-0 peer-hover:flex hover:flex focus:flex w-full h-screen flex-col 
              bg-[#F86A5D] drop-shadow-lg z-20"
            >
              <div className="w-full flex justify-between items-start h-screen">
                <div className="flex-1 justify-end items-end relative ">
                  <img
                    src={Mediabg}
                    alt=""
                    className="h-[350px] absolute top-80 left-24 w-[90%]"
                  />
                </div>
                <div className="flex-1 flex-col justify-start items-start px-5 my-16">
                  <h1 className="text-[48px] font-bold font-poppins text-left">
                    Media
                  </h1>
                  <hr className="w-32 border-2 bg-[#FFEA75]" />
                  <ul className="flex-1 flex-col justify-start">
                    <li className="text-[36px] font-bold text-left flex pt-1">
                      Radio Advertising
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />{" "}
                    </li>
                    <li className="text-[36px] font-bold text-left flex ">
                      TV Advertising
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />
                    </li>
                    <li className="text-[36px] font-bold text-left flex">
                      Newspapers & Press
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* Portfolio */}
          <li>
            <button className="peer text-lg md:text-sm font-poppins text-[#000000] relative flex">
              Portfolio
              <BiChevronDown className="text-[20px] text-red-700 pt-1 md:pt-0 peer-hover:rotate-180 hover:rotate-180 pb-1 md:pb-0 first-letter:text-[32px]" />
            </button>

            <div
              className="hidden absolute top-24 left-0 peer-hover:flex hover:flex focus:flex w-full h-screen flex-col 
              bg-[#749CFF] drop-shadow-lg z-20"
            >
              <div className="w-full flex justify-between items-start h-screen">
                <div className="flex-1 justify-end items-end relative ">
                  <img
                    src={Portfoliobg}
                    alt=""
                    className="h-[350px] absolute top-80 left-22 w-full"
                  />
                </div>
                <div className="flex-1 flex-col justify-start items-start px-5 my-16">
                  <h1 className="text-[48px] font-bold font-poppins text-left">
                    Portfolio
                  </h1>
                  <hr className="w-32 border-2 bg-[#FFEA75]" />
                  <ul className="flex-1 flex-col justify-start">
                    <li className="text-[36px] font-bold text-left flex pt-1">
                      Print
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />{" "}
                    </li>
                    <li className="text-[36px] font-bold text-left flex ">
                      Packaging
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />
                    </li>
                    <li className="text-[36px] font-bold text-left flex">
                      Digital Marketing
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />
                    </li>
                    <li className="text-[36px] font-bold text-left flex">
                      TVCs & DVCs
                      <FaArrowRight className="mt-3 text-4xl font-black" />
                    </li>
                    <li className="text-[36px] font-bold text-left flex">
                      Our Clients
                      <FaArrowRight className="mt-3 text-4xl font-black" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* About */}
          <li>
            <button className="peer text-lg md:text-sm font-poppins text-[#000000] relative flex">
              About
              <BiChevronDown className="text-[20px] text-red-700 pt-1 md:pt-0 peer-hover:rotate-180 hover:rotate-180 pb-1 md:pb-0 first-letter:text-[32px]" />
            </button>

            <div
              className="hidden absolute top-24 left-0 peer-hover:flex hover:flex focus:flex w-full h-screen flex-col 
              bg-[#FF9395] drop-shadow-lg z-20"
            >
              <div className="w-full flex justify-between items-start h-screen">
                <div className="flex-1 justify-end items-end relative ">
                  <img
                    src={Aboutbg}
                    alt=""
                    className="h-[350px] absolute top-80 left-24 w-full"
                  />
                </div>
                <div className="flex-1 flex-col justify-start items-start px-5 my-16">
                  <h1 className="text-[48px] font-bold font-poppins text-left">
                    About
                  </h1>
                  <hr className="w-32 border-2 bg-[#FFEA75]" />
                  <ul className="flex-1 flex-col justify-start">
                    <li className="text-[36px] font-bold text-left flex pt-1">
                      Blog
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />{" "}
                    </li>
                    <li className="text-[36px] font-bold text-left flex ">
                      Meet The Team
                      <FaArrowRight className="mt-3 text-4xl font-extrabold" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="">
            <button className="bg-slate-800 text-white p-2 rounded-xl flex ">
              Contact <TbLocation className="pt-1 text-xl" />
            </button>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
