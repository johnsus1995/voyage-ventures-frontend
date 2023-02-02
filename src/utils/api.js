import axios from "axios";

const customAxios = axios.create({
    baseURL:process.env.BASE_URL
})

export default customAxios