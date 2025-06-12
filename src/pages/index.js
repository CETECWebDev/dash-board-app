import apiRequest from "@/api/axios-instance/main"
import SideBar from "@/components/module/SideBar/SideBar"
import ChartsGrid from "@/components/template/MainDashBoard/ChartsGrid"
import MapAndDataCard from "@/components/template/MainDashBoard/MapAndDataCard"
import useDevices from "@/stores/deviceStore"
import { useEffect } from "react"


export default function Home({ devicesList }) {

  const { setDevices, setSelectedDevice } = useDevices()

  useEffect(() => {
    setDevices(devicesList)
    setSelectedDevice(devicesList[0])
  }, [devicesList])


  return (
    <>
      <SideBar />
      <MapAndDataCard />
      <ChartsGrid />
    </>
  )
}


export async function getStaticProps() {

  const res = await apiRequest.get('/device/')

  return {
    props: {
      devicesList: res.data
    },
    revalidate: 60 * 5 
  }

}