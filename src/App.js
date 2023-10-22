import { Landing } from "./components/Landing";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Profile } from "./components/Profile";
function App() {
    return (
        <div className="bg-dark-100 min-h-screen flex flex-col justify-center items-center">
            <Profile />;
        </div>
    );
}

export default App;
