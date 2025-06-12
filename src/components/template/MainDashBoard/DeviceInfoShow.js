import React from 'react'
import { MdDirections } from "react-icons/md";
import Link from 'next/link';
import { toPersianDigits } from '@/utils/toPersianDigit';
import { GrStatusGoodSmall } from "react-icons/gr";
import { FaRoad } from "react-icons/fa";
import deviceDataCardContent from '@/content/deviceDataCardContent';

export default function DeviceInfoShow({ t , selectedDevice }) {
    return (
        <div className='bg-[var(--colCard)] shadow-md rounded-xl p-5 flex flex-col gap-5'>
            <div className='flex items-center  justify-between'>
                <div className='flex items-center justify-center px-6 py-2 border-2 border-[var(--colTextA)] rounded-full'>{toPersianDigits(String(selectedDevice.name))}</div>
                <Link target="_blank" href={`https://www.google.com/maps/dir/?api=1&destination=${selectedDevice.lat},${selectedDevice.long}`} className='btnHover flex items-center justify-center p-1 mt-1 border-2 border-[var(--colTextA)] rounded-full'> <MdDirections className='text-2xl' /> </Link>
            </div>

            <div className='flex flex-col gap-2 text-[clamp(12px,0.9dvw,15px)]'>
                <div className='flex items-center gap-2'> <GrStatusGoodSmall className={`${selectedDevice.status ? 'text-green-500' : 'text-red-700'}`} /> {t(deviceDataCardContent.deviceDetail.status.textKey)} : {selectedDevice.status ? t(deviceDataCardContent.status.active.textKey) : t(deviceDataCardContent.status.deactive.textKey)} </div>
                <div className='flex items-center gap-2'> <FaRoad /> {t(deviceDataCardContent.deviceDetail.road.textKey)} : {selectedDevice.location} </div>
            </div>
        </div>

    )
}
