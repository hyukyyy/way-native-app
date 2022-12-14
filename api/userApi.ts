import { loginRequest, getFriedListRequest, getFriedListResponse } from './types/types';
import axios from 'axios';

const loginApi = async (request: loginRequest) => {
    try {
        const res = await axios({ method: "post", url: "http://192.168.9.200/user/login", data: request });
        console.log(res);
        return res.data;
    } catch (e) {
        console.error("error while loginApi", e)
        return e
    }
}

const getFriendListApi = async (request: getFriedListRequest): Promise<getFriedListResponse> => {
    try {
        const res = await axios({
            method: "get", url: "http://192.168.9.200/user/friend", params: request, headers: {
                Authorization: request.token
            }
        });
        return res.data;
    } catch (e) {
        console.error("error while getFriendList", e)
        throw e;
    }
}


export { loginApi, getFriendListApi }