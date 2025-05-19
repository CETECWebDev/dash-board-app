import { useTheme } from 'next-themes';
import React from 'react'

export default function SideBar() {

  const { theme, setTheme } = useTheme();


  return (
    <div className='hidden lg:flex fixed left-0 top-0 h-screen w-[260px] bg-[var(--colCard)] text-[var(--coTextA)] shadow-md flex-col justify-between p-4 z-50 overflow-y-auto'>

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
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-400"><i className="fa fa-home text-blue-500"></i>Dashboard</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-400"><i className="fa fa-globe text-green-500"></i>Domains</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-400"><i className="fa fa-server text-purple-500"></i>Servers</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-400"><i className="fa fa-envelope text-red-500"></i>E-Mail</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-400"><i className="fa fa-database text-yellow-500"></i>Data Bases</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-400 mb-2">SETTINGS</h2>
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-400"><i className="fa fa-cog text-gray-400"></i>Settings</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:text-blue-400"><i className="fa fa-chart-line text-indigo-500"></i>Analytics</a></li>
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
                  <i className="fa fa-ticket-alt text-orange-400"></i>
                  Tickets
                </div>
                <span className="text-xs bg-orange-400 text-white px-2 py-0.5 rounded-full">12</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-blue-400">
                <i className="fa fa-bell text-pink-400"></i>
                Alerts
              </a>
            </li>
              <li><a href="#" className="hover:text-blue-400" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Change Theme</a></li>
          </ul>
        </div>

        {/* Help Center */}
        <div className="border-t border-gray-700 pt-4 flex justify-center items-center">
          <a href="#" className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400">
            <i className="fa fa-question-circle text-blue-400"></i>
            Help Center
          </a>
        </div>
      </div>

   

    </div>
  );
}
