import apiRequestProxy from "../axios-instance/proxy";
import i18n from "@/i18n";

const postDevice = async (device) => {
  try {

    const res = await apiRequestProxy.post('/devices/', device);
    
    return [ res.status , i18n.t('deviceRegistred')] 


  } catch (error) {

    console.log('error =>', error)

    return [ error.status , error.customMessage ] 

  }
};

export default postDevice;