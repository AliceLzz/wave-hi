// Component to show information about the users, their post and actions to follow and send a message
import { Card, Button, Typography } from "@material-tailwind/react";
import { socket } from "../socket";
import imgProfile from "../img/Img-Profile.svg";
import img1 from "../img/img-1.png";
import img2 from "../img/img-2.png";
import img3 from "../img/img-3.png";
import img4 from "../img/img-4.png";
import img5 from "../img/img-5.png";
import img6 from "../img/img-6.png";
import img7 from "../img/img-7.png";
import img8 from "../img/img-8.png";
import img9 from "../img/img-9.png";

import arrow from "../img/Union.svg";

export function Profile() {
    function disconnect() {
        socket.disconnect();
    }
    return (
        <Card color="transparent" shadow={true} className="p-4 items-center">
            <img src={imgProfile} />
            <Typography variant="h3" className="text-light-100 mt-8">
                Ana Oliveira
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Hi, nice to meet you!
            </Typography>
            <Button
                className="mt-6 w-40 border border-primary-100 text-primary-100 hover:opacity-75 active:opacity-[0.85] bg-transparent focus:ring focus:ring-primary-100"
                type="button"
            >
                Follow Me
            </Button>
            <Button
                className="mt-2 mb-4 w-40 border border-primary-100 text-primary-100 hover:opacity-75 active:opacity-[0.85] bg-transparent focus:ring focus:ring-primary-100"
                type="button"
                onClick={disconnect}
            >
                Log out
            </Button>

            <div className="mt-2 gap-2 grid grid-cols-3">
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
                <img src={img4} />
                <img src={img5} />
                <img src={img6} />
                <img src={img7} />
                <img src={img8} />
                <img src={img9} />
            </div>
        </Card>
    );
}
