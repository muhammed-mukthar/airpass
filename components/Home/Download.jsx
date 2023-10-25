import Image from "next/image";

function Download() {
  return (
    <section className="bg-[url('/imgs/two-persons.jpg')] bg-auto bg-no-repeat h-[600px] w-full">
      <div className="w-full max-w-[88.375rem] px-6 mx-auto flex">
        <Image
          src="/imgs/mobile.jpg"
          className="h-96 w-auto object-contain rounded-3xl"
          height={550}
          width={250}
          alt="Mobile Img!"
        />
        <div className="flex flex-col justify-end mx-4">
          <h2 className="text-5xl font-extrabold text-purple-900 uppercase">
            Fly in the Sky
          </h2>
          <h4 className="text-purple-900 text-3xl">Comming Soon</h4>
          <Image
            src="/svgs/mobile-store.svg"
            height={150}
            width={500}
            className="h-16 w-full object-contain"
            alt="Mobile Store Img!"
          />
        </div>
      </div>
    </section>
  );
}

export default Download;
