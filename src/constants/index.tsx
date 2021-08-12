import { signOut } from "next-auth/client";
import Button from "../components/Button";
import NavItem from "../utils/NavItem";

export const SITE_NAME: string = 'TZMINT';
export const SITE_DESCRIPTION: string = 'This platform is an example project, which is part of the educational course on the Tezos Developer Platform (tezos.b9lab.com). There is no real investment or company involved.';
export const SITE_IMAGE: string = '';

export const CONTRACT_ADDRESS: string = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || 'KT1HAzXAJKv2L1orAET65gYyoZvoJtPCdPnz';

export const FUND_MULTIPLIER: number = 1;
export const TEZ_DISPLAY_MULTIPLIER: number = 1000000;

export const TRANSACTION_INSPECTOR_INITIAL_INTERVAL: number = 5000;
export const TRANSACTION_INSPECTOR_MAX_INTERVAL: number = 32000;
export const TRANSACTION_INSPECTOR_MAX_RETRY_COUNT: number = 30;

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
        name: "Discover",
        url: "/about",
        visibility: NAV_ITEM_VISIBILITY.PUBLIC,
        children: [
            {
                name: "Programmable Equity",
                url: "/about",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            },
            {
                name: "Continuous Agreement for Future Equity",
                url: "/cafe-info",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            },
            {
                name: "Parameters of Continuous Agreement",
                url: "/cafe-details",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            },
            {
                name: "Investment White Paper",
                url: "/investment-white-paper",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            },
            /*
            {
                name: "Source Code (gh)",
                url: "/",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            },
            {
                name: "(Dev Portal)",
                url: "/",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            },
            */
        ]
    },
    {
        name: "Try it out",
        url: "/get-started",
        visibility: NAV_ITEM_VISIBILITY.PUBLIC,
        children: [
            {
                name: "Get Started",
                url: "/get-started",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            },
            {
                name: "Overview",
                url: "/general-investment-info",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            },
            {
                name: "My Investment",
                url: "/personal-investment-info",
                visibility: NAV_ITEM_VISIBILITY.PRIVATE
            },
            {
                name: "Buy & Sell",
                url: "/fund-withdraw",
                visibility: NAV_ITEM_VISIBILITY.PRIVATE
            },
            {
                name: "Transactions",
                url: "/transactions",
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
