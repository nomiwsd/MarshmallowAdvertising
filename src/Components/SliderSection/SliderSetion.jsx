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
// import Digitalbg from "../../Assets/Untitled-1.png";
// import Socialbg from "../../Assets/31-1.png";
// import Creativebg from "../../Assets/32-1.png";
// import Mediabg from "../../Assets/33-1.png";
// import Portfoliobg from "../../Assets/34-1-768x640.png";
// import Aboutbg from "../../Assets/Header-About-About-_1_.png";
import { FaArrowRight } from "react-icons/fa";
import { sliderData } from "../../utils/data";
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
          modules={[Pagination, FreeMode, Autoplay]}
          className="relative mx-32"
          style={{
            "--swiper-pagination-color": "#000",
            "--swiper-pagination-bullet-inactive-color": "#EC3C44",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          {sliderData &&
            sliderData.map((item) => {
              return (
                <SwiperSlide key={item.bgcolor} className="pl-8 pb-8 w-full" style={{backgroundColor:`${item.bgcolor}`}}>
                  <div className="flex flex-col justify-center items-center gap-4 pt-10">
                    <h2 className="text-xl font-poppins font-semibold mb-20 px-4 h-12 md:h-16">
                      {item.mainheading}
                    </h2>
                    <div className="flex flex-col justify-start items-start">
                      <img src={item.Image} alt="" className="h-40 md:h-48" />
                      <div className="bg-black text-white px-4 pt-5 pb-3 h-40 md:h-44">
                        <h3 className="font-poppins text-xl font-bold mb-3">
                          {item.cardhead}
                        </h3>
                        <p className="font-poppins text-xs font-medium text-left">
                          {item.cardtext}
                        </p>
                      </div>
                      <div className="bg-black flex justify-around w-full px-4 py-3 border-t-2">
                        <button className="text-white flex justify-center items-center gap-1 ">
                          {item.footertext}
                          <FaArrowRight className="text-white font-poppins text-sm" />
                        </button>
                        <span className="w-8 h-8">
                          {item.footericon}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          <div className="swiper-pagination z-30"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default SliderSetion;
