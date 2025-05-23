import React from 'react'
import RoutesInfoCard from '@/components/module/RoadsInfoCard';
import usePagination from '@/hooks/usePagination';

import {mockRoutes} from '@/data/db';
import PaginationControls from '../module/PaginationControls';
import Link from 'next/link';
import { useDirectionContext } from "@/context/DirectionContext";


export default function Routes() {
  const Routes = mockRoutes;
  const [totalPages , pagedList , currentPage , setCurrentPage] = usePagination( 8 , Routes)
  const { dir, toggleDirection } = useDirectionContext();
  
  

  return (
    <div className="p-5 space-y-4">

        {/* Add Device Button */}
      <Link href={'#'} className='  border-2 rounded-full py-2 px-4 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)]'> {(dir === "ltr" ? "+ Add Road " : " افزودن مسیر + ")} </Link>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pagedList.map(route => (
          <RoutesInfoCard key={route.id} {...route} />
        ))}
      </div>

      {/* Pagination controls */}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />



    </div>
  )
}
