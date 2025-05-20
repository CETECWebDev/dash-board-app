import React from 'react'
import dynamic from 'next/dynamic';
<<<<<<< HEAD
=======
import mockDevices from '@/data/db';
import DataCenterCard from '../module/DataCenterCard';

>>>>>>> 9913fb1 (create DataChart)
const MapView = dynamic(() => import('@/components/module/MapView'), {
  ssr: false,
});

export default function MainDashboard() {
<<<<<<< HEAD
  return (
    <div className='p-5'>
        <MapView />
=======
  const devices = mockDevices;
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);

  return (
    <div className="p-5 flex gap-5">
      <MapView
        devices={devices}
        selectedDevice={selectedDevice}
        setSelectedDevice={setSelectedDevice}
        className="flex-1"
      />
      <DataCenterCard />
>>>>>>> 9913fb1 (create DataChart)
    </div>
  );
}
