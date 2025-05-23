export async function editUser(user) {
    console.log(user);
  const res = await fetch('/api/user-edit', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    
  });

  const data = await res.json();
  if (res.ok) {
    return 'User Edited';
  }

//   throw new Error(data.message || 'Something went wrong');
  console.log("Error =>", data.message || 'Something went wrong');
}


export default editUser;