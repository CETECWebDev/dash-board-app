import fetchUsers from '@/api/fetchUsers';
import SideBar from '@/components/module/SideBar';
import Employees from '@/components/template/Employees';
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
