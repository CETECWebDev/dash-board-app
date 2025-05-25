import React from "react";

const DeleteUserModal = ({ show, onConfirm, onCancel, translate, dir }) => {
  if (!show) return null;

  return (
    <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-[99999]">
      <div className="bg-[var(--colBg)] p-5 rounded shadow-lg">
        <p>{translate(dir, "employeespage.removemodal")}</p>
        <div className="flex justify-center gap-3 mt-4" dir="rtl">
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            {translate(dir, "employeespage.removemodal_yes")}
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-500 px-4 py-2 rounded text-white hover:bg-gray-600"
          >
            {translate(dir, "employeespage.removemodal_no")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
