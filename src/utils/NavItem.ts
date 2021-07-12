import { NAV_ITEM_POSITION, NAV_ITEM_VISIBILITY } from "../constants";

type NavItem = {
    name: string,
    url: string,
    visibility: NAV_ITEM_VISIBILITY,
    position?: NAV_ITEM_POSITION // default left
}

export default NavItem;