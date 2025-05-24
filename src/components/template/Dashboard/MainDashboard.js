import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { FaArrowUp } from 'react-icons/fa';
import mockDevices from '@/data/db';
// import mockDevices from '@/data/altDB';
import LineChart from '../../module/Charts/LineChart';
import DeviceDataCard from '../../module/Cards/DeviceDataCard';

const MapView = dynamic(() => import('@/components/module/Maps/MapView'), {
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

        <LineChart h={400} shadow={true} labelSize={14} />

        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 rounded-full shadow-md z-50 bg-[var(--colCard)] text-[var(--colTextA)] border-2 border-[var()] hover:text-[var(--textHover)] hover:border-[var(--textHover)]"

          aria-label="Scroll to top"
        >
          <FaArrowUp size={16} />
        </button>

      </div>
    </>
  );
}
