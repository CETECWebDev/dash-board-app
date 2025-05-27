import fetchRoads from '@/api-functions/fetchRoads'
import SideBar from '@/components/module/SideBar/SideBar'
import Roads from '@/components/template/Roads/Roads'
import React from 'react'

export default function RoadsPage({roads}) {
  return (
        <>
        <SideBar/>
        <Roads roads={roads} />
        
        </>
  )
}

export async function getStaticProps() {

  const data = await fetchRoads()

  return {
    props: {
      roads: data
    },
    revalidate: 60 * 10
  }
}