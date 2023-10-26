import { Outlet } from "react-router-dom";
import { Tabbar } from "./Tabbar";
import { DrawerPlacement } from "./DrawerPlacement";
import { useState } from "react";

export function AppContainer({ users, userName, handleSendPost }) {
    const [openBottom, setOpenBottom] = useState(false);
    const openDrawerBottom = () => setOpenBottom(true);
    const closeDrawerBottom = () => setOpenBottom(false);
    return (
        <div>
            <Outlet />
            <Tabbar users={users} openDrawerBottom={openDrawerBottom} />
            <DrawerPlacement
                openBottom={openBottom}
                closeDrawerBottom={closeDrawerBottom}
                userName={userName}
                handleSendPost={handleSendPost}
            />
        </div>
    );
}
