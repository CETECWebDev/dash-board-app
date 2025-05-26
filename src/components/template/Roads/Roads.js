import React from 'react'
import RoadsInfoCard from '@/components/module/Cards/RoadsInfoCard';
import usePagination from '@/hooks/usePagination';

import { mockRoads } from '@/data/db';
import PaginationControls from '../../module/Controls/PaginationControls';
import Link from 'next/link';
import { useDirectionContext } from "@/context/DirectionContext";
import { translate } from '@/language/language';


export default function Roads() {
  const Roads = mockRoads;
  const [totalPages, pagedList, currentPage, setCurrentPage] = usePagination(8, Roads)
  const { dir } = useDirectionContext();



  return (
    <div className="p-5">

      {/* Add Device Button */}
      <div className='flex items-center gap-5 mb-3 text-[14px] ' >
        <Link href={'/add-road'} className='linkHover border-2 rounded-full py-2 px-4 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)]'> {translate(dir, "addRoad.title")} </Link>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pagedList.map(road => (
          <div className='cursor-pointer linkHover'>
            <RoadsInfoCard key={road.id} {...road} />

          </div>
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
