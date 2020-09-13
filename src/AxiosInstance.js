import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: "http://burgerbackend-env-1.eba-wuedt3yb.ap-south-1.elasticbeanstalk.com/"
    // baseURL: "http://localhost:5000/"
})


export default (AxiosInstance);