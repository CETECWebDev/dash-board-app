import React, { useState } from 'react';
import mockDevices from '@/data/db';
import usePagination from '@/hooks/usePagination';
import DeviceInfoCard from '../module/DeviceInfoCard';
import Link from 'next/link';
import PaginationControls from '../module/PaginationControls';

export default function Devices() {

  const devices = mockDevices;
  const [totalPages, pagedList, currentPage, setCurrentPage] = usePagination(8, devices)

  return (
    <div className="p-5 space-y-4">

      <div className='flex items-center gap-5'>

        <Link href={'/add-device'} className='  border-2 rounded-full py-2 px-4 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)]'>+ Add new device</Link>
        <Link href={'/device-settings'} className='  border-2 rounded-full py-2 px-4 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)]'>Change Settings</Link>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pagedList.map(device => (
          <DeviceInfoCard key={device.id} {...device} />
        ))}
      </div>

      {/* Pagination controls */}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />



    </div>
  );
}
