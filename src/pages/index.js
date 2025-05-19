import MainDashboard from "@/components/template/MainDashboard"

export default function Home({props}) {
  return (
    <>
      < MainDashboard />
    </>
  )
}


export async function getStaticProps() {
  return {
    props:{}
  }
}