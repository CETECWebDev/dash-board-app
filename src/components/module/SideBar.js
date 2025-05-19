import React from 'react';
import {
  FaHome,
  FaGlobe,
  FaServer,
  FaEnvelope,
  FaDatabase,
  FaCog,
  FaChartLine,
  FaTicketAlt,
  FaBell,
  FaQuestionCircle
} from 'react-icons/fa';

export default function SideBar() {
  return (
    <div className='hidden lg:flex fixed left-0 top-0 h-screen w-[260px] bg-[var(--colCard)] text-[var(--coTextA)] shadow-md flex-col justify-between p-4 z-50'>

      {/* info user */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden">
          <img src="/img2.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-lg font-bold text-center">Elvin Sherman</h1>
        <span className="text-xs text-gray-300">SUPERADMIN</span>
      </div>

      {/* ناوبری و تنظیمات */}
      <div className="flex flex-col gap-6 mt-6">
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

      {/* اعلان‌ها + Help Center */}
      <div className="flex flex-col gap-4 mt-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-400 mb-2">NOTIFICATIONS</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center justify-between hover:text-blue-400">
                <div className="flex items-center gap-2">
                  <FaTicketAlt className="text-orange-400" />
                  Tickets
                </div>
                <span className="text-xs bg-orange-400 text-white px-2 py-0.5 rounded-full">12</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-blue-400">
                <FaBell className="text-pink-400" />
                Alerts
              </a>
            </li>
          </ul>
        </div>

        {/* Help Center */}
        <div className="border-t border-gray-700 pt-4 flex justify-center items-center">
          <a href="#" className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400">
            <FaQuestionCircle className="text-blue-400" />
            Help Center
          </a>
        </div>
      </div>

    </div>
  );
}
