import fetchDevices from "@/api-functions/fetchDevices"
import SideBar from "@/components/module/SideBar/SideBar"
import MainDashboard from "@/components/template/Dashboard/MainDashboard"

export default function Home({ devices }) {
  return (
    <>

      <SideBar />
      < MainDashboard  devices={devices} />
    </>
  )
}


export async function getStaticProps() {

  const data = await fetchDevices()

  return {
    props: {
      devices: data
    }
  }
}