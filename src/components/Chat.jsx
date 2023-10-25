// List of friends who are conected
import { Card, Typography, List } from "@material-tailwind/react";
import { CardChat } from "./CardChat";
import { Conversation } from "./Conversation";
import { useState, useEffect } from "react";

export function Chat({
    friendsListObj,
    handlecurrentChat,
    handleSendMsj,
    userChat,
    setCurrentChat,
}) {
    const [openBottom, setOpenBottom] = useState(false);
    const openDrawerBottom = () => setOpenBottom(true);
    const closeDrawerBottom = () => {
        setOpenBottom(false);
        setCurrentChat("");
    };
    useEffect(() => {
        if (!userChat) {
            closeDrawerBottom();
        }
    });
    return (
        <Card
            color="transparent"
            shadow={true}
            className="items-center p-4 w-screen"
        >
            <Typography variant="h3" className="text-light-100 self-center">
                Chat
            </Typography>
            <List>
                {Object.values(friendsListObj).map((user) => {
                    return (
                        <CardChat
                            user={user}
                            handlecurrentChat={handlecurrentChat}
                            key={user.userID}
                            openDrawerBottom={openDrawerBottom}
                        />
                    );
                })}
            </List>

            <Conversation
                openBottom={openBottom}
                closeDrawerBottom={closeDrawerBottom}
                handleSendMsj={handleSendMsj}
                userChat={userChat}
            />
        </Card>
    );
}
