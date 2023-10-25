import Image from "next/image";

function Index() {
  return (
    <section>
      <div className="w-full max-w-[88.375rem] px-6 mx-auto my-10 flex items-center justify-between">
        <h1 className="text-3xl font-semibold">SERB Careers </h1>
        <p className="max-w-[370px]">
          Join SERB: Where You Belong, Where We Excel Together
        </p>
      </div>
      <Image
        // className="birdImage"
        className="w-full h-[300px]"
        src="/imgs/black-kite-milvus-migrans-sky.jpg"
        alt="bird"
        height={400}
        width={1260}
      />
      <div className="w-full max-w-[88.375rem] px-6 mx-auto my-10">
        <h2 className="text-2xl font-semibold">Be part of SERB team</h2>
        {/* <h4 className="text-lg font-semibold my-3.5">SERB’s Aim</h4> */}
        <p className="my-2">
          At SERB, we aspire to attract and hire inspired talents who align with
          our ambitious vision to become a distinguished center that nurtures
          specialized business leaders in the drone sector contributing to the
          country's economic growth
        </p>
        <div className="my-7">
          <p>We seek to achieve our employment goals through :</p>
          <ul className="list-disc list-inside">
            <li>
              Knowledge Sharing: We encourage knowledge sharing among our team.{" "}
            </li>
            <li>
              Skill Enhancement: We continually improve our employees’ skills.{" "}
            </li>
            <li>
              Comprehensive Training: Our training programs foster continuous
              learning.{" "}
            </li>
            <li>
              Goal Alignment: Individual goals align with our organizational
              objectives.
            </li>
          </ul>
        </div>
        <p className="mb-5">
          If you're intrigued by any of the available positions or if you're
          considering a potential role with us down the road, we would be
          thrilled to receive your inquiry. You can choose a job title from the
          options provided, and we'll keep your information on file for future
          opportunities. Completing the application usually takes around 5-10
          minutes.
        </p>
        <table className="w-full text-center my-36">
          <thead className="bg-purple-900 text-white">
            <tr>
              <td className="p-3 font-semibold">Vacancy Id</td>
              <td className="p-3 font-semibold">Job Title</td>
              <td className="p-3 font-semibold">Department</td>
              <td className="p-3 font-semibold">Status</td>
              <td className="p-3 font-semibold">Apply</td>
            </tr>{" "}
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((i) => (
              <tr
                key={i}
                className="bg-white hover:bg-zinc-200 hover:text-zinc-600 border border-b-zinc-300 group"
              >
                <td className="p-3 group-hover:border group-hover:border-white cursor-pointer">
                  Voo {i}
                </td>
                <td className="p-3 group-hover:border group-hover:border-white cursor-pointer">
                  Project Manager
                </td>
                <td className="p-3 group-hover:border group-hover:border-white cursor-pointer">
                  Technology & Software
                </td>
                <td className="p-3 group-hover:border group-hover:border-white cursor-pointer">
                  Open vacancy
                </td>
                <td>
                  <button className="hover:bg-orange-600 transition-all duration-300 w-full p-2 hover:rounded-md hover:text-white">
                    Apply Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Index;
