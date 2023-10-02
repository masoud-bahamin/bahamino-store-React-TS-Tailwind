import axios from "axios"

export const myAxios = axios.create({
    baseURL: "https://dummyjson.com/",
})

myAxios.interceptors.request.use((confige) => {
    return confige
}, (error) => {
    console.log(error);
    return Promise.reject(error)
})

myAxios.interceptors.response.use((response) => {
    response.data.resulte = true;
    return response
} , (error) => {
    console.log(error);
    if(error.response.status === 404){
        alert("404")
    }
    return Promise.reject(error)
})