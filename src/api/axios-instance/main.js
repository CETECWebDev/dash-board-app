import axios from "axios";

const apiRequest = axios.create({
    baseURL: 'http://89.235.119.239/gateway/' ,
    headers: {"Content-Type" : "application/json"} ,
})

export default apiRequest