import { FaPlus } from "react-icons/fa";
import UserInfoCard from "@/components/module/Cards/UserInfoCard";

const userPageContent = {

    btnLinks: [
        {textKey:'addUser' , href: '/add-road' , icon: <FaPlus/> } , 
    ] ,

    cardComponent: UserInfoCard

}

export default userPageContent