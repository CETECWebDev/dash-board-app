import React from 'react'

export default function SideBar() {
  return (
    <div className='fixed left-0 top-0 h-screen w-[300px] bg-[var(--colCard)] text-[var(--coTextA)] shadow-md flex flex-col gap-6'>
      
      {/* اطلاعات کاربر */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden">
          <img src="/img2.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-lg font-bold">Elvin Sherman</h1>
        <span className="text-xs text-gray-300">SUPERADMIN</span>
      </div>

      {/* ناوبری اصلی */}
      <div>
        <h2 className="text-sm font-semibold text-gray-400 mb-2">MAIN NAVIGATION</h2>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Dashboard</a></li>
          <li><a href="#" className="hover:text-blue-400">Domains</a></li>
          <li><a href="#" className="hover:text-blue-400">Servers</a></li>
          <li><a href="#" className="hover:text-blue-400">E-Mail</a></li>
          <li><a href="#" className="hover:text-blue-400">Data Bases</a></li>
        </ul>
      </div>

      {/* تنظیمات */}
      <div>
        <h2 className="text-sm font-semibold text-gray-400 mb-2">SETTINGS</h2>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Settings</a></li>
          <li><a href="#" className="hover:text-blue-400">Analytics</a></li>
        </ul>
      </div>

      {/* اعلان‌ها */}
      <div>
        <h2 className="text-sm font-semibold text-gray-400 mb-2">NOTIFICATIONS</h2>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Tickets</a></li>
          <li><a href="#" className="hover:text-blue-400">Alerts</a></li>
        </ul>
      </div>
    
  
    </div>
  )
}
