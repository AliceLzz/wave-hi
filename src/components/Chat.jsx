import {
    Card,
    CardHeader,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import imgProfile from '../img/Img-Profile.svg';
   
   
  export function Chat() {
    return (
      <Card color="transparent" shadow={true} className="p-4 items-center w-full">
            <Typography variant="h3" className="text-light-100 self-center">
                Chat
            </Typography>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="flex items-start gap-4 p-2 w-full border border-gray-700"
        >
          <Avatar
            size="lg"
            variant="circular"
            src={imgProfile}
            alt="tania andrew"
          />
          <div className="flex w-full flex-col gap-0.5" >
            <div className="flex items-center justify-between">
              <Typography variant="h5" className="text-light-100">
                Tania Andrew
              </Typography>

            </div>
            <Typography color="gray" className="mt-1 font-normal">
                Hi, nice to meet you! 
            </Typography>
          </div>
        </CardHeader>

        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="flex items-start gap-4 p-2 w-full border border-gray-700"
        >
          <Avatar
            size="lg"
            variant="circular"
            src={imgProfile}
            alt="tania andrew"
          />
          <div className="flex w-full flex-col gap-0.5" >
            <div className="flex items-center justify-between">
              <Typography variant="h5" className="text-light-100">
                Tania Andrew
              </Typography>

            </div>
            <Typography color="gray" className="mt-1 font-normal">
                Hi, nice to meet you! 
            </Typography>
          </div>
        </CardHeader>

        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="flex items-start gap-4 p-2 w-full border border-gray-700"
        >
          <Avatar
            size="lg"
            variant="circular"
            src={imgProfile}
            alt="tania andrew"
          />
          <div className="flex w-full flex-col gap-0.5" >
            <div className="flex items-center justify-between">
              <Typography variant="h5" className="text-light-100">
                Tania Andrew
              </Typography>

            </div>
            <Typography color="gray" className="mt-1 font-normal">
                Hi, nice to meet you! 
            </Typography>
          </div>
        </CardHeader>

      </Card>
    );
  }