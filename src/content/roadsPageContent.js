import { FaPlus } from "react-icons/fa";
import RoadInfoCard from "@/components/module/Cards/RoadInfoCard";

const roadsPageContent = {

    btnLinks: [
        {textKey:'addRoadButton' , href: '/add-user' , icon: <FaPlus/> } , 
    ] ,

    cardComponent: RoadInfoCard

}

export default roadsPageContent