import React from 'react'
import { useTranslation } from 'react-i18next';
import BarChart from '@/components/module/Charts/BarChart';
import DonutChart from '../../module/Charts/DonutChart';
import DeviceInfoShow from './DeviceInfoShow';

export default function DeviceDataCard({ selectedDevice }) {

  const { t } = useTranslation()

  return (
    <div className='w-full flex flex-col gap-5 flex-shrink-0 lg:w-[clamp(250px,20dvw,310px)] text-[var(--colTextA)] h-auto rounded-xl select-none'>

      {/* Head */}

      <DeviceInfoShow t={t} selectedDevice={selectedDevice} />


      {/* Charts */}
      <div className='w-full flex justify-center h-[clamp(187px,15dvw,400px)] lg:px-5 bg-[var(--colCard)] p-5 rounded-xl shadow-md'>
        <BarChart />
      </div>
      <div className='w-full flex justify-center h-[clamp(187px,15dvw,400px)] lg:px-5 bg-[var(--colCard)] p-5 rounded-xl shadow-md flex-grow'>
        <DonutChart />
      </div>


    </div>
  )
}
