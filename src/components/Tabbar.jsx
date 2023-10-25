//Component kind of footer with user options when is already loged
import { Navbar, IconButton, Badge } from "@material-tailwind/react";
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Tabbar({ users }) {
    const [newMsj, setNewMsj] = useState(false);
    useEffect(() => {
        Object.values(users).forEach((user) => {
            if (user.hasNewMessages) {
                setNewMsj(true);
            } else {
                setNewMsj(false);
            }
        });
    });
    return (
        <Navbar
            variant="filled"
            className="fixed bottom-0 z-10 h-max max-w-full bg-dark-100 border-none rounded-none px-4 py-2 lg:px-8 lg:py-4 "
        >
            <div className="flex gap-1 justify-between">
                {/* Button to Home */}
                <Link to={"/wave-hi"}>
                    <IconButton variant="text" color="white">
                        <AiOutlineHome className="h-4 w-4" />
                    </IconButton>
                </Link>
                {/* Button to Search */}
                <Link to={"/wave-hi/search"}>
                    <IconButton variant="text" color="white">
                        <AiOutlineSearch className="h-4 w-4" />
                    </IconButton>
                </Link>
                {/* Button to Add post */}
                <Link to={"/wave-hi/"}>
                    <IconButton
                        variant="filled"
                        className="bg-primary-100 text-dark-100 w-24 max-w-none rounded-full"
                    >
                        <AiOutlinePlus className="h-4 w-4" />
                    </IconButton>
                </Link>
                {/* Button to Chats */}
                <Link to={"/wave-hi/chat"}>
                    <IconButton variant="text" color="white">
                        {newMsj ? (
                            <Badge>
                                <BsChat className="h-4 w-4" />
                            </Badge>
                        ) : (
                            <BsChat className="h-4 w-4" />
                        )}
                    </IconButton>
                </Link>
                {/* Button to Profile */}
                <Link to={"/wave-hi/profile"}>
                    <IconButton variant="text" color="white">
                        <GoPerson className="h-4 w-4" />
                    </IconButton>
                </Link>
            </div>
        </Navbar>
    );
}
