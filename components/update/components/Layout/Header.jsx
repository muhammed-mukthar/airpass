import { useState } from "react";

function Header() {
  const [pilot, setPilot] = useState(true);
  return (
    <header className="bg-purple-900 text-white bg-opacity-40">
      <div className="w-full max-w-[88.375rem] px-6 mx-auto flex items-center justify-between">
        <ul className="flex items-center">
          <li
            onClick={() => setPilot(true)}
            className={`py-2 ${
              pilot && "border-b border-b-white"
            } cursor-pointer`}
          >
            Pilot
          </li>
          <li
            onClick={() => setPilot(false)}
            className={`py-2 ${
              !pilot && "border-b border-b-white"
            } mx-4 cursor-pointer`}
          >
            EnterPrise
          </li>
        </ul>
        <ul className="flex items-center">
          <li className="py-2">English</li>
          <li className="py-2 mx-4"> | </li>
          <li className="py-2">عربى</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
