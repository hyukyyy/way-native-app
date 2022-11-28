import { User } from "../../data/types";

export type loginRequest = {
    username: string,
    password: string
}

export type getFriedListRequest = {
    token: string;
    isOnline: boolean;
}

export type getFriedListResponse = {
    data: {
        resultCode: string;
        message: string;
        friendList: Array<User>;
    }
}