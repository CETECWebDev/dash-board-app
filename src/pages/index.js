import apiRequest from "@/api/axios-instance/main"
import SideBar from "@/components/module/SideBar/SideBar"
import GridSpace from "@/components/template/MainDashBoard/GridSpace"
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
      <GridSpace />
    </>
  )
}


export async function getStaticProps() {

  const res = await apiRequest.get('/device/')

  return {
    props: {
      devicesList: res.data
    },
  }

}