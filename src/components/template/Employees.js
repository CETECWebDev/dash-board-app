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
    </div>
  )
}
