//Component to show the feed or wall, main component after login
import { ImgPost } from "./ImgPost";
import { Text } from "./Text";

export function Home({ posts }) {
    return (
        <div className="columns-2 gap-3 mb-20 md:columns-3 lg:columns-4 [&>figure:not(:first-child)]:mt-3">
            <ImgPost
                src="https://source.unsplash.com/bYuI23mnmDQ"
                caption="Quiero decir en este post que soy un hombre adios"
            />
            <ImgPost
                src="https://source.unsplash.com/Nllx4R-2c3o"
                caption="This is a test"
            />
            <ImgPost
                src="https://source.unsplash.com/lp40q07DIe0"
                caption="This is a test"
            />
            {posts?.map((post, index) => {
                if (post.img !== "") {
                    return (
                        <ImgPost
                            src={`http://localhost:5000/data/imgs/${post.img}`}
                            caption={post.text}
                            owner={post.owner}
                            key={index}
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
            <ImgPost
                src="https://source.unsplash.com/bYuI23mnmDQ"
                caption="Quiero decir en este post que soy un hombre adios"
            />
            <ImgPost
                src="https://source.unsplash.com/Nllx4R-2c3o"
                caption="This is a test"
            />
            <ImgPost
                src="https://source.unsplash.com/lp40q07DIe0"
                caption="This is a test"
            />
        </div>
    );
}
