import { Outlet } from "react-router-dom";

export function MainContainer() {
    return (
        <div className="bg-dark-100 min-h-screen flex flex-col justify-center items-center">
            <Outlet />
        </div>
    );
}
