//Component to show the form to login
import {
    Card,
    Input,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import arrow from "../img/Union.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Login({ handleLogin, user }) {
    const [loginData, setLoginData] = useState({ userName: "", password: "" });
    const navigate = useNavigate();

    useEffect(() => {
        if (user != "") {
            navigate("/wave-hi");
        }
    }, [user]);

    function fillData(e) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }
    function onSubmit(e) {
        e.preventDefault();
        if (loginData.user !== "" && loginData.password !== "") {
            //console.log(loginData);
            handleLogin(loginData);
        }
    }
    return (
        <Card color="transparent" shadow={true} className="items-center">
            <Link to={"/"} className="w-full">
                <IconButton
                    variant="text"
                    className="rounded-full active:bg-dark-100"
                >
                    <img src={arrow} alt="arrow to go back" className="w-8" />
                </IconButton>
            </Link>
            <Typography variant="h3" className="text-light-100">
                Log in
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Welcome again!! Enter your details to login.
            </Typography>
            <form className="mt-8 mb-2 w-80 sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <div>
                        <Input
                            type="email"
                            variant="outlined"
                            label="Email"
                            color="white"
                            id="userMail"
                            name="userName"
                            onChange={fillData}
                            value={loginData.user}
                            required
                        />
                        <Typography
                            variant="small"
                            color="gray"
                            className="mt-2 flex items-center gap-1 font-normal"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="-mt-px h-4 w-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            email format name@mail.com
                        </Typography>
                    </div>

                    <Input
                        type="password"
                        variant="outlined"
                        label="Password"
                        color="white"
                        id="password"
                        name="password"
                        onChange={fillData}
                        value={loginData.password}
                        required
                    />
                </div>
                <Button
                    className="mt-6 border border-primary-100 text-primary-100 hover:opacity-75 active:opacity-[0.85] bg-transparent focus:ring focus:ring-primary-100"
                    fullWidth
                    onClick={onSubmit}
                >
                    Log in
                </Button>
                <Typography
                    color="gray"
                    className="mt-4 text-center font-normal"
                >
                    <a
                        href="#"
                        className="font-medium text-light-100 underline"
                    >
                        Forget Password
                    </a>
                </Typography>
            </form>
        </Card>
    );
}
