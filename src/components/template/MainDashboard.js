import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { FaArrowUp } from 'react-icons/fa'; // ← ایمپورت آیکون

import mockDevices from '@/data/db';
import LineChart from '../module/LineChart';
import DeviceDataCard from '../module/DeviceDataCard';

const MapView = dynamic(() => import('@/components/module/MapView'), {
  ssr: false,
});

export default function MainDashboard() {
  const devices = mockDevices;
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <div className='p-5'>

        <div className='flex lg:flex-row flex-col-reverse gap-2 mb-3'>
          <MapView
            devices={devices}
            selectedDevice={selectedDevice}
            setSelectedDevice={setSelectedDevice}
          />
          <DeviceDataCard selectedDevice={selectedDevice} />
        </div>

        <LineChart />

      
       <button
  onClick={scrollToTop}
  className="fixed bottom-4 right-4 p-2 rounded-full shadow-md z-50 bg-[var(--colCard)] text-orange-500"
  style={{
    border: '1.5px solid orange',
  }}
>
  <FaArrowUp size={16} />
</button>

      </div>
    </>
  );
}
