import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../App.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function Swipper() {
  return (
    <>
      <div className="w-full h-[90vh] flex justify-center items-center">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper min-h-[50vh]"
        >
          <SwiperSlide>
            <div className="w-full bg-[url('../assets/bg.jpg')] flex flex-col items-left justify-center px-[10vw] leading-tight items-center">
              <h1 className="text-[8vw] font-extrabold">Grow</h1>
              <h1 className="text-[8vw] font-extrabold">Bussiness</h1>
              <p className="text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolores, nostrum.
              </p>
              <button className="py-4 px-6 bg-yellow-400 rounded-xl w-[15%] mt-3 text-xl">
                Getting Started
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-[url('../assets/bg.jpg')] flex flex-col items-left justify-center px-[10vw] leading-tight items-center">
              <h1 className="text-[8vw] font-extrabold">Grow</h1>
              <h1 className="text-[8vw] font-extrabold">Bussiness</h1>
              <p className="text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolores, nostrum.
              </p>
              <button className="py-4 px-6 bg-yellow-400 rounded-xl w-[15%] mt-3 text-xl">
                Getting Started
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full bg-[url('../assets/bg.jpg')] flex flex-col items-left justify-center px-[10vw] leading-tight items-center">
              <h1 className="text-[8vw] font-extrabold">Grow</h1>
              <h1 className="text-[8vw] font-extrabold">Bussiness</h1>
              <p className="text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolores, nostrum.
              </p>
              <button className="py-4 px-6 bg-yellow-400 rounded-xl w-[15%] mt-3 text-xl">
                Getting Started
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
