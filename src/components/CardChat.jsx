//Component to show each person conected
import {
    ListItem,
    ListItemPrefix,
    Avatar,
    Typography,
    Badge,
} from "@material-tailwind/react";
import imgProfile from "../img/Img-Profile.svg";

export function CardChat({ user, handlecurrentChat, openDrawerBottom }) {
    return (
        <ListItem
            onClick={() => {
                handlecurrentChat(user.userID);
                openDrawerBottom();
            }}
        >
            <ListItemPrefix>
                <Avatar variant="circular" alt="candice" src={imgProfile} />
            </ListItemPrefix>
            <div>
                {user.hasNewMessages ? (
                    <Badge>
                        <Typography variant="h5" className="text-light-100">
                            {user.username}
                        </Typography>
                    </Badge>
                ) : (
                    <Typography variant="h5" className="text-light-100">
                        {user.username}
                    </Typography>
                )}

                {/* <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                ></Typography> This is for pre view the message in a V2*/}
            </div>
        </ListItem>
    );
}
