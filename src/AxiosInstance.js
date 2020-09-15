import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: "https://BurgerBackend-env-2.eba-wuedt3yb.ap-south-1.elasticbeanstalk.com/"
    // baseURL: "http://localhost:5000/"
})


export default (AxiosInstance);