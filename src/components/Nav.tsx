import { useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { MutableRefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import { NAV_ITEM_POSITION, NAV_ITEM_VISIBILITY } from '../constants';
import NavItem from '../utils/NavItem';
import Image from 'next/image';
import closeIcon from '../../public/close-icon.svg';
import menuIcon from '../../public/menu-icon.svg';

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
    }, [ref, setOpenNav]);
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
        if (!item.custom) classes += "hover-trigger p-6 ";
        if (item.position && item.position == NAV_ITEM_POSITION.RIGHT) classes += "float-right m-auto ";
        classes += (item.url == router.pathname) ? "text-accent-1 " : "text-dark-gray ";

        return (
            <li className={classes} key={"menu_item_" + index}>
                <Link href={item.url} passHref>
                    <div>
                        {
                            item.custom ? 
                            item.custom() : 
                            <a>{item.name}</a>
                        }
                    </div>
                </Link>
                { item.children && 
                    <ul className="absolute bg-white text-dark-gray flex flex-col hover-target min-w-max mt-4 -mx-8">
                        { item.children.filter(navItemFilter).map((subItem: NavItem, index: number) => {
                            let classes = "submenu-item";

                            return (
                                <li className={classes} key={"menu_sub_item_" + index}>
                                    <Link href={subItem.url} passHref>
                                        <div className="px-8 py-4">
                                            {
                                                subItem.custom ? 
                                                subItem.custom() : 
                                                <a>{subItem.name}</a>
                                            }
                                        </div>
                                    </Link>
                                </li>
                            );
                        }) }
                    </ul> 
                }
            </li>
        );
    }

    const mobileNavItemMap = (item: NavItem, index: number) => {
        let classes = "w-full mb-4 ";
        if (item.position && item.position == NAV_ITEM_POSITION.RIGHT) classes += "order-last ";

        return (
            <Link href={item.url} key={"menu_item_" + index} passHref>
                <div onClick={() => setOpenNav(!openNav)} className={classes}>
                    <div className={item.custom ? "" : "border-b border-dark-gray"}>
                        { item.custom ? item.custom() : <a>{item.name}</a> }
                    </div>
                    { item.children && item.children.filter(navItemFilter).map((subItem, i) => {
                        return (
                            <Link href={subItem.url} key={"menu_sub_item_" + i} passHref>
                                <div className={subItem.url == router.pathname ? "text-accent-1 " : "text-dark-gray "}>
                                    <a>{subItem.name}</a>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </Link>
        );
    }
    
    return (
        <nav ref={menuRef}>

            {/* Mobile */}

            <div className="w-full py-4 flex justify-end sm:hidden">
                <a onClick={() => setOpenNav(!openNav)}>
                    <Image height="30" width="30" src={openNav ? closeIcon : menuIcon} alt={openNav ? "Close" : "Menu"} />
                </a>
            </div>

            {
                openNav &&
                <div className="w-full flex flex-col items-center justify-around h-full mb-6">
                    { props.items.filter(navItemFilter).map(mobileNavItemMap) }
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