import deviceDataCardContent from '@/content/deviceDataCardContent';
import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { MdDirections } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";
import { FaRoad } from "react-icons/fa";
import BarChart from '@/components/module/Charts/BarChart';
import DonutChart from '../../module/Charts/DonutChart';

export default function DeviceDataCard({ selectedDevice }) {

  const { t } = useTranslation()

  return (
    <div className='w-full flex-shrink-0 lg:w-[clamp(250px,20dvw,310px)] text-[var(--colTextA)] bg-[var(--colCard)] h-auto rounded-xl shadow-md select-none'>

      {/* Head */}

      <div className='flex items-center justify-between p-5'>
        <div className='flex items-center justify-center px-6 py-2 border-2 border-[var(--colTextA)] rounded-full'>{selectedDevice.name}</div>
        <Link  target="_blank" href={`https://www.google.com/maps/dir/?api=1&destination=${selectedDevice.lat},${selectedDevice.long}`} className='btnHover flex items-center justify-center p-1 mt-1 border-2 border-[var(--colTextA)] rounded-full'> <MdDirections className='text-2xl' /> </Link>
      </div>

      {/* Body and Details */}

      <div className='flex flex-col gap-2 px-5 mt-3 mb-7 text-[clamp(12px,0.9dvw,15px)]'>
        <div className='flex items-center gap-2'> <GrStatusGoodSmall className={`${selectedDevice.status ? 'text-green-500' : 'text-red-700'}`} /> {t(deviceDataCardContent.deviceDetail.status.textKey)} : {selectedDevice.status ? t(deviceDataCardContent.status.active.textKey) : t(deviceDataCardContent.status.deactive.textKey)} </div>
        <div className='flex items-center gap-2'> <FaRoad /> {t(deviceDataCardContent.deviceDetail.road.textKey)} : {selectedDevice.location} </div>
      </div>

      {/* Charts */}
      <div className='w-full px-[20%] flex justify-center h-[clamp(187px,27dvh,250px)] lg:px-5'>
        <BarChart />
      </div>
      <div className='w-full h-[clamp(180px,27dvh,250px)] px-5 mb-7 mt-5'>
        <DonutChart  />
      </div>


    </div>
  )
}
