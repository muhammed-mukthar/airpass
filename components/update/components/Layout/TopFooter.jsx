import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import Link from "next/link";

function TopFooter() {
  return (
    <section className="pt-16 pb-4 bg-purple-900 text-white">
      <div className="w-full max-w-[88.375rem] px-6 mx-auto ">
        <div className="grid grid-cols-3 gap-3">
          <ul>
            <li className="text-2xl mb-3.5 font-semibold">About Serb</li>
            <li className="mb-3 text-lg">
              <Link href="/about">Who We Are ?</Link>
            </li>
            <li className="mb-3 text-lg">
              <Link href="/news">News ?</Link>
            </li>
            <li className="mb-3 text-lg">
              <Link href="/careers">Careers</Link>
            </li>
          </ul>
          <ul>
            <li className="text-2xl mb-3.5 font-semibold">Popular Pages</li>
            <li className="mb-3 text-lg text-gray-300">Plans</li>
            <li className="mb-3 text-lg text-gray-300">Air Pass</li>
            <li className="mb-3 text-lg text-gray-300">Add-Ons</li>
          </ul>
          <ul>
            <li className="text-2xl mb-3.5 font-semibold">Contact Us</li>
            <li className="mb-3 text-lg">support@serbglobal.com</li>
            <li className="mb-3 text-lg">+968 98841884</li>
            <li className="mb-3 text-lg">
              Civil Aviation Authority, Muscat Sultanate of Oman
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end mt-16">
          <AiOutlineTwitter size={35} className="mx-2" />
          <AiOutlineInstagram size={35} className="mx-2" />
          <AiOutlineYoutube size={35} className="mx-2" />
          <RiLinkedinFill size={35} className="mx-2" />
        </div>
      </div>
    </section>
  );
}

export default TopFooter;
