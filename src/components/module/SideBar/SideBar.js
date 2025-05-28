import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaHome, FaDatabase, FaUserAlt } from "react-icons/fa";
import { IoMdSunny, IoIosMenu , IoIosArrowBack  } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdTranslate, MdDevices } from "react-icons/md";
import { CiRoute } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { useDirectionContext } from "@/context/DirectionContext";
import { translate } from "@/language/language"
import Link from "next/link";
import { useSidebar } from "@/context/SidebarContext";
import { TbReport } from "react-icons/tb";


export default function SideBar() {


  const { theme, setTheme } = useTheme();
  const { dir, toggleDirection } = useDirectionContext();
  const [mounted, setMounted] = useState(false);
  const { isSidebarOpen } = useSidebar()
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const translateClass = isSidebarOpen
    ? "translate-x-0"
    : dir === "rtl"
      ? "translate-x-full"
      : "-translate-x-full";

  return (
    <>

   

      {/* Side Bar */}

      <div
        className={`z-[99999]
          fixed top-0 h-screen w-[240px] bg-[var(--colCard)] text-[var(--colTextA)] shadow-md flex-col p-4 overflow-y-auto
          ${dir === "rtl" ? "right-0 left-auto" : "left-0 right-auto"}
          transition-transform duration-300 ease-in-out
          ${translateClass}
        `}
      >


        <div className="flex flex-col items-center justify-center">
          <img src="/cetec.png" alt="" />
          <div>شرکت قطب دانش</div>
        </div>


        {/* info user */}
        <div className="flex flex-col items-center gap-2 mt-7 ">
          <div className="w-20 h-20  rounded-full overflow-hidden ">
            <svg
              fill="currentColor"
              id="Layer_1" data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 122.88">
              <title>my-account</title>
              <path d="M61.44,0a61.59,61.59,0,0,1,56.78,38l.07.18A61.43,61.43,0,0,1,18,104.88h0A61.54,61.54,0,0,1,4.66,84.94l-.07-.19A61.35,61.35,0,0,1,18,18h0A61.54,61.54,0,0,1,37.94,4.66l.18-.07A61.25,61.25,0,0,1,61.44,0ZM49.54,79.32c-2.14-1.83-4.2-3.89-4.54-7.65h-.28a3.79,3.79,0,0,1-1.87-.49,5.1,5.1,0,0,1-2.05-2.49c-.95-2.18-1.7-7.91.68-9.55L41,58.85l0-.64c-.1-1.15-.12-2.55-.14-4-.09-5.39-.2-11.91-4.53-13.22l-1.85-.56,1.22-1.51a70,70,0,0,1,10.84-11c4.17-3.28,8.41-5.47,12.56-6.1A15.09,15.09,0,0,1,71.3,25.22a23,23,0,0,1,3.27,3.28,13.93,13.93,0,0,1,9.78,5.72,19.89,19.89,0,0,1,3.18,6.42,22.34,22.34,0,0,1,.86,7.28,17.54,17.54,0,0,1-5.08,11.81,3.62,3.62,0,0,1,1.58.4c1.81,1,1.87,3.07,1.39,4.83-.47,1.47-1.06,3.17-1.63,4.6C84,71.5,83,71.86,81,71.65c-.08,4.18-2.8,6.18-5.47,8.49l.08.12a31.89,31.89,0,0,0,3.51,4.52.75.75,0,0,1,.12.14c6.19,4.38,19.56,5.44,25.34,8.66l.23.14a54.09,54.09,0,1,0-86.83,0h0l.23-.14C24,90.36,40.73,89.3,47,85a19.43,19.43,0,0,0,1.43-2.77c.41-1,.81-2,1.15-2.86Z" />
            </svg>


            {/* <img
              src="/img2.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            /> */}
          </div>
          <h1 className="text-lg font-bold text-center">کاربر جدید</h1>
          <span className="text-xs text-gray-300">ادمین</span>
        </div>

        {/* navigation */}
        <div className="flex flex-col items-start pl-5 mt-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-gray-400 mb-2">
              {translate(dir, "sidebar.navigation")}
            </h2>
            <ul className="space-y-2 flex flex-col gap-3">
              {[
                {
                  icon: <FaHome className="text-blue-500" />,
                  label: translate(dir, "sidebar.dashboard"),
                  url: "/",
                },
                {
                  icon: <MdDevices className="text-green-500" />,
                  label: translate(dir, "sidebar.devices"),
                  url: "/devices",
                },
                {
                  icon: <CiRoute className="text-red-500" />,
                  label: translate(dir, "sidebar.roads"),
                  url: "/roads",
                },
                {
                  icon: <FaUserAlt className="text-purple-500" />,
                  label: translate(dir, "sidebar.users"),
                  url: "/employees",
                },
                {
                  icon: <TbReport />,
                  label: translate(dir, "sidebar.reports"),
                  url: '#'
                }

                
              ].map(({ icon, label, url }) => {
                const isActive =
                  url === "/"
                    ? pathname === "/"
                    : url && pathname.startsWith(url);

                return (
                  <li key={label}>
                    <Link
                      href={url ?? "/"}
                      className={`flex items-center gap-2 pb-1 border-b-2 transition-colors duration-200 ${isActive
                        ? "border-[var(--textHover)]  font-semibold"
                        : "border-transparent hover:text-[var(--textHover)]"
                        }`}
                      
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
              {translate(dir, "sidebar.settings")}
            </h2>
            <ul className="space-y-2 flex flex-col gap-3">
              <li>
                <div className="flex w-full gap-2">
                  <button
                    suppressHydrationWarning
                    className="linkHover hover:text-[var(--textHover)] hover:border-[var(--textHover)] border flex justify-center items-center rounded-full color-[var(--colTextB)] w-10 h-10"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "dark" ? <IoMdSunny /> : <BsFillMoonStarsFill />}
                  </button>

                  <button
                    onClick={() => toggleDirection()}
                    className="linkHover hover:text-[var(--textHover)] hover:border-[var(--textHover)] border flex justify-center items-center rounded-full text-[var(--colTextB)] w-10 h-10"
                    title="Toggle Direction"
                  >
                    <MdTranslate />
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
