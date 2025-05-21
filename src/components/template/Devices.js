import React, { useState } from 'react';
import mockDevices from '@/data/db';

export default function Devices() {
  const devices = mockDevices;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // items count per page

  const totalPages = Math.ceil(devices.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDevices = devices.slice(startIndex, endIndex);

  return (
    <div className="p-4 space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentDevices.map(device => (
          <div
            key={device.id}
            className="bg-[var(--colCard)] rounded-lg shadow p-6 flex flex-col gap-2 border"
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg text-[var(--colTextA)]">
                {device.name} <span className=" text-sm">({device.id})</span>
              </span>
              <span
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  device.active
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {device.active ? 'Active' : 'Inactive'}
              </span>
            </div>
            <div className="text-[var(--colTextB)] text-sm">
              Lat: {device.lat}, Lng: {device.lng}
            </div>
            <div className="text-[var(--colTextB)] font-medium">
              Counted Value: {device.countedV}
            </div>
          </div>
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
