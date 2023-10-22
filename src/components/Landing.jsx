import { Card, Button, Typography } from "@material-tailwind/react";
import Logo from '../img/Logo-wave-hi.svg';

export function Landing() {
    return (
        <Card color="transparent" shadow={true} className="items-center">
            <img src={Logo}/>
            <Typography variant="h1" className="text-tertiary-100 self-start font-black">
                WAVE<spam className="text-primary-100">-HI</spam>
            </Typography>
            <Button
                    className="mt-20 border border-primary-100 text-primary-100 hover:opacity-75 active:opacity-[0.85] bg-transparent focus:ring focus:ring-primary-100"
                    fullWidth
                    type="submit"
                >
                    Log in
            </Button>
            <Button
                    className="mt-6 bg-primary-100 text-dark-100 shadow-md shadow-secondary-100/10 hover:shadow-lg hover:shadow-secondary-100/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    fullWidth
                    type="submit"
                >
                    Register
            </Button>
        </Card>
    );
}
