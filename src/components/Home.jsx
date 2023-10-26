//Component to show the feed or wall, main component after login
import { ImgPost } from "./ImgPost";
import { Text } from "./Text";
import { ShowImgModal } from "./ShowImgModal";
import { useState } from "react";
import { func } from "prop-types";

export function Home({ posts }) {
    const [objOpenModal, setObjOpenModal] = useState({
        open: false,
        src: "",
        caption: "",
        owner: "",
    });

    function handleOpen() {
        let newObj = {
            open: false,
            src: "",
            caption: "",
            owner: "",
        };
        setObjOpenModal(newObj);
    }

    function handleOpenBig(obj) {
        let newObj = { open: true, ...obj };
        setObjOpenModal(newObj);
    }

    return (
        <div className="columns-2 gap-3 mb-20 md:columns-3 lg:columns-4 [&>figure:not(:first-child)]:mt-3">
            {posts?.map((post, index) => {
                if (post.img !== "") {
                    return (
                        <ImgPost
                            src={`https://mtk5jvf5-5000.usw2.devtunnels.ms/data/imgs/${post.img}`}
                            caption={post.text}
                            owner={post.owner}
                            key={index}
                            handleOpenBig={handleOpenBig}
                        />
                    );
                } else {
                    return (
                        <Text
                            caption={post.text}
                            owner={post.owner}
                            key={index}
                        />
                    );
                }
            })}

            <ShowImgModal objOpenModal={objOpenModal} handleOpen={handleOpen} />
        </div>
    );
}
