import axios from 'axios';
import { BASE_URL } from './config';

const apiService = axios.create({
    baseURL: BASE_URL,
});

apiService.interceptors.request.use((request)=> {
    console.log("Start Request", request);
    return request;
}, function (error){
    console.log('Request Error', error);
});

apiService.interceptors.response.use((request)=> {
    console.log("Sesponse", request);
    return request;
}, function (error){
    console.log('Response Error', error);
});

export default apiService;