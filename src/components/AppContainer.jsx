import { Outlet } from "react-router-dom";
import { Tabbar } from "./Tabbar";

export function AppContainer({ users }) {
    return (
        <div>
            <Outlet />
            <Tabbar users={users} />
        </div>
    );
}
