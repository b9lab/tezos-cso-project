import Nav from "./Nav";
import { SITE_TITLE, NAV_ITEMS } from "../constants"

function Header() {
    return (
        <div className="border-b border-black px-6">
            <Nav items={NAV_ITEMS}/>
        </div>
    );
}

export default Header;