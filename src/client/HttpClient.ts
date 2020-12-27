import axios, {AxiosInstance} from 'axios'
//@ts-ignore
import cookie from "js-cookie";

const httpClient: AxiosInstance = axios.create({
    baseURL: '',
})
httpClient.interceptors.request.use((config) => {
    let token = cookie.get("token")
    if (typeof token === "undefined" || token == null) {
        config.headers.Authorization = null
    } else {
        config.headers.Authorization = 'Bearer ' + token
    }
    //在发送请求之前做某事
    return config;
}, (error) => {
    //请求错误时做些事
    console.log(error)
    return Promise.reject(error);
});
httpClient.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})

export default httpClient
