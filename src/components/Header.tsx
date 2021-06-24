import Nav from "./Nav";
import { SITE_TITLE, NAV_ITEMS } from "../constants"

function Header() {
    return (
        <div className="flex justify-between">
            <h1>{SITE_TITLE}</h1>
            <Nav items={NAV_ITEMS}/>
        </div>
    );
}

export default Header;