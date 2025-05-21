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
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium shadow transition
            hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300
            disabled:bg-gray-200 disabled:text-gray-400 dark:disabled:bg-gray-800 dark:disabled:text-gray-500 disabled:cursor-not-allowed"
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
        >
          &larr; Previous
        </button>

        <span className="mx-4 text-base font-semibold text-[var(--colTextA)]">
          Page <span className="text-blue-600 dark:text-blue-400">{currentPage}</span> of <span className="text-blue-600 dark:text-blue-400">{totalPages}</span>
        </span>

        <button
          className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium shadow transition
            hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300
            disabled:bg-gray-200 disabled:text-gray-400 dark:disabled:bg-gray-800 dark:disabled:text-gray-500 disabled:cursor-not-allowed"
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next &rarr;
        </button>
      </div>



    </div>
  );
}
