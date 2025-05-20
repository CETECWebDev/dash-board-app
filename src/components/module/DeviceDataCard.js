import React from 'react';
import { TbDeviceComputerCamera } from "react-icons/tb";
import { GrStatusGoodSmall } from "react-icons/gr";
import { FaCarAlt } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaThList } from "react-icons/fa";
import Link from 'next/link';


function DeviceDataCard({ selectedDevice }) {

    return (
        <div className="w-[25%] bg-[var(--colCard)] text-[var(--colTextA)] text-[14px] shadow-lg rounded-2xl p-6 space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-10"> <TbDeviceComputerCamera className='text-2xl' /> {selectedDevice.name}</h3>
            <div className='flex flex-col gap-7'>
                <div className='flex items-center gap-2'><GrStatusGoodSmall className={selectedDevice.active ? 'text-green-500' : 'text-red-700'} />Status : {selectedDevice.active ? 'Active' : 'Deactive'}</div>
                <div className='flex items-center gap-2'><FaCarAlt />Counted Vehicle : {selectedDevice.countedV}</div>
                <Link  target="_blank" href={`https://www.google.com/maps/dir/?api=1&destination=${selectedDevice.lat},${selectedDevice.lng}`} className='flex items-center justify-center gap-2 border-2 rounded-full py-2 border-[var(--colTextA)]'><FaLocationCrosshairs/> Directions</Link>
                <Link href={'/'} className='flex items-center justify-center gap-2 border-2 rounded-full py-2 border-[var(--colTextA)]'> <FaThList/> Full details </Link>
            </div>
        </div>
    );
}

export default DeviceDataCard;