import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { FaArrowUp } from 'react-icons/fa';
import mockDevices from '@/data/db';
// import mockDevices from '@/data/altDB';
import DeviceDataCard from '../../module/Cards/DeviceDataCard';
import { translate } from '@/language/language';
import { useDirectionContext } from '@/context/DirectionContext';
import DeviceStatusCount from '@/components/module/Cards/DeviceStatusCount';
import OverallAreaChart from '@/components/module/Charts/OverallAreaChart';

const MapView = dynamic(() => import('@/components/module/Maps/MapView'), {
  ssr: false,
});

export default function MainDashboard() {
  const devices = mockDevices;
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);
  const [activeDeviceCount, setActiveDeviceCount] = useState(0);
  const { dir } = useDirectionContext();

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

     <div className='flex flex-col-reverse md:flex-row w-full gap-2'>
  <div className='h-[40dvh] md:h-auto md:w-[75%]'>
    <OverallAreaChart
      shadow={true}
      labelSize={translate(dir, 'lineChart.full_labelsize')}
    />
  </div>
  <div className='md:w-[25%]'>
    <DeviceStatusCount
      devices={devices}
      activeDeviceCount={activeDeviceCount}
      setActiveDeviceCount={setActiveDeviceCount}
    />
  </div>
</div>


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
