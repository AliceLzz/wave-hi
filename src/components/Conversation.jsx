//Component to show the conversation with one person
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import arrow from "../img/Union.svg";
import { IconButton } from "@material-tailwind/react";
import { CardMessage } from "./CardMessage";

export function Conversation() {
    return (
        <Card
            color="transparent"
            shadow={true}
            className="p-4 items-center w-full"
        >
            <a href="#" className="self-start">
                <IconButton
                    variant="text"
                    className="rounded-full active:bg-dark-100"
                >
                    <img src={arrow} alt="arrow to go back" className="w-8" />
                </IconButton>
            </a>
            <Typography
                variant="h3"
                className="text-light-100 self-center mb-8"
            >
                James
            </Typography>
            <CardMessage myMessage={true} />
            <CardMessage myMessage={false} />
            <CardMessage myMessage={true} />
        </Card>
    );
}
