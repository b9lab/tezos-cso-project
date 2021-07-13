import { NAV_ITEM_POSITION, NAV_ITEM_VISIBILITY } from "../constants";

type NavItem = {
    name: string,
    url: string,
    visibility: NAV_ITEM_VISIBILITY,
    position?: NAV_ITEM_POSITION, // default left
    children?: Array<NavItem>, // a NavItem child inherits the visibility from the parent
    custom?: any
}

export default NavItem;