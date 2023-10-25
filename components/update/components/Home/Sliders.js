// import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

function Sliders() {
  const [swiper, setSwiper] = useState({});
  const [current, setCurrent] = useState(0);
  const { push } = useRouter();
  return (
    <div className="relative">
      <Swiper
        loop
        onInit={(e) => setSwiper(e)}
        onSlideChange={() => setCurrent(swiper.activeIndex)}
        className="h-[85vh]"
      >
        <SwiperSlide>
          <img
            src="/imgs/slider_1.png"
            className="object-cover object-top w-screen h-full"
            // height={750}
            // height={930}
            // width={1260}
            // quality={100}
            alt="Slider Img!"
          />
          <div className="900px-min:w-full absolute bottom-[20%] 900px:bottom-[25%]  flex flex-col justify-between z-20 text-white">
            <div className="max-w-[88.375rem]  w-full mx-auto px-6 570px:px-3">
              <h1 className="text-[6.25rem] font-bold leading-[7.313rem] uppercase mb-12 900px:text-7xl 570px:text-6xl 900px:leading-tight">
                Fly In
                <br />
                The Sky
              </h1>
              <div>
                <p className="text-[1.25rem] mb-5 570px:text-base 570px:mb-2">New to SERB?</p>
                <button
                  onClick={() => push("/auth/register")}
                  className="text-[1.375rem] font-semibold bg-[#E65A2C] text-white h-[3.625rem] w-[16.375rem] 570px:h-[2.813rem] 570px:w-[11.188rem] rounded-md hover:bg-[#c74545] transition-all duration-200 570px:text-lg"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/imgs/slider_2.png"
            className="object-cover object-top w-screen h-full"
            // height={750}
            // height={930}
            // width={1260}
            alt="Slider Img!"
          />
          <div className="900px-min:w-full absolute top-[20%] flex flex-col z-20 text-white">
            <div className="max-w-[88.375rem]  w-full mx-auto px-6 570px:px-3">
              <div className="w-fit">
                <h1 className="text-[6.25rem] font-bold leading-[7.313rem] uppercase mb-24 570px:mb-6 900px:text-7xl 570px:text-6xl 450px:text-5xl 900px:leading-tight">
                  Earn Your <br /> Certificate
                </h1>
                <div className="w-fit mx-auto 570px:mx-0">
                  <button
                    onClick={() => push("/airpass")}
                    className="text-[1.563rem] whitespace-nowrap font-semibold bg-[#E65A2C] text-white h-[3.625rem] w-[16.375rem] 570px:h-[2.813rem] 570px:w-[11.188rem] rounded-md hover:bg-[#c74545] transition-all duration-200 570px:text-lg"
                  >
                    Go To AirPass
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/imgs/slider_3.png"
            className="object-cover object-top w-screen h-full"
            // height={750}
            // height={930}
            // width={1260}
            alt="Slider Img!"
          />
          <div className="900px-min:w-full absolute 900px-min:top-[20%] 900px:bottom-[25%] flex flex-col justify-between z-20 text-white">
            <div className="max-w-[88.375rem]  w-full mx-auto px-6 570px:px-3">
              <div className="w-fit">
                <h1 className="text-[6.25rem] font-bold leading-[7.313rem] uppercase mb-16 570px:mb-4 900px:text-7xl 570px:text-6xl 570px:text-center 900px:leading-tight">
                  ENTERPRISE <br />
                  PLANS
                </h1>
                <div className="570px:mx-auto w-fit">
                  <button
                    onClick={() => push("/enterprise-section")}
                    className="text-[1.563rem] whitespace-nowrap font-semibold bg-[#E65A2C] text-white h-[3.625rem] w-[16.375rem] 570px:h-[2.813rem] 570px:w-[11.188rem] rounded-md hover:bg-[#c74545] transition-all duration-200 570px:text-lg"
                  >
                    Go To Enterprise
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute bottom-0 left-0 w-full h-24 570px:h-12 border-t border-gray-500 z-20">
        <div className="max-w-[88.375rem] w-full px-6 570px:px-3 mx-auto h-full flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => swiper.slideTo(0)}
              className={`h-3 w-3 570px:h-2 570px:w-2 ${
                current === 0 ? "bg-white" : "bg-zinc-300"
              } rounded-full`}
            ></button>
            <button
              onClick={() => swiper.slideTo(1)}
              className={`h-3 w-3 570px:h-2 570px:w-2 ${
                current === 1 ? "bg-white" : "bg-zinc-300"
              } rounded-full mx-7 570px:mx-4`}
            ></button>
            <button
              onClick={() => swiper.slideTo(2)}
              className={`h-3 w-3 570px:h-2 570px:w-2 ${
                current === 2 ? "bg-white" : "bg-zinc-300"
              } rounded-full`}
            ></button>
          </div>
          <ul className="flex items-center text-white 570px:gap-1">
            <li
              className="cursor-pointer"
              onClick={() => {
                swiper.slideNext();
                setCurrent((current + 1) % 3);
              }}
            >
              <RiArrowLeftSLine className="text-4xl 570px:text-2xl" />
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                swiper.slidePrev();
                setCurrent((current - 1) % 3);
              }}
            >
              <RiArrowLeftSLine className="rotate-180 text-4xl 570px:text-2xl" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sliders;
