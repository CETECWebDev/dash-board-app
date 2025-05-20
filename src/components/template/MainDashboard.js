import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import mockDevices from '@/data/db';
import LineChart from '../module/LineChart';
const MapView = dynamic(() => import('@/components/module/MapView'), {
  ssr: false,
});

export default function MainDashboard() {

  const devices = mockDevices
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);


  return (
    <>
    <div className='p-5'>
        <MapView devices={devices} selectedDevice={selectedDevice} setSelectedDevice={setSelectedDevice}/>
    </div>

    <LineChart/>
    </>

  )
}
