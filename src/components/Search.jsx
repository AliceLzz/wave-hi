//Component to make a search of users or post
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import img1 from "../img/img-1.png";
import img2 from "../img/img-2.png";
import img3 from "../img/img-3.png";
import img4 from "../img/img-4.png";
import img5 from "../img/img-5.png";
import img6 from "../img/img-6.png";
import img7 from "../img/img-7.png";
import img8 from "../img/img-8.png";
import img9 from "../img/img-9.png";

export function Search() {
    return (
        <Card color="transparent" shadow={true} className="items-center p-4">
            <Typography variant="h3" className="text-light-100 mb-10">
                Search
            </Typography>

            <Input
                type="search"
                variant="outlined"
                label="What you are looking for?"
                color="white"
            />

            <div className="mt-6 gap-2 grid grid-cols-3">
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
            <Button
                className="mt-6 border border-primary-100 text-primary-100 hover:opacity-75 active:opacity-[0.85] bg-transparent focus:ring focus:ring-primary-100"
                fullWidth
            >
                See More
            </Button>
        </Card>
    );
}
