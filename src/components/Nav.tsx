import { useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
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
    const router = useRouter();

    const navItemFilter = (item: NavItem) => item.visibility == NAV_ITEM_VISIBILITY.PUBLIC ||
        (item.visibility == NAV_ITEM_VISIBILITY.PRIVATE && session) ||
        (item.visibility == NAV_ITEM_VISIBILITY.ANONYMOUS && !session);

    const navItemMap = (item: NavItem, index: number) => {
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
    
    return (
        <nav>
            <ul>
                { props.items.filter(navItemFilter).map(navItemMap) }
            </ul>
        </nav>
    );
}

export default Nav;