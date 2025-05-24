import usePagination from "@/hooks/usePagination";
import Link from "next/link";
import React, { useState } from "react";
import { useDirectionContext } from "@/context/DirectionContext";
import PaginationControls from "../module/PaginationControls";
// import PaginationControls from '../module/PaginationControls';
import { MdDelete, MdEdit, MdCheck, MdClose } from "react-icons/md";
import deleteUser from "@/api-functions/deleteUser";
import editUser from "@/api-functions/editUser";
import { useRouter } from "next/router";

export default function Employees({ employees: initialEmployees }) {
  const [employees, setEmployees] = useState(initialEmployees);
  const [totalPages, currentEmployees, currentPage, setCurrentPage] =
    usePagination(6, employees);
  const { dir, toggleDirection } = useDirectionContext();
  const router = useRouter();
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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

  const startEdit = (emp) => {
    setEditingId(emp.id);
    setEditName(emp.name);
    setEditEmail(emp.email);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditName("");
    setEditEmail("");
  };

  const saveEdit = async () => {
    const user = { id: editingId, name: editName, email: editEmail };
    try {
      const result = await editUser(user);
      if (result === "User Edited") {
        setEmployees((prev) =>
          prev.map((emp) =>
            emp.id === editingId ? { ...emp, name: editName, email: editEmail } : emp
          )
        );
        cancelEdit();
        alert("User edited successfully");
      } else {
        alert("Unexpected response: " + result);
      }
    } catch (error) {
      console.error("Error editing user:", error);
      alert("Error editing user: " + error.message);
    }
  };

  const confirmDelete = (emp) => {
    setSelectedEmployee(emp);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedEmployee) {
      const result = await deleteUser(selectedEmployee);
      if (result === "User deleted") {
        const updated = employees.filter((e) => e.id !== selectedEmployee.id);
        setEmployees(updated);
        setShowDeleteModal(false);
        setSelectedEmployee(null);
      } else {
        alert("حذف کاربر با خطا مواجه شد");
      }
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedEmployee(null);
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
            {editingId === emp.id ? (
              // Edit mode
              <>
                <input
                  className="bg-transparent border-b w-1/3"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  className="bg-transparent border-b w-1/3  "
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                />
                <div className="flex gap-3">
                  <button
                    onClick={saveEdit}
                    className="text-green-400 hover:scale-110 text-2xl"
                  >
                    <MdCheck />
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="text-red-400 hover:scale-110 text-2xl"
                  >
                    <MdClose />
                  </button>
                </div>
              </>
            ) : (
              // View mode
              <>
                <span className="font-medium w-1/3">{emp.name}</span>
                <span className="text-sm w-1/3">{emp.email}</span>
                {/* <span className="text-sm w-1/3">{emp.id}</span> */}
                <div className="flex gap-3">
                  <button
                    onClick={() => startEdit(emp)}
                    className="hover:text-yellow-400 hover:scale-110 text-2xl"
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={() => confirmDelete(emp)}
                    className="hover:text-red-400 hover:scale-110 text-2xl"
                  >
                    <MdDelete />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Pagination controls */}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <p>Are you sure you want to delete this employee?</p>
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Yes
              </button>
              <button
                onClick={handleCancelDelete}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
