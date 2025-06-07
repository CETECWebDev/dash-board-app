import { RiSimCardFill } from "react-icons/ri";
import { MdDevicesOther } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { TiArrowLoop } from "react-icons/ti";


const deviceSettingFormContent = {

    formTitle: { textKey: 'deviceSettings' },

    formItems: [
        {
            textKey: 'frameware',
            registerKey: 'frameware',
            icon: <MdDevicesOther />,
            configs: {}
        },
        {
            textKey: 'serverIP',
            registerKey: 'serverIP',
            icon: <FaGlobe />,
            configs: {}
        },
        {
            textKey: 'simNumber',
            registerKey: 'sim_number',
            icon: <RiSimCardFill />,
            configs: {}
        },
        {
            textKey: 'loopNumber',
            registerKey: 'loopNumber',
            icon: <TiArrowLoop />,
            configs: {}
        },


    ]




}


export default deviceSettingFormContent