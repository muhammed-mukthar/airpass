import Image from "next/image";

function Index() {
  return (
    <section>
      <div className="w-full max-w-[88.375rem] px-6 mx-auto my-10 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">About Serb</h1>
        <p className="max-w-[370px]">Get to know us more</p>
      </div>
      <Image
        className="w-full h-[300px]"
        src="/imgs/black-kite-milvus-migrans-sky.jpg"
        alt="bird"
        height={400}
        width={1920}
      />
      <div className="w-full max-w-[88.375rem] px-6 mx-auto">
        <div className="my-10">
          <h3 className="font-semibold text-lg">Who We Are</h3>
          <p className="mt-3 mb-6">
            SERB is a modern high-tech enterprise found in 2020 to lead the
            drone industry in the Sultanate of Oman by offering intelligent
            services and products
          </p>
        </div>
        <div className="my-10">
          <h3 className="font-semibold text-lg">What we do</h3>
          <div className="mt-3 mb-6 grid grid-cols-3 gap-3">
            <p>
              To build awareness around UTM in the local market and for research
              and progressiveness in the field.
            </p>
            <p>
              To educate, train and facilitate the building of centric projects
              in different applicants.
            </p>
            <p>
              To help enterprises implementing drone technologies as rapidly as
              possible in a reliable, Safe and agile environment.
            </p>
          </div>
        </div>
        <div className="my-10">
          <h3 className="font-semibold text-lg">Our Management Team</h3>
          <div className="my-4 grid grid-cols-3 gap-3">
            <div className="">
              <div className="h-80 w-80 border border-zinc-700 rounded-md"></div>
              <h2 className="mt-1 font-semibold">Anwaar Alhinai</h2>
              <h3 className="mt-1">CEO & Co-Founder</h3>
            </div>
            <div className="">
              <div className="h-80 w-80 border border-zinc-700 rounded-md"></div>
              <h2 className="mt-1 font-semibold">Malik Al Nabhani</h2>
              <h3 className="mt-1">COO & Co-Founder</h3>
            </div>
            <div className="">
              <div className="h-80 w-80 border border-zinc-700 rounded-md"></div>
              <h2 className="mt-1 font-semibold">Mohammed Alshibli</h2>
              <h3 className="mt-1">CTO</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
