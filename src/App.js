import { Landing } from "./components/Landing";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Profile } from "./components/Profile";
import { Chat } from "./components/Chat";
function App() {
    return (
        <div className="bg-dark-100 min-h-screen flex flex-col justify-center items-center">
            <Chat />;
        </div>
    );
}

export default App;
