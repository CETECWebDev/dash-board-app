import BarChart from '@/components/module/Charts/BarChart'
import LineChart from '@/components/module/Charts/LineChart'
import CircularProgress from '@/components/module/Charts/RadialChart'
import React from 'react'
import { useTranslation } from 'react-i18next'
import DeviceStatusCountCard from './DeviceStatusCountCard'
import BarChartAlt from '@/components/module/Charts/BarChartAlt'

export default function ChartsGrid() {

  const { t } = useTranslation()

  const data01 = [
    10, 15, 20, 40, 25, 30,
    35, 15, 10, 15, 35, 25
  ]

  const data02 = [
    10, 15, 20, 30, 25, 10,
    35, 25, 25, 30, 25, 20
  ]

  return (
    <div className='px-5 pb-5 gap-5 grid grid-cols-1 lg:grid-cols-2'>

      <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
        <LineChart color={"#008ffb"} title={t('common.weekendTitle')} data={data01} />
      </div>
      <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
        <LineChart color={"#00e396"} title={t('common.week')} data={data02} />
      </div>
      <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg'>
        <BarChartAlt />
      </div>
      <div className='flex flex-col  lg:flex-row flex-grow items-center gap-5 pe-5 w-full'>
        <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg w-full lg:w-1/2'>
          <CircularProgress title={t('common.increasePredictNextYear')} value={75} />
        </div>
        <div className='h-[clamp(300px,19dvw,600px)] p-5 bg-[var(--colCard)] rounded-xl shadow-lg w-full lg:w-1/2'>
          <DeviceStatusCountCard />
        </div>
      </div>

    </div>
  )
}