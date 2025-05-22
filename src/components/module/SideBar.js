// src/components/module/SideBar.js

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaGlobe,
  FaServer,
  FaEnvelope,
  FaDatabase,
} from "react-icons/fa";
import { IoMdSunny, IoIosMenu } from "react-icons/io";
import { PiAlignRightFill, PiAlignLeftFill } from "react-icons/pi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useDirectionContext } from "@/context/DirectionContext";
import { MdTranslate } from "react-icons/md";
import { CiRoute } from "react-icons/ci";
import { MdDevices } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

export default function SideBar() {
  const { theme, setTheme } = useTheme();
  const { dir, toggleDirection } = useDirectionContext();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleMenu = () => setIsOpen(!isOpen);

  const translateClass = isOpen
    ? "translate-x-0"
    : dir === "rtl"
    ? "translate-x-full"
    : "-translate-x-full";

  const backdropClass = isOpen
    ? "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden backdrop-blur-md"
    : "hidden";

  return (
    <>
      {/* Hamburger menu */}
      <button
        onClick={toggleMenu}
        className={`block mt-5 p-2 rounded-md bg-[var(--colCard)] text-[var(--coTextA)] shadow-md lg:hidden ${
          dir === "rtl" ? "mr-5" : "ml-5"
        }`}
        aria-label="Toggle Menu"
      >
        {isOpen ? "✕" : <IoIosMenu size={24} />}
      </button>

      {/* Back drop Effect */}
      <div
        className={backdropClass}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Side Bar */}
      <div
        className={`z-[99999]
          fixed top-0 h-screen w-[300px] bg-[var(--colCard)] text-[var(--colTextA)] shadow-md flex-col p-4 overflow-y-auto
          ${dir === "rtl" ? "right-0 left-auto" : "left-0 right-auto"}
          transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${translateClass}
        `}
      >
        {/* info user */}
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

        {/* navigation */}
        <div className="flex flex-col items-start pl-5 mt-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-gray-400 mb-2">
              {dir === "ltr" ? "Main Navigation" : "منوی ناوبری"}
            </h2>
            <ul className="space-y-2 flex flex-col gap-3">
              {[
                {
                  icon: <FaHome className="text-blue-500" />,
                  label: dir === "ltr" ? "Dashboard" : "داشبورد",
                  url: "/",
                },
                {
                  icon: <MdDevices  className="text-green-500" />,
                  label: dir === "ltr" ? "Devices" : "دستگاه ها",
                  url: "/devices",
                },
               {
                  icon: <CiRoute  className="text-red-500" />,
                  label: dir === "ltr" ? "Roads" : "مسیرها",
                  url: "/roads",
                },
                {
                  icon: <FaUserAlt  className="text-purple-500" />,
                  label: dir === "ltr" ? "Employees" : "کاربرها",
                  url: "/employees",
                },
             
                {
                  icon: <FaDatabase className="text-yellow-500" />,
                  label: dir === "ltr" ? "Databases" : "دیتابیس ها",
                  url: "#",
                },
              ].map(({ icon, label, url }) => {
                 const isActive =
                  url === "/"
                  ? pathname === "/" // فقط اگه دقیقاً صفحه اصلی بود
                  : url && pathname.startsWith(url); // برای بقیه لینک‌ها

                return (
                  <li key={label}>
                    <Link
                      href={url ?? "/"}
                      className={`flex items-center gap-2 pb-1 border-b-2 transition-colors duration-200 ${
                        isActive
                          ? "border-[var(--textHover)]  font-semibold"
                          : "border-transparent hover:text-[var(--textHover)]"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {icon}
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* settings */}
        <div className="flex flex-col items-start pl-5 mt-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-gray-400 mb-2">
             {dir === "ltr" ? "Setting" : "تنظیمات"}
            </h2>
            <ul className="space-y-2 flex flex-col gap-3">
              <li>
                <div className="flex w-full gap-2">
                  <button
                    suppressHydrationWarning
                    className="hover:text-[var(--textHover)] hover:border-[var(--textHover)] border flex justify-center items-center rounded-full color-[var(--colTextB)] w-10 h-10"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "dark" ? <IoMdSunny /> : <BsFillMoonStarsFill />}
                  </button>

                  <button
                    onClick={() => toggleDirection()}
                    className="hover:text-[var(--textHover)] hover:border-[var(--textHover)] border flex justify-center items-center rounded-full text-[var(--colTextB)] w-10 h-10"
                    title="Toggle Direction"
                  >
                    {dir === "ltr" ? <MdTranslate /> : <MdTranslate />}
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
