import fetchUsers from '@/api-functions/fetchUsers';
import SideBar from '@/components/module/SideBar/SideBar';
import Employees from '@/components/template/Users/Employees';
import React from 'react'

export default function EmployeesPage({ employees }) {
  return (

    <>
        <SideBar/>
        <Employees employees={employees}/>
    </>
    
   
  );
}


export async function getServerSideProps() {

  const data = await fetchUsers()

  return {
    props: {
      employees: data,
    },
  };
}
