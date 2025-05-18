import React from 'react'
import dynamic from 'next/dynamic';
const MapView = dynamic(() => import('@/components/module/MapView'), {
  ssr: false,
});

export default function MainDashboard() {
  return (
    <div className='p-5'>
        <MapView />
    </div>
  )
}
