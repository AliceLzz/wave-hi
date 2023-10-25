//Component to show the feed or wall, main component after login
import { ImgPost } from "./ImgPost";
export function Home() {
    return (
        <div className="columns-2 gap-3 md:columns-3 lg:columns-4 [&>figure:not(:first-child)]:mt-3">
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
            <ImgPost
                src="https://source.unsplash.com/wfalq01jJuU"
                caption="This is a test"
            />
            <ImgPost
                src="https://source.unsplash.com/rMHNK_skwwU"
                caption="This is a test"
            />
            <ImgPost
                src="https://source.unsplash.com/WBMjuGpbrCQ"
                caption="This is a test"
            />
            <ImgPost
                src="https://source.unsplash.com/nCUZ5BYBL_o"
                caption="This is a test"
            />
            <ImgPost
                src="https://source.unsplash.com/3u4fzMQZhjc"
                caption="This is a test"
            />
            <ImgPost
                src="https://source.unsplash.com/haOIqIPSwps"
                caption="This is a test"
            />
        </div>
    );
}
