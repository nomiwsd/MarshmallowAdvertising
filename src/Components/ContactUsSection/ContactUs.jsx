import React from "react";
import { GalleryImages } from "../../utils/data";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { TbLocation } from "react-icons/tb";
const ContactUs = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto px-4">
        <div className=" md:px-8 py-2">
          <div className="text-black">
            <p className="text-sm font-poppins font-semibold pt-10 pb-4">
              HOW WE DO OUR WORK
            </p>
            <hr className="w-32 border-2 border-[#EC3C44]" />
            <p className="font-poppins text-3xl leading-10 font-black pt-6 py-4">
              Check out our Instagram for our latest work and all things
              #marshmallow advertising.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mx-auto px-4">
        {GalleryImages &&
          GalleryImages.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.Galleryimg} alt="" className="w-96 h-96" />
              </div>
            );
          })}
      </div>

      {/* Contact Us Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#1E2834] text-white mt-8 py-8">
        <div className="px-16">
          <p className="text-sm font-poppins font-semibold pt-10 pb-4">
            Contact Us
          </p>
          <hr className="w-32 border-2 border-[#EC3C44]" />

          <h2 className="text-4xl font-poppins font-extrabold py-4">
            {" "}
            Get a Quote
          </h2>
          <form action="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="flex flex-col text-white">
                <label htmlFor="Name" className="text-sm font-poppins pb-2">
                  Name:
                </label>
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  className=" rounded-md text-[#505050] bg-white border-[#69727d] border-1 "
                />
              </div>
              <div className="flex flex-col text-white">
                <label htmlFor="PhNo" className="text-sm font-poppins pb-2">
                  Phone Number:
                </label>
                <input
                  type="number"
                  name="PhNo"
                  placeholder="Phone Number"
                  className=" rounded-md text-[#505050] bg-white border-[#69727d] border-1 "
                />
              </div>
            </div>

            <div className="flex flex-col text-white my-2">
              <label htmlFor="Email" className="text-sm font-poppins pb-2">
                Email:
              </label>
              <input
                type="email"
                name="Email"
                placeholder="Email"
                className=" rounded-md text-[#505050] bg-white border-[#69727d] border-1 "
              />
            </div>
            <div className="flex flex-col text-white my-2">
              <label htmlFor="Message" className="text-sm font-poppins pb-2">
                Message:
              </label>
              <textarea
                rows="4"
                cols="4"
                name="Email"
                placeholder="Message"
                className=" rounded-md text-[#505050] bg-white border-[#69727d] border-1 "
              />
            </div>
            <div className="flex justify-center items-center">
                <button className="bg-[#EC3C44] text-white font-poppins text-base font-medium flex px-5 py-3 rounded-lg">Send <TbLocation className="pt-1 text-xl" /></button>
            </div>
          </form>
        </div>
        <div className="px-6"> 
          <p className="text-sm font-poppins font-semibold pt-10 pb-4">
            Contact Us
          </p>
          <hr className="w-32 border-2 border-[#EC3C44]" />
          <h2 className="text-4xl font-poppins font-extrabold py-4">
            {" "}
            Call or Email
          </h2>
          <div className="flex justify-start gap-4">
            <FaPhone className="text-lg text-[#EC3C44] rotate-[-270deg] " />
            <p className="font-poppins text-xs md:text-sm font-normal md:font-bold ">+92 300 4948511</p>
          </div>
          <div className="flex justify-start gap-4 my-3">
            <FaMailBulk className="text-sm text-[#EC3C44]" />
            <p className="font-poppins text-xs md:text-sm font-normal md:font-bold ">
              info@marshmallowadvertising.com
            </p>
          </div>
          <h2 className="text-4xl font-poppins font-extrabold py-4">
            {" "}
            Head Office
          </h2>
          <p className="font-poppins text-base font-medium ">
            16, Block M Johar Town, Lahore, 54782
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
