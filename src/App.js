import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Tabbar } from "./components/Tabbar";
function App() {
    return (
        <div className="bg-dark-100 min-h-screen flex flex-col justify-center items-center">
            <Login />
            <Tabbar />;
            <Register />
            <Register />
            <Register />
            <Register />
            <Register />
        </div>
    );
}

export default App;
