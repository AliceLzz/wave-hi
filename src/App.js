import { Landing } from "./components/Landing";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { MainContainer } from "./components/MainContainer";
import { AppContainer } from "./components/AppContainer";
import { Profile } from "./components/Profile";
import { Home } from "./components/Home";
import { Search } from "./components/Search";
import { Chat } from "./components/Chat";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DrawerPlacement } from "./components/DrawerPlacement";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainContainer />,
            errorElement: <div>Not found</div>,
            children: [
                { index: true, element: <Landing /> },
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "register",
                    element: <Register />,
                },
                {
                    path: "wave-hi",
                    element: <AppContainer />,
                    children: [
                        { index: true, element: <Home /> },
                        {
                            path: "profile",
                            element: <Profile />,
                        },
                        {
                            path: "search",
                            element: <Search />,
                        },
                        {
                            path: "chat",
                            element: <Chat />,
                        },
                        {
                            path: "post",
                            element: <DrawerPlacement />,
                        },
                    ],
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
