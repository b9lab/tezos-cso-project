import Image from "next/image";
import { useState } from "react";

type ImageWrapperProps = {
    src: any,
    alt: string
}

function ImageWrapper(props: ImageWrapperProps) {
    const [fullScreen, setFullScreen] = useState<boolean>(false);

    return (
        <div className={fullScreen ? "fixed inset-0 z-10 bg-light-gray cursor-zoom-out" : "cursor-zoom-in w-full m-auto"}>
            <Image src={props.src} layout={fullScreen ? "fill" : "responsive"} objectFit="contain" alt={props.alt} onClick={() => setFullScreen(!fullScreen)}/>
        </div>
    );
}

export default ImageWrapper;
