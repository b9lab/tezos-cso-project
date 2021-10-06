import Nav from "./Nav";
import { NAV_ITEMS } from "../constants/nav"

/**
 * Main header
 */
export default function Header() {
    return (
        <div className="text-gray-500 px-8 bg-white font-medium">
            <Nav items={NAV_ITEMS}/>
        </div>
    );
}
