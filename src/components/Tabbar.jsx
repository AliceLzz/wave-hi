import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
} from "@material-tailwind/react";
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { GoPerson } from "react-icons/go";

export function Tabbar() {
    return (
        <Navbar
            variant="filled"
            className="fixed bottom-0 z-10 h-max max-w-full bg-dark-100 border-none rounded-none px-4 py-2 lg:px-8 lg:py-4"
        >
            <div className="flex gap-1 justify-between">
                <IconButton variant="text" color="white">
                    <AiOutlineHome className="h-4 w-4" />
                </IconButton>
                <IconButton variant="text" color="white">
                    <AiOutlineSearch className="h-4 w-4" />
                </IconButton>
                <IconButton
                    variant="filled"
                    className="bg-primary-100 text-dark-100 w-24 max-w-none rounded-full"
                >
                    <AiOutlinePlus className="h-4 w-4" />
                </IconButton>
                <IconButton variant="text" color="white">
                    <BsChat className="h-4 w-4" />
                </IconButton>
                <IconButton variant="text" color="white">
                    <GoPerson className="h-4 w-4" />
                </IconButton>
            </div>
        </Navbar>
    );
}
