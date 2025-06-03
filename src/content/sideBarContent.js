import { FaHome , FaUser  } from "react-icons/fa";
import { FcMultipleDevices } from "react-icons/fc";
import { RiRouteFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";


const SideBarContent = {
    profileSection: {
        username: {textKey : 'username'},
        role: {textKey : 'admin'},
    } , 
    navigation: {
        textKey:'navigation'
    },
    links: [
        { textKey:'dashboard' , href:'/' , icon:<FaHome className="text-blue-500"/>} , 
        { textKey:'devices' , href:'/devices' , icon:<FcMultipleDevices />} , 
        { textKey:'roads' , href:'/roads' , icon:<RiRouteFill className="text-red-500"/>} , 
        { textKey:'users' , href:'/users' , icon:<FaUser className="text-purple-500"/>} , 
        { textKey:'reports' , href:'#' , icon:<TbReport className="text-[var(--colTextA)]"/>} , 
    ],
     settings: {
        textKey:'settings'
    },
}

export default SideBarContent