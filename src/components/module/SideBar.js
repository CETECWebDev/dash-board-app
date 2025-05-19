import { useTheme } from 'next-themes';
import React from 'react'
import { FaHome, FaMoon, FaGlobe, FaServer, FaEnvelope, FaDatabase, FaCog, FaChartLine } from "react-icons/fa"
import { IoMdSunny } from "react-icons/io";

export default function SideBar() {

  const { theme, setTheme } = useTheme();


  return (
    <div className='flex fixed left-0 top-0 h-screen w-[300px] bg-[var(--colCard)] text-[var(--coTextA)] shadow-md flex-col gap-5 p-4 z-50 overflow-y-auto select-none'>

      {/* controls */}

      <div className='text-xl'>
        <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='cursor-pointer'>{ theme === 'dark' ? <IoMdSunny/> : <FaMoon/> }</div>
      </div>

      {/* info user */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden">
          <img src="/img2.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-lg font-bold text-center">Elvin Sherman</h1>
        <span className="text-xs text-gray-300">SUPERADMIN</span>
      </div>

      {/* ناوبری و تنظیمات */}
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-400 mb-2">MAIN NAVIGATION</h2>
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-400"><FaHome className="text-blue-500" />Dashboard</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-400"><FaGlobe className="text-green-500" />Domains</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-400"><FaServer className="text-purple-500" />Servers</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-400"><FaEnvelope className="text-red-500" />E-Mail</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-400"><FaDatabase className="text-yellow-500" />Data Bases</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-400 mb-2">SETTINGS</h2>
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-400"><FaCog className="text-gray-400" />Settings</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-400"><FaChartLine className="text-indigo-500" />Analytics</a></li>
          </ul>
        </div>
      </div>


    </div>
  );
}
