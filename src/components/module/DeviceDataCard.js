import React from 'react';
import { TbDeviceComputerCamera } from "react-icons/tb";
import { GrStatusGoodSmall } from "react-icons/gr";
import { FaCarAlt } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaThList } from "react-icons/fa";
import Link from 'next/link';

import { useDirectionContext } from "@/context/DirectionContext";
import { translate } from '@/language/language';





function DeviceDataCard({ selectedDevice }) {
  const { dir} = useDirectionContext();

    return (
        <div className="w-full lg:w-[25%] bg-[var(--colCard)] text-[var(--colTextA)] text-[clamp(12px,0.9dvw,14px)] shadow-lg rounded-2xl p-6 space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-10"> <TbDeviceComputerCamera className='text-2xl' /> {selectedDevice.name}</h3>
            <div className='lg:flex lg:flex-col lg:gap-7 grid grid-cols-2 gap-x-2 gap-y-5'>
                <div className='flex items-center gap-2'>
                  <GrStatusGoodSmall className={selectedDevice.active ? 'text-green-500' : 'text-red-700'} />
                  {translate(dir , "deviceDataCard.status") } :
                  {selectedDevice.active
                    ? translate(dir , "deviceDataCard.active")
                    : translate(dir , "deviceDataCard.deactive")}
                </div>
                <div className='flex items-center gap-2'><FaCarAlt /> {translate(dir , "deviceDataCard.countedVehicle")} : {selectedDevice.countedV}</div>
                <Link  target="_blank" href={`https://www.google.com/maps/dir/?api=1&destination=${selectedDevice.lat},${selectedDevice.lng}`} className=' flex items-center justify-center gap-2 border-2 rounded-full py-2 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)]' ><FaLocationCrosshairs/> {translate(dir , "deviceDataCard.direction")} </Link>
                <Link  href={'/'} className='flex items-center justify-center gap-2 border-2 rounded-full py-2 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)]'> <FaThList/> {translate(dir , "deviceDataCard.detail")} </Link>
            </div>
        </div>
    );
}

export default DeviceDataCard;