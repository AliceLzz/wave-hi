// Component for a post with only text
import { IconButton, Typography } from "@material-tailwind/react";
import { AiOutlineHeart } from "react-icons/ai";

export function Text({ caption, owner }) {
    //let formatDate = new Date(parseInt(date));
    return (
        <div className="relative w-full h-40 ">
            <div className="border absolute flex top-2/4 -translate-y-2/4 w-10/12 left-2/4 -translate-x-2/4 justify-between rounded-xl  bg-dark-100/75 py-3 px-5 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm gap-1">
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
                <IconButton variant="text" color="white">
                    <AiOutlineHeart className="h-4 w-4" />
                </IconButton>
            </div>
        </div>
    );
}
