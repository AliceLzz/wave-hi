import { Landing } from "./components/Landing";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Profile } from "./components/Profile";
import { Chat } from "./components/Chat";
import { Conversation } from "./components/Conversation";
import { Search } from "./components/Search";
function App() {
    return (
        <div className="bg-dark-100 min-h-screen flex flex-col justify-center items-center">
            <Search />;
        </div>
    );
}

export default App;
