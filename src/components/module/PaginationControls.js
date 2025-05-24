// components/PaginationControls.js
import React from 'react'
import { useDirectionContext } from "@/context/DirectionContext";
import { translate } from '@/language/language';


export default function PaginationControls({ 
  currentPage, 
  totalPages, 
  setCurrentPage
}) {
  const { dir, toggleDirection } = useDirectionContext();

  return (
    <div className="flex justify-center items-center gap-2 mt-6" dir="ltr">
      <button
          className="flex items-center justify-center gap-2 border-2 rounded-full py-2 px-4 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)]
           disabled:text-gray-400 disabled:border-gray-400  disabled:cursor-not-allowed"
        onClick={() => setCurrentPage(prev => prev - 1)}
        disabled={currentPage === 1}
      >
        <span dir={dir}>
          {translate(dir , "pagination.previous")}
        </span>
      </button>

      <span 
      className="mx-4 text-base font-semibold text-[var(--colTextA)]">
            {dir === 'ltr' ? 'Page' : 'صفحه'} <span className="text-blue-600 dark:text-blue-400">{currentPage}</span>   {dir === 'ltr' ? 'of' : 'از'} <span className="text-blue-600 dark:text-blue-400">{totalPages}</span>
      </span>

      <button
        className="flex items-center justify-center gap-2 border-2 rounded-full py-2 px-4 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)]
      disabled:text-gray-400 disabled:border-gray-400  disabled:cursor-not-allowed"  
        onClick={() => setCurrentPage(prev => prev + 1)}
        disabled={currentPage === totalPages}
      >
        <span dir={dir}>
          {dir === 'rtl' ? '→ بعدی' : 'Next →'}
        </span>
      </button>
    </div>
  )
}
