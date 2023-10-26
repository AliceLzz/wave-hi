import {
    Dialog,
    DialogHeader,
    DialogBody,
    Typography,
} from "@material-tailwind/react";

export function ShowImgModal({ handleOpen, objOpenModal }) {
    return (
        <Dialog size="md" open={objOpenModal.open} handler={handleOpen}>
            <DialogHeader className="justify-between border">
                <div className="-mt-px flex flex-col">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                    >
                        {objOpenModal.caption}
                    </Typography>
                    <Typography
                        variant="small"
                        color="gray"
                        className="text-xs font-normal"
                    >
                        {objOpenModal.owner}
                    </Typography>
                </div>
            </DialogHeader>
            <DialogBody className="border">
                <img
                    alt="nature"
                    className="w-full rounded-lg object-cover object-center"
                    src={objOpenModal.src}
                />
            </DialogBody>
        </Dialog>
    );
}
