import Image from "next/image";
import { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

function Sliders() {
  const [swiper, setSwiper] = useState({});
  const [current, setCurrent] = useState(0);
  return (
    <div className="relative">
      <Swiper
        loop
        onInit={(e) => setSwiper(e)}
        onSlideChange={() => setCurrent(swiper.activeIndex)}
      >
        <SwiperSlide>
          <Image
            src="/imgs/slider_1.png"
            className="object-fill w-screen"
            height={750}
            width={1260}
            alt="Slider Img!"
          />
          <div className="absolute top-1/2 left-44 -translate-y-1/2 w-[30%] h-[50vh] flex flex-col justify-between z-20 text-white">
            <h1 className="text-7xl font-extrabold w-full max-w-[88.375rem] px-6 uppercase">
              Fly In The Sky
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/imgs/slider_2.png"
            className="object-fill w-screen"
            height={750}
            width={1260}
            alt="Slider Img!"
          />
          <div className="absolute top-1/2 right-44 -translate-y-1/2 w-[30%] h-[50vh] flex flex-col z-20 text-white">
            <h1 className="text-7xl font-extrabold uppercase">
              Earn Your Certificate
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/imgs/slider_3.png"
            className="object-fill w-screen"
            height={750}
            width={1260}
            alt="Slider Img!"
          />
          <div className="absolute top-1/2 left-44 -translate-y-1/2 w-[30%] h-[50vh] flex flex-col justify-between z-20 text-white">
            <h1 className="text-7xl font-extrabold w-full max-w-[88.375rem] px-6 uppercase">
              ENTERPRISE PLANS
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute bottom-0 left-0 w-full h-14 border-t border-gray-500 z-20">
        <div className="w-full max-w-[88.375rem] px-6 mx-auto h-full flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => swiper.slideTo(0)}
              className={`h-2.5 w-2.5 ${
                current === 0 ? "bg-zinc-300" : "bg-white"
              } rounded-full`}
            ></button>
            <button
              onClick={() => swiper.slideTo(1)}
              className={`h-2.5 w-2.5 ${
                current === 1 ? "bg-zinc-300" : "bg-white"
              } rounded-full mx-7`}
            ></button>
            <button
              onClick={() => swiper.slideTo(2)}
              className={`h-2.5 w-2.5 ${
                current === 2 ? "bg-zinc-300" : "bg-white"
              } rounded-full`}
            ></button>
          </div>
          <ul className="flex items-center text-white">
            <li
              className="cursor-pointer"
              onClick={() => {
                swiper.slideNext();
                setCurrent((current + 1) % 3);
              }}
            >
              <RiArrowLeftSLine size={24} />
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                swiper.slidePrev();
                setCurrent((current - 1) % 3);
              }}
            >
              <RiArrowLeftSLine size={24} className="rotate-180" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sliders;
