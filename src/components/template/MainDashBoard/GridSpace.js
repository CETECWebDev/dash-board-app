import AreaChart from '@/components/module/Charts/AreaChart'
import React from 'react'
import DeviceStatusCountCard from './DeviceStatusCountCard'
import BarChart from '@/components/module/Charts/BarChart'

export default function GridSpace() {
    return (
        <div className='grid grid-cols-1 lg:[grid-template-columns:1fr_1fr_auto] px-5 mt-3 gridSpace place-content-center gap-y-3 lg:gap-3 w-full mb-5'>

            <div className='col-span-2 w-full flex gap-3  items-center'>
                <div className='w-[70%] h-full'>
                    < AreaChart />
                </div>
                <div className='w-[30%] h-full bg-[var(--colCard)] rounded-xl py-3' >
                    < BarChart />
                </div>
            </div>

            <div className='lg:w-[clamp(250px,20dvw,310px)] '>
                <DeviceStatusCountCard />
            </div>

        </div>
    )
}
