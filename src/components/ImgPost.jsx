//Component for a post with image and text
import { Typography, IconButton } from "@material-tailwind/react";
import { AiOutlineHeart } from "react-icons/ai";

export function ImgPost({ src, caption, owner }) {
    //let formatDate = new Date(parseInt(date));
    return (
        <figure className="relative w-full">
            <img
                className="h-full w-full rounded-xl object-cover object-center"
                src={src}
                alt={caption}
            />
            <figcaption className="absolute bottom-3 flex w-11/12 left-2/4 -translate-x-2/4 justify-between rounded-xl  bg-dark-100/75 py-2 px-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm gap-1">
                <div>
                    <Typography color="white" className="text-xs">
                        {caption}
                    </Typography>
                    <Typography
                        color="white"
                        className="text-[9px] font-normal"
                    >
                        {owner}
                        {/* {`${formatDate.getFullYear()}/${
                            formatDate.getMonth() + 1
                        }/${formatDate.getDate()}-${formatDate.getHours()}:${formatDate.getMinutes()}`} */}
                    </Typography>
                </div>
                <IconButton variant="text" color="white" className="p-0">
                    <AiOutlineHeart className="h-4 w-4" />
                </IconButton>
            </figcaption>
        </figure>
    );
}
