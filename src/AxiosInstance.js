import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: "http://burgerbackend-env-1.eba-wuedt3yb.ap-south-1.elasticbeanstalk.com/"
})

export default AxiosInstance;