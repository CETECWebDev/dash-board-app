import axios from "axios";

const apiRequestProxy = axios.create({
    baseURL: `/api/` ,
    headers: {"Content-Type" : "application/json"} ,
})

export default apiRequestProxy