import SideBar from "@/components/module/SideBar"
import MainDashboard from "@/components/template/MainDashboard"

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