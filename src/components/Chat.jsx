// List of friends who are conected
import { Card, Typography } from "@material-tailwind/react";
import { CardChat } from "./CardChat";

export function Chat() {
    return (
        <Card
            color="transparent"
            shadow={true}
            className="p-4 items-center w-full"
        >
            <Typography variant="h3" className="text-light-100 self-center">
                Chat
            </Typography>
            <CardChat />
            <CardChat />
            <CardChat />
        </Card>
    );
}
