import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";

function TopFooter() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <>
      {!isMobile && (
        <section className="pt-28 pb-6 bg-[#4B0177] text-white border-b border-b-white/30">
          <div className="max-w-[88.375rem]  w-full px-6 mx-auto">
            <div className="grid grid-cols-3 gap-3 900px:grid-cols-1 900px:text-center 900px:gap-16 px-36 900px:px-0">
              <ul>
                <li className="text-2xl 900px:text-2xl mb-3 font-normal">
                  About Serb
                </li>
                <li className="mb-2 text-lg 900px:text-xl tracking-[-0.32px] opacity-[76%] hover:opacity-100">
                  <Link href="/about">Who we are</Link>
                </li>
                <li className="mb-2 text-lg 900px:text-xl tracking-[-0.32px] opacity-[76%] hover:opacity-100">
                  <Link href="/about">What we do</Link>
                </li>
                <li className="mb-2 text-lg 900px:text-xl tracking-[-0.32px] opacity-[76%] hover:opacity-100">
                  <Link href="/news">Articles</Link>
                </li>
                <li className="text-lg 900px:text-xl tracking-[-0.32px] opacity-[76%] hover:opacity-100">
                  <Link href="/careers">Careers</Link>
                </li>
              </ul>
              <ul>
                <li className="text-2xl 900px:text-2xl mb-3 font-normal">
                  Popular Pages
                </li>
                <li className="mb-2 text-lg 900px:text-xl tracking-[-0.32px] opacity-[76%] hover:opacity-100">
                  <Link href="/plans">Plans</Link>
                </li>
                <li className="mb-2 text-lg 900px:text-xl tracking-[-0.32px] opacity-[76%] hover:opacity-100">
                  <Link href="/airpass">AirPass</Link>
                </li>
                <li className="text-lg 900px:text-xl tracking-[-0.32px] opacity-[76%] hover:opacity-100">
                  <Link href="/add-ons">Add-ons</Link>
                </li>
              </ul>
              <ul>
                <li className="text-2xl 900px:text-2xl mb-3 font-normal">
                  Contact Us
                </li>
                <li className="mb-2 text-lg 900px:text-xl tracking-[-0.32px] opacity-[76%] break-words">
                  <a href="mailto:support@serbglobal.com">
                    support@serbglobal.com
                  </a>
                </li>
                <li className="mb-2 text-lg 900px:text-xl tracking-[-0.32px] opacity-[76%]">
                  <a href="tel:+96898841884">+968 98841884</a>
                </li>
                <li className="text-lg 900px:text-xl tracking-[-0.32px] opacity-[76%]">
                  Civil Aviation Authority, Muscat Sultanate of Oman
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-end mt-32 900px:justify-between">
              <a
                href="https://x.com/serbglobal?s=21&t=GBZ48L5RatruvQx0h4MzNQ"
                target="_blank"
              >
                <RiTwitterXFill size={32} className="mx-2 cursor-pointer" />
              </a>
              <a
                href="https://instagram.com/serbglobal?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <AiOutlineInstagram size={32} className="mx-2 cursor-pointer" />
              </a>
              <a href="https://www.youtube.com/@serbglobal_" target="_blank">
                <AiFillYoutube size={27} className="mx-2 cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/company/serbglobal/"
                target="_blank"
              >
                <RiLinkedinFill size={32} className="mx-2 cursor-pointer" />
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default TopFooter;
