import Image from "next/image";

function Nav() {
  return (
    <nav className="bg-purple-900">
      <div className="w-full max-w-[88.375rem] px-6 mx-auto flex items-center justify-between">
        <Image
          src="/svgs/logo.svg"
          height={50}
          width={95}
          className="object-contain py-2"
          alt="Logo Img!"
        />
        <ul className="flex items-center text-white">
          <li className="py-2 mr-3.5">Plans</li>
          <li className="py-2 mr-3.5">About Us</li>
          <li className="py-2 mr-3.5">Add-Ons </li>
          <li className="py-2 mr-3.5">Careers</li>
          <li className="py-2 mr-3.5">
            <button className="bg-rose-500 py-1 px-3 rounded-md">
              My Serb
            </button>
          </li>
          <li className="flex items-center">
            <span>Malik</span>
            <Image
              src="/imgs/blank.png"
              height={40}
              width={40}
              className="object-contain rounded-full ml-2"
              alt="User Img!"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
