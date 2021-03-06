import { signOut } from "next-auth/client";
import Button from "../components/Button";
import NavItem from "../utils/NavItem";

export enum NAV_ITEM_VISIBILITY {
    PUBLIC,
    PRIVATE,
    ANONYMOUS // visible only if not logged in
};

export enum NAV_ITEM_POSITION {
    LEFT,
    RIGHT
};

export const NAV_ITEMS: Array<NavItem> = [
    {
        name: "TZMINT",
        url: "/",
        visibility: NAV_ITEM_VISIBILITY.PUBLIC
    },
    {
        name: "Try it out",
        url: "/get-started",
        visibility: NAV_ITEM_VISIBILITY.PUBLIC,
        children: [
            {
                name: "Investment Overview",
                url: "/general-investment-info",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            },
            {
                name: "My Investment",
                url: "/personal-investment-info",
                visibility: NAV_ITEM_VISIBILITY.PRIVATE
            },
            {
                name: "Buy & Sell TZM",
                url: "/fund-withdraw",
                visibility: NAV_ITEM_VISIBILITY.PRIVATE
            }
        ]
    },
    {
        name: "Sign in",
        url: "/api/auth/signin",
        visibility: NAV_ITEM_VISIBILITY.ANONYMOUS,
        position: NAV_ITEM_POSITION.RIGHT,
        custom: () => {return (<Button handler={() => {}} color="accent-1" className="signin-button">Sign in</Button>)}
    },
    {
        name: "Profile",
        url: "/profile",
        visibility: NAV_ITEM_VISIBILITY.PRIVATE,
        position: NAV_ITEM_POSITION.RIGHT,
        children: [
            {
                name: "My Profile",
                url: "/profile",
                visibility: NAV_ITEM_VISIBILITY.PRIVATE
            },
            {
                name: "Sign Out",
                url: "",
                visibility: NAV_ITEM_VISIBILITY.PRIVATE,
                custom: () => { return (<button className="font-family-headline" onClick={() => signOut({callbackUrl: '/'})}>Sign out</button>) }
            }
        ]
    }
];
