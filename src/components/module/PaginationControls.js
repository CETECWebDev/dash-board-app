// components/PaginationControls.js
import React from 'react'

export default function PaginationControls({ 
  currentPage, 
  totalPages, 
  setCurrentPage, 
  dir 
}) {

  return (
    <div className="flex justify-center items-center gap-2 mt-6" dir="ltr">
      <button
        className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium shadow transition
          hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300
          disabled:bg-gray-200 disabled:text-gray-400 dark:disabled:bg-gray-800 dark:disabled:text-gray-500 disabled:cursor-not-allowed"
        onClick={() => setCurrentPage(prev => prev - 1)}
        disabled={currentPage === 1}
      >
        <span dir={dir}>
          {dir === 'rtl' ? '← قبلی' : '← Previous'}
        </span>
      </button>

      <span className="mx-4 text-base font-semibold text-[var(--colTextA)]">
            {dir === 'ltr' ? 'Page' : 'صفحه'} <span className="text-blue-600 dark:text-blue-400">{currentPage}</span>   {dir === 'ltr' ? 'of' : 'از'} <span className="text-blue-600 dark:text-blue-400">{totalPages}</span>
      </span>

      <button
        className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium shadow transition
          hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300
          disabled:bg-gray-200 disabled:text-gray-400 dark:disabled:bg-gray-800 dark:disabled:text-gray-500 disabled:cursor-not-allowed"
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
