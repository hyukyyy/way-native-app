export interface menu {
    name: string;
    componentRoute: string,
}
const allMenus: Array<menu> = [
    {
        name: "친구목록",
        componentRoute: "com.way.FriendList"
    },
    {
        name: "친구목록1",
        componentRoute: "com.way.FriendList"
    },
    {
        name: "친구목록2",
        componentRoute: "com.way.FriendList"
    }
];

export { allMenus };