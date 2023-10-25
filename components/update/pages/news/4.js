import Image from "next/image";
import { useRouter } from "next/router";
import { RiArrowRightSLine } from "react-icons/ri";

function Index() {
  const { push } = useRouter();
  return (
    <section>
      <div className="w-full max-w-[88.375rem] px-6 mx-auto my-10">
        <h1
          className="text-xl font-semibold flex items-center text-zinc-400 cursor-pointer"
          onClick={() => push("/news")}
        >
          <RiArrowRightSLine size={25} className="rotate-180" />
          <span className="mx-1 underline">Back to News</span>
        </h1>
      </div>
      <div className="w-full max-w-[88.375rem] px-6 mx-auto ">
        <Image
          className="h-[300px]"
          src="/imgs/black-kite-milvus-migrans-sky.jpg"
          alt="bird"
          height={400}
          width={1350}
        />
      </div>
      <div className="w-full max-w-[88.375rem] px-6 mx-auto my-10">
        <h2 className="text-xl font-semibold">
          SERB Raising A Fund Of 2.7M In Oman
        </h2>
        <h5 className="text-xl my-1">09-12-2023</h5>
        <p className="my-5">
          stc Group, the engine of digital transformation in the region, took
          part in the “Seamless Saudi Arabia 2023” exhibition and conference
          held in Riyadh. Over 500 exhibiting companies, both local and
          international, along with 2000 company representatives and 300
          speakers, convened at the conference. The group’s primary focus
          revolved around its position as a digital transformation engine for
          fintech, e-commerce, retail, and payments industries, achieved via
          avant-garde digital solutions
        </p>
        <p className="my-5">
          stc Group exhibited its digital and technical offerings, including
          implementing Standard and Soft POS through smart devices and payment
          systems. Additionally, stc provided ATM monitoring services and
          utilized VR technologies within the Metaverse. Notably, stc leveraged
          AI technologies for geographical analysis, fraud detection, Anti-Money
          Laundering, and contact points, among other applications.
        </p>
        <p className="my-5">
          Channels by stc expanded its offerings by leveraging its logistics
          arm, dal, to provide last-mile solutions. The company also entered
          into strategic agreements with key players in the market, including
          Jahez Company, Alinma Bank, and Basalah e-commerce platform, to
          solidify its position and ensure sustainability in the market. The
          services and products offered by myStore were also part of this
          expansion
        </p>
        <p className="my-5">
          During the conference, stc Group entered two MOUs with Saudi Bright
          Ware, a company specializing in Software Development and System
          Integration as well as payment solutions. The MOU will facilitate
          financial and payment services for stc’s business sector clients.
        </p>
        <p className="my-5">
          In addition, stc has entered a second MOU with Paytabs, a company that
          specializes in providing payment solutions for business transactions
          between corporations and organizations. The MOU encompasses the
          exploration of ways to enable financial services and the discussion of
          payment system development. Moreover, the MOU aims to enhance the
          innovation prospects in fintech and provide a payment gateway service
          designed explicitly for stc within the business sector
        </p>
        <p className="my-5">
          stc’s participation in the “Seamless Saudi Arabia 2023” conference and
          exhibition is a testament to its dedication to revolutionizing the
          fintech, e-commerce, retail, and payments landscape. The group is
          channelling its resources towards developing cutting-edge payment
          solutions that optimize digital payment platforms for individuals and
          the corporate sector across diverse industries. stc remains committed
          to empowering various sectors digitally and advancing progress by
          providing state-of-the-art solutions.
        </p>
      </div>
    </section>
  );
}

export default Index;
