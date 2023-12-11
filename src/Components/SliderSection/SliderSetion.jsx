import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
// import 'swiper/swiper-bundle.css';

// Import Swiper styles
// import 'swiper/swiper.min.css';
// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Digitalbg from "../../Assets/Untitled-1.png";
import Socialbg from "../../Assets/31-1.png";
import Creativebg from "../../Assets/32-1.png";
import Mediabg from "../../Assets/33-1.png";
// import Portfoliobg from "../../Assets/34-1-768x640.png";
import Aboutbg from "../../Assets/Header-About-About-_1_.png";
import { FaArrowRight, FaBullseye, FaHeart } from "react-icons/fa";
const SliderSetion = () => {
  const breakpoints = {
    // when window width is <= 640px
    640: {
      slidesPerView: 1,
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is <= 1024px
    1024: {
      slidesPerView: 4,
    },
  };

  
  return (
    <section className="relative w-full">
      <div className="mx-8 z-0 relative">
        <Swiper
          freeMode={true}
          freeModeMomentum="false"
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
          breakpoints={breakpoints}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination,FreeMode, Autoplay]}
          className="relative mx-32"
          style={{
            "--swiper-pagination-color": "#000",
            "--swiper-pagination-bullet-inactive-color": "#EC3C44",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          <SwiperSlide className="bg-[#FFC05C] pl-8 pb-8 w-full">
            <div className="flex flex-col justify-center items-center gap-4 pt-10">
              <h2 className="text-xl font-poppins font-semibold mb-16 px-4 ">
                Digital Marketing that Kicks Ass
              </h2>

              <div className="flex flex-col justify-start items-start">
                <img src={Digitalbg} alt="" className="h-52 md:h-44" />
                <div className="bg-black text-white px-4 pt-5 pb-3 h-42 xl:h-40">
                  <h3 className="font-poppins text-xl font-bold mb-3">
                    Digital
                  </h3>
                  <p className="font-poppins text-xs font-medium text-left">
                    Google Ads, programmatic, paid social, YouTube, Spotify and
                    Web development – we’re the full package. Every business is
                    different and we make it work for you.
                  </p>
                </div>
                <div className="bg-black flex justify-around w-full px-4 py-3 border-t-2">
                  <button className="text-white flex justify-center items-center gap-1 ">
                    Find out More{" "}
                    <FaArrowRight className="text-white font-poppins text-sm" />
                  </button>

                  <FaBullseye className="text-5xl text-[#05EDB0]" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[#E3F888] pl-8 pb-8 w-full">
            <div className="flex flex-col justify-center items-center gap-4 pt-10">
              <h2 className="text-xl font-poppins font-semibold mb-16 px-4 ">
                Your brand's voice,only LOUDER
              </h2>

              <div className="flex flex-col justify-start items-start">
                <img src={Socialbg} alt="" className="h-52 md:h-44 " />
                <div className="bg-black text-white px-4 pt-5 pb-3 h-42 lg:h-[200px] xl:h-36">
                  <h3 className="font-poppins text-xl font-bold mb-3">
                    Social
                  </h3>
                  <p className="font-poppins text-xs font-medium ">
                    Social media is no longer a could have, it’s a must have. We
                    use Instagram, Facebook and LinkedIn to connect with your
                    customers and increase brand awareness.
                  </p>
                </div>
                <div className=" bg-black flex justify-around w-full px-4 py-3 border-t-2">
                  <button className="text-white flex justify-center items-center gap-1 ">
                    Find out More{" "}
                    <FaArrowRight className="text-white font-poppins text-sm" />
                  </button>

                  <FaHeart className="text-5xl text-[#E3F888]" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[#FE6BA6] pl-8 pb-8 w-full">
            <div className="flex flex-col justify-center items-center gap-4 pt-10">
              <h2 className="text-xl font-poppins font-black mb-16 px-4 ">
                A PERFECT MASH UP OF MARKETING TALENT.
              </h2>

              <div className="flex flex-col justify-start items-start">
                <img src={Aboutbg} alt="" className="h-44 lg:h-[154px] xl:h-[182px]"/>
                <div className="bg-black text-white px-4 pt-5 pb-3 h-42 lg:h-48 xl:h-36">
                  <h3 className="font-poppins text-xl font-bold mb-3">About</h3>
                  <p className="font-poppins text-xs font-medium">
                    WE ARE NOT A 360 AGENCY, BUT WE ARE GOOD AT WHAT WE DO!
                    Marshmallow Advertising (Pvt.) Ltd. was established to bring
                    a change in the advertising industry
                  </p>
                </div>
                <div className="bg-black flex justify-around w-full px-4 py-3 border-t-2">
                  <button className="text-white flex justify-center items-center gap-1 ">
                    Find out More{" "}
                    <FaArrowRight className="text-white font-poppins text-sm" />
                  </button>

                  <FaBullseye className="text-5xl text-[#05EDB0]" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[#EC3C44] pl-8 pb-8 w-full">
            <div className="flex flex-col justify-center items-center gap-4 pt-10">
              <h2 className="text-xl font-poppins font-black mb-16 px-4 ">
                Your Audience is Waiting
              </h2>
              <div className="flex flex-col justify-start items-start">
                <img src={Mediabg} alt="" className="h-52" />
                <div className="bg-black text-white px-4 pt-5 pb-3 h-42 md:h-34 lg:h-48 xl:h-36">
                  <h3 className="font-poppins text-xl font-bold mb-3">Media</h3>
                  <p className="font-poppins text-xs font-medium">
                    We plan, buy and execute media campaigns from concepts and
                    creative through to delivery, utilising national and local
                    TV, Sky, VOD, radio, press, and cinema.
                  </p>
                </div>
                <div className="bg-black flex justify-around w-full px-4 py-3 border-t-2">
                  <button className="text-white flex justify-center items-center gap-1 ">
                    Find out More{" "}
                    <FaArrowRight className="text-white font-poppins text-sm" />
                  </button>

                  <FaBullseye className="text-5xl text-[#05EDB0]" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[#8A8AFF] pl-8 pb-8 w-full">
            <div className="flex flex-col justify-center items-center gap-4 pt-10">
              <h2 className="text-xl font-poppins font-semibold mb-16 px-4 ">
                Creativity Adapted to You
              </h2>
              <div className="flex flex-col justify-start items-start">
                <img src={Creativebg} alt="" className="h-52" />
                <div className="bg-black text-white px-4 pt-5 pb-3 h-[166px] md:h-[136px] lg:h-[194px] xl:h-36">
                  <h3 className="font-poppins text-xl font-bold mb-3">
                    Creative
                  </h3>
                  <p className="font-poppins text-xs font-medium">
                    From TV ads to TikTok, blogs to branding, animated videos to
                    augmented reality, we create everything you need to engage
                    and excite your audience.
                  </p>
                </div>
                <div className="bg-black flex justify-around w-full px-4 py-3 border-t-2">
                  <button className="text-white flex justify-center items-center gap-1 ">
                    Find out More{" "}
                    <FaArrowRight className="text-white font-poppins text-sm" />
                  </button>

                  <FaBullseye className="text-5xl text-[#05EDB0]" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination z-30"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default SliderSetion;
