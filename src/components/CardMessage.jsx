//Component to show each message in a conversation
import { CardBody, Typography } from "@material-tailwind/react";

export function CardMessage({ myMessage }) {
    return (
        <CardBody
            className={
                myMessage
                    ? "bg-gray-800 items-start rounded-md mt-4 ml-8"
                    : "bg-gray-900 items-start rounded-md mt-4 mr-8 "
            }
        >
            <Typography
                color="gray"
                className="mt-1 font-normal text-light-100"
            >
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
            </Typography>
        </CardBody>
    );
}
