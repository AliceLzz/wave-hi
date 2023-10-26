//Component to show the conversation with one person
import { Card, Drawer, Typography } from "@material-tailwind/react";
import arrow from "../img/Union.svg";
import { IconButton } from "@material-tailwind/react";
import { CardMessage } from "./CardMessage";
import { useState, useRef, useEffect } from "react";

export function Conversation({
    openBottom,
    closeDrawerBottom,
    handleSendMsj,
    userChat,
}) {
    const [msj, setMsj] = useState("");
    // The useRef and useEffect are to move to bottom when new message appear
    const ref = useRef(null);

    useEffect(() => {
        if (userChat?.messages?.length) {
            ref.current?.scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        }
    }, [userChat?.messages?.length]);

    //Functions to handle input and button send message
    function handleInput(e) {
        setMsj(e.target.value);
    }
    function sendButton() {
        handleSendMsj(msj);
        setMsj("");
    }
    return (
        <Drawer
            placement="bottom"
            open={openBottom}
            onClose={closeDrawerBottom}
            className="p-4 bg-dark-100"
            size={900}
        >
            <Card
                color="transparent"
                shadow={true}
                className="p-4 items-center w-full"
            >
                <IconButton
                    variant="text"
                    className="rounded-full active:bg-dark-100"
                    onClick={closeDrawerBottom}
                >
                    <img src={arrow} alt="arrow to go back" className="w-8" />
                </IconButton>

                <Typography
                    variant="h3"
                    className="text-light-100 self-center mb-8"
                >
                    {userChat ? userChat.username : ""}
                </Typography>
            </Card>
            <div className="mt-5 overflow-y-auto h-4/6">
                {userChat?.messages?.map((msj, index) => {
                    return <CardMessage msj={msj} key={index} />;
                })}
                {/* This div is to create a reference and move screen view to see it */}
                <div ref={ref} id="messagesContainer"></div>
            </div>
            <div className="absolute bottom-2 left-2 right-2 ">
                <input
                    id="input"
                    variant="outlined"
                    color="white"
                    autoComplete="off"
                    onChange={handleInput}
                    value={msj}
                    className="p-2 rounded-md w-10/12 flex-grow h-12 bg-black text-light-100 focus:border-primary-100 border-2 focus:outline-none"
                />
                <button
                    id="sendMsj"
                    onClick={sendButton}
                    className="mt-6 w-2/12 h-12 border rounded-md bg-primary-100 text-dark-100 shadow-md shadow-secondary-100/10 hover:shadow-lg hover:shadow-secondary-100/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                >
                    Send
                </button>
            </div>
        </Drawer>
    );
}
