//Component for a post with image and text
import { Typography, IconButton } from "@material-tailwind/react";
import { AiOutlineHeart } from "react-icons/ai";

export function ImgPost({ src, caption }) {
    return (
        <figure className="relative w-full">
            <img
                className="h-full w-full rounded-xl object-cover object-center"
                src={src}
                alt={caption}
            />
            <figcaption className="absolute bottom-4 flex w-10/12 left-2/4 -translate-x-2/4 justify-between rounded-xl  bg-dark-100/75 py-3 px-5 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm gap-1">
                <div>
                    <Typography color="white" className="text-xs">
                        {caption}
                    </Typography>
                    <Typography
                        color="white"
                        className="text-[9px] font-normal"
                    >
                        20 July 2022
                    </Typography>
                </div>
                <IconButton variant="text" color="white">
                    <AiOutlineHeart className="h-4 w-4" />
                </IconButton>
            </figcaption>
        </figure>
    );
}
