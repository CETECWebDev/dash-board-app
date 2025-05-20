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
  const res = await fetch('http://89.235.119.239/gateway/employees/');
  const data = await res.json();

  return {
    props: {
      employees: data,
    },
  };
}
