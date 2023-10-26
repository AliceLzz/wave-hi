import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { ButtonGroupDefault } from "./ButtonGroupDefault";
import { PhotoForm } from "./PhotoForm";

export function DrawerPlacement({ openBottom, closeDrawerBottom }) {
    return (
        <Drawer
            placement="bottom"
            open={openBottom}
            onClose={closeDrawerBottom}
            className="p-4 bg-gray-900"
        >
            <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="white">
                    Post
                </Typography>
                <IconButton
                    variant="text"
                    color="white"
                    onClick={closeDrawerBottom}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </IconButton>
            </div>
            <ButtonGroupDefault />
            <PhotoForm />
        </Drawer>
    );
}
