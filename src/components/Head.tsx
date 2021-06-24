import DefaultHead from "next/head";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_IMAGE } from "../constants"

function Head() {
    return (
        <DefaultHead>
            <title>{SITE_TITLE}</title>
            <meta property="og:title" content={SITE_TITLE}/>
            <meta property="og:description" content={SITE_DESCRIPTION}/>
            <meta property="og:image" content={SITE_IMAGE}/>
        </DefaultHead>
    );
}

export default Head;