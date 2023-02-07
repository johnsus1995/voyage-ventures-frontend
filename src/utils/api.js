import axios from "axios";
import Qs from "qs";

const customAxios = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    headers:{'Content-Type':'application/json'},
    paramsSerializer: {
        indexes:false
    }
})

export default customAxios