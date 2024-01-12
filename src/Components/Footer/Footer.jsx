import React from "react";

const Footer = () => {
  return (
    <footer className="w-full ">
      <div className="bg-[#EC3C44] w-full  px-20 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 text-white md:gap-4 lg:gap-2">
          {/* footer Links */}
          <div className="Digital">
            <p className="text-4xl font-poppins font-bold pt-10 pb-4">
              Digital
            </p>
            <hr className="w-8 border-2 border-white" />
            <ul className="flex flex-col justify-start gap-2 mt-3">
              <li className="text-sm font-semibold text-left">
                Social Media Paid Campaigns
              </li>
              <li className="text-sm font-semibold text-left ">
                PPC & CPC Ads{" "}
              </li>
              <li className="text-sm font-semibold text-left">
                Web Development{" "}
              </li>
              <li className="text-sm font-semibold text-left">
                Youtube Advertising
              </li>
            </ul>
          </div>
          <div className="Social">
            <p className="text-4xl font-poppins font-bold pt-10 pb-4">
              Social
            </p>
            <hr className="w-8 border-2 border-white" />
            <ul className="flex flex-col justify-start gap-2 mt-3">
              <li className="text-sm font-semibold text-left">
                Instagram
              </li>
              <li className="text-sm font-semibold text-left ">
                LinkedIn
              </li>
              <li className="text-sm font-semibold text-left">
                Facebook
              </li>
              <li className="text-sm font-semibold text-left">
                Twitter
              </li>
            </ul>
          </div>
          <div className="Creative">
            <p className="text-4xl font-poppins font-bold pt-10 pb-4">
              Creative
            </p>
            <hr className="w-8 border-2 border-white" />
            <ul className="flex flex-col justify-start gap-2 mt-3">
              <li className="text-sm font-semibold text-left">
                Branding
              </li>
              <li className="text-sm font-semibold text-left ">
                Blog & Content Writing
              </li>
              <li className="text-sm font-semibold text-left">
                TV Ad & Video Production
              </li>
              <li className="text-sm font-semibold text-left">
                2D/3D Animation
              </li>
            </ul>
          </div>
          <div className="Media">
            <p className="text-4xl font-poppins font-bold pt-10 pb-4">
              Media
            </p>
            <hr className="w-8 border-2 border-white" />
            <ul className="flex flex-col justify-start gap-2 mt-3">
              <li className="text-sm font-semibold text-left">
            Radio Advertising
              </li>
              <li className="text-sm font-semibold text-left ">
                TV Advertising
              </li>
              <li className="text-sm font-semibold text-left">
                Newspapers & Press
              </li>
            </ul>
          </div>
          <div className="Portfolio">
            <p className="text-4xl font-poppins font-bold pt-10 pb-4">
              Portfolio
            </p>
            <hr className="w-8 border-2 border-white" />
            <ul className="flex flex-col justify-start gap-2 mt-3">
              <li className="text-sm font-semibold text-left">
                Print
              </li>
              <li className="text-sm font-semibold text-left ">
                Packaging
              </li>
              <li className="text-sm font-semibold text-left">
                Digital Marketing
              </li>
              <li className="text-sm font-semibold text-left">
                TVCs & DVCs
              </li>
            </ul>
          </div>
          <div className="About">
            <p className="text-4xl font-poppins font-bold pt-10 pb-4">
              About
            </p>
            <hr className="w-8 border-2 border-white" />
            <ul className="flex flex-col justify-start gap-2 mt-3">
              <li className="text-sm font-semibold text-left">
                Blog
              </li>
              <li className="text-sm font-semibold text-left ">
                Meet The Team
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#1E2834] text-white px-4 py-4">
        <p className="font-poppins text-base font-medium">&copy; 2023 Marshmallow Advertising. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
