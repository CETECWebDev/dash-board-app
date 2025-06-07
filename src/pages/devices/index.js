import apiRequest from '@/api/axios-instance/main'
import SideBar from '@/components/module/SideBar/SideBar'
import usePagination from '@/hooks/usePagination'
import BottomPart from '@/components/template/DevicesRoadsUsers/BottomPart'
import TopPart from '@/components/template/DevicesRoadsUsers/TopPart'
import ListContainer from '@/components/template/DevicesRoadsUsers/ListContainer'
import devicesPageContent from '@/content/devicesPageContent'


export default function index({devicesList}) {

    const paginationProps = usePagination(10 , devicesList)
    const content = devicesPageContent

    return (
        <>
            <SideBar />
            <TopPart content={content} {...paginationProps} />
            <ListContainer content={content}  pagedList={paginationProps.pagedList}/>
            <BottomPart {...paginationProps} />
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