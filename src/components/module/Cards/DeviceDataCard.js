import React from 'react';
import { TbDeviceComputerCamera } from "react-icons/tb";
import { MdDirections } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { GrStatusGoodSmall } from "react-icons/gr";
import { FaCarAlt, FaChartPie } from "react-icons/fa";
import Link from 'next/link';

import { useDirectionContext } from "@/context/DirectionContext";
import { translate } from '@/language/language';
import DonutChart from '../Charts/DonutChart';
import BarChart from '../Charts/BarChart';



function DeviceDataCard({ selectedDevice }) {
  const { dir } = useDirectionContext();

  return (
    <div className="w-full  lg:w-[25%] h-auto  overflow-y-auto overflow-x-hidden bg-[var(--colCard)] text-[var(--colTextA)] text-[clamp(12px,0.9dvw,14px)] shadow-lg rounded-2xl p-6 space-y-6">

      <div className='flex items-center justify-between'>

        <h3 className="text-xl font-semibold flex items-center justify-center gap-1 border-2 px-5 py-1 rounded-full"> <TbDeviceComputerCamera className='text-2xl' /> <div className='mt-1 text-[14px]'> {selectedDevice.name} </div></h3>

        <div className='flex items-center gap-2 '>
          <Link
            className='block '
            target="_blank"
            href={`https://www.google.com/maps/dir/?api=1&destination=${selectedDevice.lat},${selectedDevice.lng}`}>
            <MdDirections className='text-2xl flex items-center justify-center border-2 p-1 rounded-full w-[35px] h-[35px] hover:text-[var(--textHover)] hover:border-[var(--textHover)] linkHover' />
          </Link>
          <Link href={'/'} className='text-xl flex items-center justify-center border-2 p-2 rounded-full w-[35px] h-[35px] hover:text-[var(--textHover)] hover:border-[var(--textHover)] linkHover'>
            <BsThreeDots />
          </Link>
        </div>
      </div>


      <div className='flex flex-col gap-3 w-full'>

        <div className='flex items-center gap-2 w-full' >
          <GrStatusGoodSmall className={selectedDevice.active ? 'text-[#1ac11a]' : 'text-[#ff0000]'} />
          {translate(dir, "deviceDataCard.status")} :
          {selectedDevice.active
            ? translate(dir, "deviceDataCard.active")
            : translate(dir, "deviceDataCard.deactive")}
        </div>



        <div className='flex items-center gap-2 w-full'><FaCarAlt /> {translate(dir, "deviceDataCard.road")} : {selectedDevice.location}</div>



      </div>

      <div className=' gap-10 lg:gap-0 items-center'>
        <div className='w-full h-[160px]  4k:h-[28dvh]'>
          <BarChart shadow={false} labelSize={translate(dir, "lineChart.dataCard_labelsize")} />
        </div>
        <div className='w-full h-[200px] mt-5  4k:h-[28dvh] 4k:mt-10'>
          <DonutChart />
        </div>
      </div>

    </div>
  );
}

export default DeviceDataCard;




