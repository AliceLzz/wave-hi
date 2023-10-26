import { Textarea, Button } from "@material-tailwind/react";
import { useState } from "react";

export function PhotoForm({ userName, handleSendPost }) {
    const [text, setText] = useState("");
    const [file, setFile] = useState(null);

    function handleTextChange(e) {
        setText(e.target.value);
    }

    function handleFileChange(e) {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }

    function upload(e) {
        console.log(e.target);
        e.preventDefault();
        const formData = new FormData();
        formData.append("text", text);
        formData.append("file", file);
        formData.append("user", userName);
        handleSendPost(formData);
        setText("");
        setFile(null);
    }
    return (
        <form
            className="relative w-full mt-4"
            id="post"
            encType="multipart/form-data"
            onSubmit={upload}
        >
            <Textarea
                variant="outlined"
                label="Your Message"
                rows={4}
                color="yellow"
                className="text-light-100"
                value={text}
                onChange={handleTextChange}
            />
            <div className="flex w-full justify-between py-1.5">
                <div className="flex gap-2 w-full">
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        className="rounded-md text-primary-100"
                        onChange={handleFileChange}
                    />

                    <Button size="sm" className="rounded-md" type="submit">
                        Post
                    </Button>
                </div>
            </div>
        </form>
    );
}
