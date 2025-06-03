import useDevices from '@/stores/deviceStore';
import dynamic from 'next/dynamic';
import React from 'react'
import DeviceDataCard from './DeviceDataCard';
const MapView = dynamic(() => import('@/components/module/Maps/MapView'), {
  ssr: false,
});

export default function MapAndDataCard() {

  const { devices , selectedDevice , setSelectedDevice } = useDevices()

  return (
    <div className='px-5'>

      <div className='flex lg:flex-row flex-col-reverse gap-3 mb-3 w-full flex-shrink-0'>
        <MapView
          type={'monitoring'}
          devices={devices}
          selectedDevice={selectedDevice}
          setSelectedDevice={setSelectedDevice}
        />
        <DeviceDataCard selectedDevice={selectedDevice} />
      </div>



    </div>
  )
}
