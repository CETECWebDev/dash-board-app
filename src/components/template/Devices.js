import React, { useState } from 'react';
import mockDevices from '@/data/db';
import usePagination from '@/hooks/usePagination';
import DeviceInfoCard from '../module/DeviceInfoCard';
import Link from 'next/link';
import PaginationControls from '../module/PaginationControls';

export default function Devices() {

  const devices = mockDevices;
  const [totalPages , pagedList , currentPage , setCurrentPage] = usePagination( 8 , devices)

  return (
    <div className="p-3 space-y-6">

      <Link href={'/add-device'} className='block mt-3'>+ Add new device</Link>

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
