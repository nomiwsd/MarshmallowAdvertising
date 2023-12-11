import React from "react";
import Heroimg from "../../Assets/4.png";
import companylogo1 from "../../Assets/CBD.png";
import companylogo2 from "../../Assets/ROAD-MASTER.png";
import companylogo3 from "../../Assets/nisa.png";
import companylogo4 from "../../Assets/etihad-town.png";
import companylogo5 from "../../Assets/stylo.png";
import companylogo6 from "../../Assets/Emporium_Mall.png";
import companylogo7 from "../../Assets/eggbox.png";
import companylogo8 from "../../Assets/BABY-MASTER.png";
import companylogo9 from "../../Assets/UMT.png";

import { FaArrowRight } from "react-icons/fa";
const LandingPage = () => {
  return (
    <section >
      <div className="w-full  bg-[#EC3C44]">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-start w-1/2">
          <div className="flex-col">
            <h1 className="text-[15px] md:text-[25px] lg:text-[35px]  font-bold font-poppins text-white">
              We Are The Top
            </h1>
            <p className="text-[20px] md:text-[25px] lg:text-[45px] font-bangers text-white textanimation z-10">
              Agency in Town
            </p>
          </div>
          </div>
          <div className="w-1/2">
            <img src={Heroimg} alt="" height="600px" className="herobg" />
          </div>
        </div>
      </div>
      <div className="bg-[#1E2834] relative w-full z-30 px-8">
        <div className="bg-[#1E2834] grid grid-cols-1 md:grid-cols-2 md:px-8 md:py-8 -translate-y-4 md:-translate-y-16 lg:-translate-y-20 xl:-translate-y-28 border-2 border-red-700">
          <div className="flex flex-col justify-start items-start  px-8">
            <h4 className="text-[#FFFFDE] text-sm font-medium font-poppins py-2">
              Marshmallow Advertising
            </h4>
            <hr className="w-32 border-2 border-[#EC3C44] mb-3" />
            <p className="text-white font-poppins font-medium text-3xl pb-3 text-left">
              {" "}
              We are NOT a 360 agency, but we are good at what we do!
            </p>
            <div className="mb-5">
              <p className="font-poppins text-sm text-white text-left mb-4">
                Marshmallow Advertising (Pvt.) Ltd. was established to bring a
                change in the advertising industry. Amidst all the chaos of
                so-called 360 agencies, we stand for specialization and being
                master of what we do.
              </p>
              <p className="font-poppins text-sm text-white text-left mb-4">
                We definitely specialize in our services. Give us a try is
                giving your brand a chance to excel.
              </p>
            </div>
            <button className="bg-[#EC3C44] flex justify-center items-center text-white text-sm font-poppins py-3 px-6 rounded-md ">
              Read More <FaArrowRight className="text-sm font-black ml-1 " />{" "}
            </button>
          </div>

          {/* Cards */}
          <div className="flex flex-col justify-start px-4">
            <div className="container mx-auto">
              <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="w-full">
                  <img
                    src={companylogo1}
                    alt=""
                    className="grayscale hover:grayscale-0 h-[108px]"
                  />
                </div>
                <div className="w-full">
                  <img
                    src={companylogo2}
                    alt=""
                    className="grayscale hover:grayscale-0 h-[108px]"
                  />
                </div>
                <div className="w-full">
                  <img
                    src={companylogo3}
                    alt=""
                    className="grayscale hover:grayscale-0 h-[108px]"
                  />
                </div>
                <div className="w-full">
                  <img
                    src={companylogo4}
                    alt=""
                    className="grayscale hover:grayscale-0 h-[74px]"
                  />
                </div>
                <div className="w-full">
                  <img
                    src={companylogo5}
                    alt=""
                    className="grayscale hover:grayscale-0 h-12"
                  />
                </div>
                <div className="w-full">
                  <img
                    src={companylogo6}
                    alt=""
                    className="grayscale hover:grayscale-0 h-14"
                  />
                </div>
                <div className="w-full h-28">
                  <img
                    src={companylogo7}
                    alt=""
                    className="grayscale hover:grayscale-0 h-24"
                  />
                </div>
                <div className="w-full">
                  <img
                    src={companylogo8}
                    alt=""
                    className="grayscale hover:grayscale-0 h-32"
                  />
                </div>
                <div className="w-full">
                  <img
                    src={companylogo9}
                    alt=""
                    className="grayscale hover:grayscale-0 h-28"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-start my-4">
              <button className="bg-[#EC3C44] flex justify-center items-center text-white text-sm font-poppins py-3 px-6 rounded-md">
                Explore More{" "}
                <FaArrowRight className="text-sm font-black ml-1 " />{" "}
              </button>
            </div>
          </div>
        </div>

        {/* Cards End */}
      </div>
    </section>
  );
};

export default LandingPage;
