import axios from "axios";

const apiRequest = axios.create({
    baseURL: 'http://185.239.0.192/gateway/' ,
    headers: {"Content-Type" : "application/json"} ,
})

export default apiRequest