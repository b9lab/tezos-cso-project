import Nav from "./Nav";
import { NAV_ITEMS } from "../constants"

function Header() {
    return (
        <div className="text-gray-500 px-6 bg-white">
            <Nav items={NAV_ITEMS}/>
        </div>
    );
}

export default Header;