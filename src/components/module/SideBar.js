import { useTheme } from "next-themes";
import React, { useState } from "react";
import {
  FaHome,
  FaMoon,
  FaGlobe,
  FaServer,
  FaEnvelope,
  FaDatabase,
  FaCog,
  FaChartLine,

} from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

import { PiAlignRightFill } from "react-icons/pi";
import { PiAlignLeftFill } from "react-icons/pi";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function SideBar() {
  const { theme, setTheme } = useTheme();
  const [isRight, setIsRight] = useState(false); // موقعیت سایدبار

  return (
    <div
      className={`hidden lg:flex h-screen w-[260px] bg-[var(--colCard)] text-[var(--coTextA)] shadow-md flex-col justify-between p-4 overflow-y-auto transition-all duration-300 ${
        isRight ? "order-last" : "order-first"
      }`}
    >
      {/* دکمه تغییر جهت */}

      <div className="flex w-full gap-2">
        <button
          onClick={() => setIsRight(!isRight)}
          className=" border p-3  rounded-full  color-[var(--colTextB)]]"
          title="جابجایی سایدبار"
        >
          {isRight ? <PiAlignLeftFill /> : <PiAlignRightFill />}
        </button>
        <div className="text-xl border p-2 rounded-full">
          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer flex items-center justify-center p-1"
          >
            {theme === "dark" ? <IoMdSunny /> : <BsFillMoonStarsFill />}
          </div>
        </div>
      </div>

      {/* info user */}
      <div className="flex flex-col items-center gap-2 mt-6 ">
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

      {/* ناوبری و تنظیمات */}
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-400 mb-2">
            MAIN NAVIGATION
          </h2>
          <ul className="space-y-2">
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

        <div>
          <h2 className="text-sm font-semibold text-gray-400 mb-2">SETTINGS</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[var(--textHover)]"
              >
                <FaCog className="text-gray-400" />
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[var(--textHover)]"
              >
                <FaChartLine className="text-indigo-500" />
                Analytics
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* اعلان‌ها + تغییر تم */}
      <div className="flex flex-col gap-4 mt-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-400 mb-2">
            NOTIFICATIONS
          </h2>
          <ul className="space-y-2">
           
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[var(--textHover)]"
              >
                <i className="fa fa-bell text-pink-400"></i>
                Alerts
              </a>
            </li>
         
          </ul>
        </div>

        <div className="border-t border-gray-700 pt-4 flex justify-center items-center">
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-[var(--textHover)]"
          >
            <i className="fa fa-question-circle text-blue-400"></i>
            Help Center
          </a>
        </div>
      </div>
    </div>
  );
}
