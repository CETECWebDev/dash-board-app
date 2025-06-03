import { FaPlus } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import DeviceInfoCard from "@/components/module/Cards/DeviceInfoCard";

const devicesPageContent = {

    btnLinks: [
        {textKey:'addDeviceButton' , href: '/add-device' , icon: <FaPlus/> } , 
        {textKey:'deviceSettings' , href: '/device-settings' , icon: <AiFillSetting/> } , 
    ] ,

    cardComponent: DeviceInfoCard 

}

export default devicesPageContent