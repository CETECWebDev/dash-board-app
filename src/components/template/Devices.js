import React, { useState } from 'react';
import mockDevices from '@/data/db';
import usePagination from '@/hooks/usePagination';
import DeviceInfoCard from '../module/DeviceInfoCard';
import Link from 'next/link';

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
      <div className="flex justify-center items-center gap-4">
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="text-sm text-[var(--colTextA)]">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>


    </div>
  );
}
