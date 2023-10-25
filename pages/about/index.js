import Image from "next/image";
import Footer_2 from "../../components/layouts/Footer_2";

function Index() {
  return (
    <>
      <section className="mt-[5.688rem] 900px:mt-16">
        <div className="w-full max-w-[88.375rem] 900px:px-6 px-6 mx-auto mb-[5.063rem] 900px:mb-16 flex items-center justify-between pt-[7.063rem] 900px:pt-16">
          <h1 className="text-[2.5rem] 900px:text-xl font-semibold">
            About SERB
          </h1>
          <p className="max-w-[370px] text-[1.563rem] 900px:text-[0.688rem]">
            Get to know us more
          </p>
        </div>
        <div className="h-80 900px:h-32">
          <img
            src="/imgs/about serb.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full max-w-[88.375rem] px-6 mx-auto 900px:w-full 900px:px-6 900px:mx-0">
          <div className="mt-24 mb-16 900px:mt-12 900px:mb-8">
            <h3 className="font-bold text-[1.563rem] 900px:text-base mb-[0.625rem]">
              Who We Are
            </h3>
            <p className="900px:mt-0 900px:mb-2 mb-6 text-xl 900px:text-base">
              SERB is a modern high-tech enterprise found in 2020 to lead the
              drone industry in the Sultanate of Oman by offering intelligent
              services and products. SERB provides Unmanned Traffic Management
              System named Tahleeq in Oman. It operates as a
              platform-as-a-service that enables businesses, governmental
              entities, and educational institutions to avoid the operating
              risk, regulatory challenges, and capital expenses associated with
              drone operations.
            </p>
          </div>
          <div className="my-28 900px:my-12">
            <h3 className="font-bold text-[1.563rem] 900px:text-base">
              What we do
            </h3>
            <div className="mt-6 mb-6 900px:mb-4 grid grid-cols-3 1200px:grid-cols-2 900px:grid-cols-1 gap-5 900px:gap-6 text-base">
              <div className="bg-white  px-10 py-7 900px:py-8 900px:px-5 rounded-md text-center shadow-[0px_3px_6px_#00000029] 900px-min:min-h-[18.2rem]">
                <div className="w-fit mx-auto mb-[2.688rem] 900px:mb-6">
                  <img
                    src="/images/chatIcon.png"
                    alt=""
                    className="w-[4.688rem] 900px:w-14"
                  />
                </div>
                <p className="900px:hidden text-xl">
                  To build awareness around UTM in the local market and for
                  research and progressiveness in the field.
                </p>
                <p className="900px:block hidden">
                  To build awareness around UTM in the local market and for
                  research and progressiveness in the field.
                </p>
              </div>

              <div className="bg-white  px-10 py-7 900px:py-8 900px:px-5 rounded-md text-center shadow-[0px_3px_6px_#00000029] 900px-min:min-h-[18.2rem]">
                <div className="w-fit mx-auto mb-10 900px:mb-6">
                  <img
                    src="/images/badgeV1.png"
                    alt=""
                    className="w-16 900px:w-11"
                  />
                </div>
                <p className="900px:hidden text-xl">
                  To educate, train and facilitate the building of centric
                  projects in different applicants.
                </p>
                <p className="900px:block hidden">
                  To educate, train and facilitate the building of centric
                  projects in different applicants.
                </p>
              </div>

              <div className="bg-white  px-10 py-7 900px:py-8 900px:px-5 rounded-md text-center shadow-[0px_3px_6px_#00000029] 900px-min:min-h-[18.2rem]">
                <div className="w-fit mx-auto mb-10 900px:mb-5">
                  <img
                    src="/images/droneLessOpaque.png"
                    alt=""
                    className="w-20 900px:w-14"
                  />
                </div>
                <p className="900px:hidden text-xl">
                  To help enterprises implementing drone technologies as rapidly
                  as possible in a reliable, Safe and agile environment.
                </p>
                <p className="900px:block hidden">
                  To help enterprises implementing drone technologies as rapidly
                  as possible in a reliable, Safe and agile environment.
                </p>
              </div>
            </div>
          </div>
          <div className="my-24 900px:my-12">
            <h3 className="font-bold text-3xl 900px:text-base">
              Our Management Team
            </h3>
            <div className="my-4 1200px:my-6 flex 1200px:flex-wrap 1200px:justify-center justify-between 1200px:gap-10 gap-3 text-center">
              <div className="w-fit">
                <div className="h-[21.438rem] w-80 max-w-full 900px:w-[12.5rem] 900px:h-[13.5rem]">
                  <img
                    src="/imgs/photo 1.png"
                    alt="person"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="mt-4 text-3xl 900px:text-base font-bold">
                  Anwaar Alhinai
                </h2>
                <h3 className="text-2xl 900px:text-base">CEO & Co-Founder</h3>
              </div>
              <div className="w-fit">
                <div className="h-[21.438rem] w-80 max-w-full 900px:w-[12.5rem] 900px:h-[13.5rem]">
                  <img
                    src="/imgs/photo 2.png"
                    alt="person"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="mt-4 text-3xl 900px:text-base font-bold">
                  Malik Al Nabhani
                </h2>
                <h3 className="text-2xl 900px:text-base">COO & Co-Founder</h3>
              </div>
              <div className="w-fit">
                <div className="h-[21.438rem] w-80 max-w-full 900px:w-[12.5rem] 900px:h-[13.5rem]">
                  <img
                    src="/imgs/photo 3.png"
                    alt="person"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="mt-4 text-3xl 900px:text-base font-bold">
                  Mohammed Alshibli
                </h2>
                <h3 className="text-2xl 900px:text-base">CTO</h3>
              </div>
            </div>
          </div>
        </div>
        <Footer_2 />
      </section>
    </>
  );
}

export default Index;
