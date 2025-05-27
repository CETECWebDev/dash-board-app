import SideBar from '@/components/module/SideBar/SideBar'
import React from 'react'
import Devices from '@/components/template/Devices/Devices' 
import fetchDevices from '@/api-functions/fetchDevices'

export default function DevicesPage({devices}) {
  return (
    <>
    <SideBar/>
    
    <Devices devices={devices}/>
    </>
  )
}


export async function getStaticProps() {

  const data = await fetchDevices()

  return {
    props: {
      devices: data
    },
    revalidate: 60 * 60 * 24 * 7
  }
}