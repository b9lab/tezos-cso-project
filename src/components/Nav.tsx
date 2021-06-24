import Link from 'next/link'
import NavItem from '../utils/NavItem';

type NavProps = {
    items: Array<NavItem>
}

function Nav(props: NavProps) {
    return (
        <nav>
            <ul>
                { props.items.map((item: NavItem, index: number) => {
                    return (
                        <li className="inline m-2" key={index}>
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