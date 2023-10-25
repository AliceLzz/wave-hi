//Component to show each message in a conversation
import { CardBody, Typography } from "@material-tailwind/react";

export function CardMessage({ msj }) {
    return (
        <CardBody
            className={
                msj.fromSelf
                    ? "bg-gray-800 items-start rounded-md mt-4 ml-8"
                    : "bg-gray-900 items-start rounded-md mt-4 mr-8 "
            }
        >
            <Typography
                color="gray"
                className="mt-1 font-normal text-light-100"
            >
                {msj.content}
            </Typography>
        </CardBody>
    );
}
