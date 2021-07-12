import { useSession } from 'next-auth/client';
import Link from 'next/link';
import { NAV_ITEM_POSITION, NAV_ITEM_VISIBILITY } from '../constants';
import NavItem from '../utils/NavItem';

type NavProps = {
    items: Array<NavItem>
}

function Nav(props: NavProps) {
    const [ session ] = useSession();
    
    return (
        <nav>
            <ul>
                { props.items.filter((item) => item.visibility == NAV_ITEM_VISIBILITY.PUBLIC ||
                        (item.visibility == NAV_ITEM_VISIBILITY.PRIVATE && session) ||
                        (item.visibility == NAV_ITEM_VISIBILITY.ANONYMOUS && !session)
                ).map((item: NavItem, index: number) => {
                    let classes = "inline m-2 ";
                    if (item.position && item.position == NAV_ITEM_POSITION.RIGHT) classes += "float-right m-auto";

                    return (
                        <li className={classes} key={index}>
                            <Link href={item.url}>
                                <a>{item.name}</a>
                            </Link>
                        </li>
                    );
                }) }
            </ul>
        </nav>
    );
}

export default Nav;