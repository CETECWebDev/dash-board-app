import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import mockDevices from '@/data/db';
import LineChart from '../module/LineChart';
import DeviceDataCard from '../module/DeviceDataCard';
const MapView = dynamic(() => import('@/components/module/MapView'), {
  ssr: false,
});

export default function MainDashboard() {

  const devices = mockDevices
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);


  return (
    <>
    <div className='p-5'>

      <div className='flex lg:flex-row flex-col-reverse gap-2 mb-3'>
        <MapView devices={devices} selectedDevice={selectedDevice} setSelectedDevice={setSelectedDevice}/>
        <DeviceDataCard selectedDevice={selectedDevice} />
      </div>

      <LineChart/>

    </div>

  
    </>

  )
}
