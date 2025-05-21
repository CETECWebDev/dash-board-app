import React from 'react'

export default function Employees({employees}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 dark:bg-gray-900 py-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">لیست کارمندان</h1>
      <ul className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
        {(employees ?? []).map((emp) => (
          <li
            key={emp.id}
            className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2 last:border-b-0"
          >
            <span className="font-medium text-gray-700 dark:text-gray-200">{emp.name}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{emp.email}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
