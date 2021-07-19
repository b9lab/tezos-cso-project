import Button from "../components/Button";
import NavItem from "../utils/NavItem";

export const SITE_NAME: string = 'Tezos CSO';
export const SITE_TITLE: string = 'Tezos CSO';
export const SITE_DESCRIPTION: string = 'Site description';
export const SITE_IMAGE: string = '';

export const CONTRACT_ADDRESS: string = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || 'KT1HAzXAJKv2L1orAET65gYyoZvoJtPCdPnz';

export const FUND_MULTIPLIER: number = 1;
export const TEZ_DISPLAY_MULTIPLIER: number = 1000000;

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
        name: "CSO PLATFORM",
        url: "/",
        visibility: NAV_ITEM_VISIBILITY.PUBLIC,
        children: [
            {
                name: "CSO Platform",
                url: "/",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            },
            {
                name: "About this project",
                url: "/about",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            },
            {
                name: "Privacy Policy",
                url: "/privacy",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            }
        ]
    },
    {
        name: "CAFE",
        url: "/cafe-info",
        visibility: NAV_ITEM_VISIBILITY.PUBLIC,
        children: [
            {
                name: "What is a CAFE",
                url: "/cafe-info",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            },
            {
                name: "CAFE Parameters",
                url: "/cafe-details",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            },
            {
                name: "Investment Whitepaper",
                url: "/cafe-info",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            },
        ]
    },
    {
        name: "INVESTMENT",
        url: "/general-investment-info",
        visibility: NAV_ITEM_VISIBILITY.PUBLIC,
        children: [
            {
                name: "Overview",
                url: "/general-investment-info",
                visibility: NAV_ITEM_VISIBILITY.PUBLIC
            },
            {
                name: "My investment",
                url: "/personal-investment-info",
                visibility: NAV_ITEM_VISIBILITY.PRIVATE
            },
            {
                name: "Fund",
                url: "/fund",
                visibility: NAV_ITEM_VISIBILITY.PRIVATE
            },
            {
                name: "Withdraw",
                url: "/withdraw",
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
        url: "/sign-in",
        visibility: NAV_ITEM_VISIBILITY.ANONYMOUS,
        position: NAV_ITEM_POSITION.RIGHT,
        custom: () => {return (<Button handler={() => {}} color="accent-1">Sign in</Button>)}
    },
    {
        name: "Profile",
        url: "/profile",
        visibility: NAV_ITEM_VISIBILITY.PRIVATE,
        position: NAV_ITEM_POSITION.RIGHT,
        children: [
            {
                name: "My profile",
                url: "/profile",
                visibility: NAV_ITEM_VISIBILITY.PRIVATE
            }
        ]
    }
];