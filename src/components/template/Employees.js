import usePagination from "@/hooks/usePagination";
import Link from "next/link";
import React, { useState } from "react";
import { useDirectionContext } from "@/context/DirectionContext";
import PaginationControls from "../module/PaginationControls";
// import PaginationControls from '../module/PaginationControls';
import { MdDelete } from "react-icons/md";
import deleteUser from "@/api-functions/deleteUser";
import { useRouter } from "next/router";

export default function Employees({ employees: initialEmployees }) {
  const [employees, setEmployees] = useState(initialEmployees); 
  const [totalPages, currentEmployees, currentPage, setCurrentPage] =
    usePagination(6, employees);
  const { dir, toggleDirection } = useDirectionContext();
  const router = useRouter();

  const handleDelete = async (emp) => {
    const result = await deleteUser(emp);
    if (result === "User deleted") {
      const updated = employees.filter((e) => e.id !== emp.id);
      setEmployees(updated);
      // حذف منطق تغییر صفحه، چون usePagination خودش مدیریت می‌کند
    } else {
      alert("حذف کاربر با خطا مواجه شد");
    }
  };

  return (
    <div className="min-h-screen p-5 text-[var(--colTextA)] space-y-4">
      <Link
        href={"/add-user"}
        className="  border-2 rounded-full py-2 px-4 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)]"
      >
        {" "}
        {dir === "ltr" ? " + Add User " : " افزودن کاربر + "}
      </Link>

      <ul className="w-full rounded-lg p-5 space-y-4 text-[var(--colTextA)] bg-[var(--colCard)] shadow-lg">
        <h1 className="text-2xl font-bold mb-4 w-full text-center ">
          {dir === "ltr" ? " Employee List " : " لیست کارمندان "}{" "}
        </h1>
        {(currentEmployees ?? []).map((emp) => (
          <li
            key={emp.id}
            className="flex justify-between items-center border-b-2 border-[var(--colTextA)] py-5 last:border-b-0"
          >
            <span className="font-medium ">{emp.name}</span>
            <span className="text-sm ">{emp.email}</span>
            <button onClick={() => handleDelete(emp)}>
              <MdDelete />
            </button>
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
  );
}
