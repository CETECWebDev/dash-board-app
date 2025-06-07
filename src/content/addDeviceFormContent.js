import { MdLocationOn, MdDevicesOther, MdOutlineDescription, MdRoute } from "react-icons/md";
import { IoMdBarcode } from "react-icons/io";
import { RiSimCardFill } from "react-icons/ri";


const addDeviceFormContent = {

    formTitle: { textKey: 'addDeviceFormTitle' },

    formItems: [
        {
            textKey: 'lat',
            registerKey: 'lat',
            icon: <MdLocationOn />,
            configs: {}
        },
        {
            textKey: 'long',
            registerKey: 'long',
            icon: <MdLocationOn />,
            configs: {}
        },
        {
            textKey:'openMap',
            type:'Button',
        },
        {
            textKey: 'deviceName',
            registerKey: 'name',
            icon: <MdDevicesOther />,
            configs: {}
        },
        {
            textKey: 'description',
            registerKey: 'description',
            icon: <MdOutlineDescription />,
            configs: {}
        },
        {
            textKey: 'deviceSerial',
            registerKey: 'serial_number',
            icon: <IoMdBarcode />,
            configs: {}
        },
        {
            textKey: 'deviceRoad',
            registerKey: 'location',
            icon: <MdRoute />,
            configs: {}
        },
        {
            textKey: 'roadInstalled',
            registerKey: 'road_installed',
            icon: <MdRoute />,
            configs: {}
        },
        {
            textKey: 'simNumber',
            registerKey: 'sim_number',
            icon: <RiSimCardFill />,
            configs: {}
        },
        {
            textKey: 'simSerial',
            registerKey: 'sim_serial_number',
            icon: <RiSimCardFill />,
            configs: {}
        },

    ]




}


export default addDeviceFormContent