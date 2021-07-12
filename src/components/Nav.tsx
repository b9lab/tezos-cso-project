import { useSession } from 'next-auth/client';
import Link from 'next/link';
import { NAV_ITEM_POSITION, NAV_ITEM_VISIBILITY } from '../constants';
import NavItem from '../utils/NavItem';

type NavProps = {
    items: Array<NavItem>
}

function renderSubMenu(children: Array<NavItem> | undefined) {
    if (!children) return <></>;

    return (
        <ul className="absolute bg-accent-1 text-white flex flex-col hover-target min-w-max mt-4 -mx-4">
            { children.map((item: NavItem, index: number) => {
                let classes = "m-4 ";

                return (
                    <li className={classes} key={"sub_menu_item_" + index}>
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

    const navItemFilter = (item: NavItem) => item.visibility == NAV_ITEM_VISIBILITY.PUBLIC ||
        (item.visibility == NAV_ITEM_VISIBILITY.PRIVATE && session) ||
        (item.visibility == NAV_ITEM_VISIBILITY.ANONYMOUS && !session);

    const navItemMap = (item: NavItem, index: number) => {
        let classes = "inline-block px-4 py-4 relative hover-trigger ";
        if (item.position && item.position == NAV_ITEM_POSITION.RIGHT) classes += "float-right m-auto";

        return (
            <li className={classes} key={"menu_item_" + index}>
                <Link href={item.url}>
                    <a>{item.name}</a>
                </Link>
                { renderSubMenu(item.children) }
            </li>
        );
    }
    
    return (
        <nav>
            <ul>
                { props.items.filter(navItemFilter).map(navItemMap) }
            </ul>
        </nav>
    );
}

export default Nav;