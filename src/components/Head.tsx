import DefaultHead from "next/head";
import { SITE_NAME, SITE_DESCRIPTION, SITE_IMAGE } from "../constants"

function Head() {
    return (
        <DefaultHead>
            <title>{SITE_NAME}</title>
            <meta property="og:title" content={SITE_NAME}/>
            <meta property="og:description" content={SITE_DESCRIPTION}/>
            <meta property="og:image" content={SITE_IMAGE}/>
        </DefaultHead>
    );
}

export default Head;