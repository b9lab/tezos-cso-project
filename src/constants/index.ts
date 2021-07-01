import NavItem from "../utils/NavItem";

export const SITE_NAME: string = 'Tezos CSO';
export const SITE_TITLE: string = 'Tezos CSO';
export const SITE_DESCRIPTION: string = 'Site description';
export const SITE_IMAGE: string = '';

export enum NAV_ITEM_VISIBILITY {
    PUBLIC,
    PRIVATE,
    ANONYMOUS // visible only if not logged in
};

export const NAV_ITEMS: Array<NavItem> = [
    {
        name: "Home",
        url: "/",
        visibility: NAV_ITEM_VISIBILITY.PUBLIC
    },
    {
        name: "General Investment Info",
        url: "/general-investment-info",
        visibility: NAV_ITEM_VISIBILITY.PUBLIC
    },
    {
        name: "Sign in",
        url: "/sign-in",
        visibility: NAV_ITEM_VISIBILITY.ANONYMOUS
    },
    {
        name: "Profile",
        url: "/profile",
        visibility: NAV_ITEM_VISIBILITY.PRIVATE
    }
];