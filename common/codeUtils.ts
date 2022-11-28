export interface menu {
    name: string;
    componentRoute: string,
}
const allMenus: Array<menu> = [
    {
        name: "마이페이지",
        componentRoute: "com.way.MyPage"
    },
    {
        name: "친구목록",
        componentRoute: "com.way.FriendList"
    },
];

export { allMenus };