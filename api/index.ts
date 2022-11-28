import { loginRequest } from './types/types';
import axios from 'axios';

const loginApi = async (request: loginRequest) => {
    console.log("loginApi requested");
    try {
        const res = await axios({ method: "post", url: "http://192.168.9.200/user/login", data: request });
        return res.data;
    } catch (e) {
        console.error("error while loginApi", e)
        return e
    }
}


export { loginApi }