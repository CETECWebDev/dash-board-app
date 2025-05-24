import SideBar from "@/components/module/SideBar/SideBar"
import MainDashboard from "@/components/template/Dashboard/MainDashboard"

export default function Home({ props }) {
  return (
    <>
    
      <SideBar />
      < MainDashboard />
    </>
  )
}


export async function getStaticProps() {


  return {
    props: {}
  }
}