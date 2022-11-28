export type loginRequest = {
    username: string,
    password: string
}

export type getFriedListRequest = {
    token: string;
    isOnline: boolean;
}