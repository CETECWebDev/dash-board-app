import apiRequest from '@/api/axios-instance/main'
import SideBar from '@/components/module/SideBar/SideBar'
import usePagination from '@/hooks/usePagination'
import BottomPart from '@/components/template/DevicesAndRoads/BottomPart'
import TopPart from '@/components/template/DevicesAndRoads/TopPart'
import ListContainer from '@/components/template/DevicesAndRoads/ListContainer'
import roadsPageContent from '@/content/roadsPageContent'


export default function index({roadsList}) {

    const paginationProps = usePagination(10 , roadsList)
    const content = roadsPageContent

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

    const res = await apiRequest.get('/road/')

    return {
        props: {
            roadsList:res.data
        },
    }

}