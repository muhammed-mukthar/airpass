import Image from "next/image";
import { useRouter } from "next/router";
import { RiArrowRightSLine } from "react-icons/ri";

function Index() {
  const { push } = useRouter();
  return (
    <section>
      <div className="w-full max-w-[88.375rem] px-6 mx-auto my-10 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">News</h1>
        <p className="max-w-[370px]">
          Informed Today, Empowered Tomorrow: Your Trusted Source for News
        </p>
      </div>
      <Image
        className="w-full h-[300px]"
        src="/imgs/black-kite-milvus-migrans-sky.jpg"
        alt="bird"
        height={400}
        width={1260}
      />
      <div className="w-full max-w-[88.375rem] px-6 mx-auto my-36">
        <div className="grid grid-cols-2 gap-3">
          <div
            className="relative cursor-pointer"
            onClick={() => push("/news/1")}
          >
            <Image
              src="/images/bird-1.png"
              height={400}
              width={650}
              alt="Bird Img!"
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="absolute bottom-2 left-0 w-full flex items-center justify-between text-white z-20 px-4">
              <div className="">
                <h4 className="font-semibold text-lg underline">
                  Serb News in 2020
                </h4>
                <h5 className="text-base">February 15, 2023</h5>
              </div>
              <RiArrowRightSLine size={24} />
            </div>
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => push("/news/2")}
          >
            <Image
              src="/images/bird-2.png"
              height={400}
              width={650}
              alt="Bird Img!"
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="absolute bottom-2 left-0 w-full flex items-center justify-between text-white z-20 px-4">
              <div className="">
                <h4 className="font-semibold text-lg underline">
                  Serb News in 2020
                </h4>
                <h5 className="text-base">February 15, 2023</h5>
              </div>
              <RiArrowRightSLine size={24} />
            </div>
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => push("/news/3")}
          >
            <Image
              src="/images/bird-1.png"
              height={400}
              width={650}
              alt="Bird Img!"
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="absolute bottom-2 left-0 w-full flex items-center justify-between text-white z-20 px-4">
              <div className="">
                <h4 className="font-semibold text-lg underline">
                  Serb News in 2020
                </h4>
                <h5 className="text-base">February 15, 2023</h5>
              </div>
              <RiArrowRightSLine size={24} />
            </div>
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => push("/news/4")}
          >
            <Image
              src="/images/bird-2.png"
              height={400}
              width={650}
              alt="Bird Img!"
              className="w-full h-auto object-fill rounded-md"
            />
            <div className="absolute bottom-2 left-0 w-full flex items-center justify-between text-white z-20 px-4">
              <div className="">
                <h4 className="font-semibold text-lg underline">
                  Serb News in 2020
                </h4>
                <h5 className="text-base">February 15, 2023</h5>
              </div>
              <RiArrowRightSLine size={24} />
            </div>
          </div>
        </div>
        <div className="my-36">
          <h2 className="text-3xl font-semibold">Subscribe to SERB article</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="my-3">
              <input
                type="email"
                className="w-full border p-3 rounded-md outline-none"
                placeholder="Enter Your E-mail Address"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-600 rounded-md text-white font-semibold p-3 max-w-[400px]"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Index;
