import Image from "next/image";

function Download() {
  return (
    <section className="bg-[url('/imgs/two_person_home.png')] bg-cover bg-center bg-no-repeat h-[755px] w-full flex py-12 900px:py-8">
      <div className="max-w-[88.375rem] w-full px-6 900px:px-4 pl-[17%] flex gap-8 900px:gap-2 900px:mt-0">
        <div className="mt-auto">
          <div className="900px:hidden">
            <Image
              src="/imgs/mobile.png"
              className="object-fit"
              height={510}
              width={248}
              alt="Mobile Img!"
              layout="fixed"
            />
          </div>
          <div className="900px-min:hidden">
            <Image
              src="/imgs/mobile.png"
              className="object-fit"
              height={288}
              width={140}
              alt="Mobile Img!"
              layout="fixed"
            />
          </div>
        </div>
        <div className="flex flex-col justify-end mx-4 900px:mx-0">
          <h2 className="text-4xl 900px:text-5xl 570px:text-3xl font-extrabold text-[#4B0177] capitalize mb-3 900px:mb-1">
            Fly in the Sky
          </h2>
          <h4 className="text-[#4B0177] font-medium text-3xl 900px:text-4xl 570px:text-2xl mb-6 900px:mb-10 570px:mb-8">
            Coming Soon!
          </h4>
          <img
            src="/svgs/mobile-store.svg"
            alt=""
            className="h-20 900px:h-16 mb-2 570px:hidden"
          />

          <div className="flex gap-3 570px:flex-col flex-wrap 900px:justify-center pb-2 570px-min:hidden">
            <button className="rounded-xl bg-gray-50 w-[9.75rem] h-12">
              <div className="flex items-center justify-center">
                <div className="mr-3 opacity-80">
                  <img
                    src="/images/apple-logo.svg"
                    alt="apple"
                    className="h-7"
                  />
                </div>
                <div className="text-start opacity-80">
                  <p className="text-[10px] tracking-tight leading-[0.5rem]">
                    Download on the
                  </p>
                  <p className="font-medium text-xm leading-[1rem]">
                    App Store
                  </p>
                </div>
              </div>
            </button>
            <button className="rounded-xl bg-gray-50 w-[9.75rem] h-12">
              <div className="flex items-center justify-center">
                <div className="mr-2">
                  <img
                    src="/images/google-play.svg"
                    alt="google"
                    className="h-8"
                  />
                </div>
                <div className="text-start opacity-80">
                  <p className="text-[10px] leading-[0.5rem]">GET IT ON</p>
                  <p className="font-medium text-sm tracking-tight leading-[1rem]">
                    Google Play
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
