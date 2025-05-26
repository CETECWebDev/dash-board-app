import React from 'react';
import { TbDeviceComputerCamera } from "react-icons/tb";
import { MdDirections } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { GrStatusGoodSmall } from "react-icons/gr";
import { FaCarAlt, FaChartPie } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaThList } from "react-icons/fa";
import Link from 'next/link';

import { useDirectionContext } from "@/context/DirectionContext";
import { translate } from '@/language/language';
import LineChart from '../Charts/LineChart';
import PieChart from '../Charts/PieChart';



function DeviceDataCard({ selectedDevice }) {
  const { dir } = useDirectionContext();

  return (
    <div className="w-full  lg:w-[25%] lg:h-[90dvh]  overflow-y-auto overflow-x-hidden bg-[var(--colCard)] text-[var(--colTextA)] text-[clamp(12px,0.9dvw,14px)] shadow-lg rounded-2xl p-6 space-y-6">

      <div className='flex items-center justify-between'>

        <h3 className="text-xl font-semibold flex items-center justify-center gap-1 border-2 px-5 py-1 rounded-full"> <TbDeviceComputerCamera className='text-2xl' /> <div className='mt-1 text-[14px]'> {selectedDevice.name} </div></h3>

        <div className='flex items-center gap-2'>
          <Link
            className='block'
            target="_blank"
            href={`https://www.google.com/maps/dir/?api=1&destination=${selectedDevice.lat},${selectedDevice.lng}`}>
            <MdDirections className='text-2xl flex items-center justify-center border-2 p-1 rounded-full w-[35px] h-[35px]' />
          </Link>
          <Link href={'/'} className='text-xl flex items-center justify-center border-2 p-2 rounded-full w-[35px] h-[35px]'>
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



        <div className='flex items-center gap-2 w-full'><FaCarAlt /> {translate(dir, "deviceDataCard.countedVehicle")} : {selectedDevice.countedV}</div>



      </div>

      <div className='lg:flex flex-col gap-10 lg:gap-0 items-center hidden'>
        <div className='w-full h-[200px] 4k:h-[28dvh]'>
          <LineChart shadow={false} labelSize={translate(dir, "lineChart.dataCard_labelsize")} />
        </div>
        <div className='w-full h-[200px] 4k:h-[28dvh] 4k:mt-20'>
          <PieChart />
        </div>
      </div>

    </div>
  );
}

export default DeviceDataCard;




