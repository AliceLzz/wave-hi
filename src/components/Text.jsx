// Component for a post with only text
import { IconButton, Typography } from "@material-tailwind/react";
import { AiOutlineHeart } from "react-icons/ai";

export function Text({ text }) {
    return (
        <div className="relative h-96 w-full bg-gray-900 rounded-xl">
            <div className="absolute w-10/12 flex left-2/4 justify-between -translate-x-2/4 top-2/4 -translate-y-2/4 ">
                <div>
                    <Typography variant="h5" className="text-light-100">
                        {text}
                    </Typography>
                    <Typography color="gray" className="text-light-100 mt-4">
                        20 July 2022
                    </Typography>
                </div>
                <IconButton variant="text" color="white">
                    <AiOutlineHeart className="h-4 w-4" />
                </IconButton>
            </div>
        </div>
    );
}
