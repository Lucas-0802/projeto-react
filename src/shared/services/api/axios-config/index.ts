import axios from "axios"
import { errorInterceptor, responseInterceptor } from "./interceptors"

const Api = axios.create({
    baseURL: 'https://localhost:3333'
}) 

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
)