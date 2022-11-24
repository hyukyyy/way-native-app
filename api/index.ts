import { loginRequest } from './types/types';
import axios from 'axios';

const loginApi = async (request: loginRequest) => {
    console.log("loginApi requested");
    try {
        const res = await axios({ method: "post", url: "http://172.30.1.92/user/login", data: request });
        console.log(res);
        return res.data;
    } catch (e) {
        console.error("error while loginApi", e)
        return e
    }

}


export { loginApi }