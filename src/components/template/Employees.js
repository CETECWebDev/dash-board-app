import usePagination from '@/hooks/usePagination'
import Link from 'next/link'
import React from 'react'

export default function Employees({ employees }) {

  const [totalPages, currentEmployees, currentPage, setCurrentPage] = usePagination(6, employees)

  return (
    <div className="min-h-screen p-5 text-[var(--colTextA)]">

      <Link  href={'/add-user'} className='block mb-5 font-bold'>+ Add user</Link>

      <ul className="w-full rounded-lg p-6 space-y-4 text-[var(--colTextA)] bg-[var(--colCard)] shadow-lg">
        <h1 className="text-2xl font-bold mb-6 w-full text-center ">Employee List</h1>
        {(currentEmployees ?? []).map((emp) => (
          <li
            key={emp.id}
            className="flex justify-between items-center border-b-2 border-[var(--colTextA)] py-5 last:border-b-0"
          >
            <span className="font-medium ">{emp.name}</span>
            <span className="text-sm ">{emp.email}</span>
          </li>
        ))}
      </ul>


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
  )
}
