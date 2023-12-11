import React from "react";
import Mainimg from "../../Assets/7a99931bfec6e857-768x575.webp";
import dotsimg from "../../Assets/dots-white.png";
import { FaArrowRight } from "react-icons/fa";

const Competitorpage = () => {
  return (
    <section>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 p-8">
        <div className="bg-white text-[#1E2834] p-4 md:p-8 ">
          <div className="md:p-8">
            <p className="text-2xl md:text-4xl font-poppins font-bold text-left leading-10">
              We’re not just a marketing company, we’re part of the team.
            </p>
          </div>
        </div>
        <div className=""></div>
      </div>

      <div className="w-full max-h-screen grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src={Mainimg} alt="" className="mainimg h-full" />
          <div className="dotsbg -translate-y-28 h-32">
            <img src={dotsimg} alt="" srcset="" className="hidden" />
          </div>
        </div>
        <div className="bg-[#EC3C44]  -my-8 p-12">
          <div className=" text-white flex h-full flex-col justify-center items-start">
            <p className="text-sm font-poppins font-semibold pt-10 pb-4">
              WHAT WE DO
            </p>
            <hr className="w-32 border-2 bg-white " />
            <p className="font-poppins text-3xl leading-10 font-medium pt-6 py-4">
              Reach your target market before your competitors
            </p>
            <p className="font-poppins text-sm leading-5 text-left mb-5">
              With our exclusive and tailor-made plans for your marketing, you
              can reach your target audience the most effective way, hence stand
              out in your market segment
            </p>
            <div className="flex justify-start mb-2">
              <button className="bg-white flex justify-center items-center text-[#AB0A3D] text-sm font-poppins py-3 px-6 rounded-md">
                Get Quotation{" "}
                <FaArrowRight className="text-sm font-medium ml-1 text-[#AB0A3D] " />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 gmy-96 md:my-2 md:px-16 md:py-8 grid grid-cols-1 md:grid-cols-2">
        <div className=" md:px-8 py-2">
          <div className="text-black">
            <p className="text-sm font-poppins font-semibold pt-10 pb-4">
              HOW WE DO IT
            </p>
            <hr className="w-32 border-2 border-[#EC3C44]" />
            <p className="font-poppins text-3xl leading-10 font-medium pt-6 py-4">
              We offer the lot and won’t waste your time, energy or money.
            </p>
            <div className="flex justify-start mb-2">
              <button className="bg-[#EC3C44] flex justify-center items-center text-white text-sm font-poppins py-3 px-6 rounded-md">
                Get In Touch{" "}
                <FaArrowRight className="text-sm font-bold ml-1 text-white " />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-poppins text-sm font-medium pb-4">
            We’re a down-to-earth, straight-talking team who will spend your
            marketing budget like it’s our own. We understand that there isn’t a
            one size fits all approach and that all clients are different.
          </p>
          <p className="font-poppins text-lg font-semibold">
            So, what are you waiting for? Take your marketing to a new dimension
            today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Competitorpage;
