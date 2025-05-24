import React from 'react'
import RoadsInfoCard from '@/components/module/RoadsInfoCard';
import usePagination from '@/hooks/usePagination';

import {mockRoutes} from '@/data/db';
import PaginationControls from '../module/PaginationControls';
import Link from 'next/link';
import { useDirectionContext } from "@/context/DirectionContext";
import { translate } from '@/language/language';


export default function Routes() {
  const Routes = mockRoutes;
  const [totalPages , pagedList , currentPage , setCurrentPage] = usePagination( 8 , Routes)
  const { dir } = useDirectionContext();
  
  

  return (
    <div className="p-5">

        {/* Add Device Button */}
      <div className='flex items-center gap-5 mb-3' >
      <Link href={'#'} className='border-2 rounded-full py-2 px-4 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)]'> {translate(dir , "roads.addRoad")} </Link>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pagedList.map(road => (
          <RoadsInfoCard key={road.id} {...road} />
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
