import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaGlobe,
  FaServer,
  FaEnvelope,
  FaDatabase,
} from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { PiAlignRightFill } from "react-icons/pi";
import { PiAlignLeftFill } from "react-icons/pi";
import { BsFillMoonStarsFill } from "react-icons/bs";

import { useDirection } from "@/context/DirectionContext"; 

export default function SideBar() {

  const { theme, setTheme } = useTheme();
  const { dir, toggleDirection } = useDirection(); // 👈 اینو استفاده کن
  const [mounted, setMounted] = useState(false);
  useEffect(() => { 
    setMounted(true);
  },[])

  if(!mounted) return null;

  






  return (
     <div
      className={`fixed top-0 h-screen w-[300px] bg-[var(--colCard)] text-[var(--coTextA)] shadow-md flex-col p-4 overflow-y-auto  ${
        dir === "rtl" ? "right-0 left-auto" : "left-0 right-auto"
      }`}
    >
     

      {/* info user start*/}
      <div className="flex flex-col items-center gap-2 mt-7 ">
        <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden ">
          <img
            src="/img2.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-lg font-bold text-center">Elvin Sherman</h1>
        <span className="text-xs text-gray-300">SUPERADMIN</span>
      </div>
      {/* user infor end */}

      {/* navigation start */}
      <div className="flex flex-col items-start pl-5 mt-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-gray-400 mb-2">
            MAIN NAVIGATION
          </h2>
          <ul className="space-y-2 flex flex-col gap-3">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[var(--textHover)]"
              >
                <FaHome className="text-blue-500" />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[var(--textHover)]"
              >
                <FaGlobe className="text-green-500" />
                Domains
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[var(--textHover)]"
              >
                <FaServer className="text-purple-500" />
                Servers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[var(--textHover)]"
              >
                <FaEnvelope className="text-red-500" />
                E-Mail
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[var(--textHover)]"
              >
                <FaDatabase className="text-yellow-500" />
                Data Bases
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* navigation end */}

      {/* settings start */}
      <div className="flex flex-col items-start pl-5 mt-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-gray-400 mb-2">
            Settings
          </h2>
          <ul className="space-y-2 flex flex-col gap-3">
            <li>
              <div className="flex w-full gap-2">

                <button
                  suppressHydrationWarning
                  className=" border flex justify-center items-center  rounded-full  color-[var(--colTextB)] w-10 h-10"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                  {theme === 'dark' ? <IoMdSunny /> : <BsFillMoonStarsFill />}
                </button>


               <button
                  onClick={() => toggleDirection()}
                  className=" border flex justify-center items-center  rounded-full  color-[var(--colTextB)]] w-10 h-10"
                  title="جابجایی سایدبار"
                >
                  {dir=='ltr' ? <PiAlignLeftFill /> : <PiAlignRightFill />}
                </button>

              </div>
            </li>

          </ul>
        </div>
      </div>
      {/* settings end */}

    </div>
  );
}