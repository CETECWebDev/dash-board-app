const deleteUser = async (emp) => {
  try {
    const res = await fetch(`/api/user-delete?id=${emp.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      return "User deleted";
      
    } else {
      return "Something went wrong";
    }
  } catch (error) {
    console.error("Error deleting employee:", error);
  }
};
export default deleteUser;
