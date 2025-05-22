import usePagination from '@/hooks/usePagination'
import Link from 'next/link'
import React from 'react'
import { useDirectionContext } from "@/context/DirectionContext";
import PaginationControls from '../module/PaginationControls';
// import PaginationControls from '../module/PaginationControls';


export default function Employees({ employees }) {

  const [totalPages, currentEmployees, currentPage, setCurrentPage] = usePagination(6, employees)

  return (
    <div className="min-h-screen p-5 text-[var(--colTextA)] space-y-4">

      <Link href={'/add-user'} className='  border-2 rounded-full py-2 px-4 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)]'>+ Add user</Link>


      <ul className="w-full rounded-lg p-5 space-y-4 text-[var(--colTextA)] bg-[var(--colCard)] shadow-lg">
        <h1 className="text-2xl font-bold mb-4 w-full text-center ">Employee List</h1>
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
        <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
   

    </div>
  )
}
