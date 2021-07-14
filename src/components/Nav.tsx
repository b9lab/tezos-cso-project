import { useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import { NAV_ITEM_POSITION, NAV_ITEM_VISIBILITY } from '../constants';
import NavItem from '../utils/NavItem';

type NavProps = {
    items: Array<NavItem>
}

function useClickOutsideListener(ref: MutableRefObject<any>, setOpenNav: SetStateAction<any>) {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpenNav(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);
}

function renderSubMenu(children: Array<NavItem> | undefined) {
    if (!children) return <></>;

    return (
        <ul className="absolute bg-accent-1 text-white flex flex-col hover-target min-w-max mt-4 -mx-4">
            { children.map((item: NavItem, index: number) => {
                let classes = "m-4 ";

                return (
                    <li className={classes} key={"menu_sub_item_" + index}>
                        <Link href={item.url}>
                            <a>{item.name}</a>
                        </Link>
                    </li>
                );
            }) }
        </ul>
    );
}

function Nav(props: NavProps) {
    const [ session ] = useSession();
    const router = useRouter();

    const [openNav, setOpenNav] = useState<boolean>();

    const menuRef = useRef(null);
    useClickOutsideListener(menuRef, setOpenNav);

    const navItemFilter = (item: NavItem) => item.visibility == NAV_ITEM_VISIBILITY.PUBLIC ||
        (item.visibility == NAV_ITEM_VISIBILITY.PRIVATE && session) ||
        (item.visibility == NAV_ITEM_VISIBILITY.ANONYMOUS && !session);

    const desktopNavItemMap = (item: NavItem, index: number) => {
        let classes = "inline-block relative cursor-pointer ";
        if (!item.custom) classes += "hover-trigger p-4 ";
        if (item.position && item.position == NAV_ITEM_POSITION.RIGHT) classes += "float-right m-auto ";
        classes += (item.url == router.pathname) ? "text-accent-1 " : "text-dark-gray ";

        return (
            <Link href={item.url} key={"menu_item_" + index}>
                <li className={classes}>
                    {
                        item.custom ? 
                        item.custom() : 
                        <a>{item.name}</a>
                    }
                    { renderSubMenu(item.children) }
                </li>
            </Link>
        );
    }

    const mobileNavItemMap = (item: NavItem, index: number) => {
        let classes = "";
        if (item.position && item.position == NAV_ITEM_POSITION.RIGHT) classes += "order-last ";
        classes += (item.url == router.pathname) ? "text-accent-1 " : "text-dark-gray ";

        return (
            <Link href={item.url} key={"menu_item_" + index}>
                <div onClick={() => setOpenNav(!openNav)} className={classes}>
                    {
                        item.custom ? 
                        item.custom() : 
                        <a>{item.name}</a>
                    }
                </div>
            </Link>
        );
    }
    
    return (
        <nav ref={menuRef}>

            {/* Mobile */}

            <div className="w-full py-4 flex justify-end sm:hidden">
                <a onClick={() => setOpenNav(!openNav)}>
                    <img height="30" width="30" src={openNav ? "close-icon.svg" : "menu-icon.svg"} alt={openNav ? "Close" : "Menu"} />
                </a>
            </div>

            {
                openNav &&
                <div className="w-full">
                    <div className="flex flex-col items-center justify-around h-full">
                        { props.items.filter(navItemFilter).map(mobileNavItemMap) }
                    </div>
                </div>
            }

            {/* Desktop */}

            <ul className="hidden sm:block">
                { props.items.filter(navItemFilter).map(desktopNavItemMap) }
            </ul>
        </nav>
    );
}

export default Nav;