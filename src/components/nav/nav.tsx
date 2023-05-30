import * as React from 'react'
import * as NavStyles from './nav.module.scss';
import { Link } from 'gatsby';

const Nav = () => {
    return (
        <nav className={NavStyles.nav_wrapper}>
            <ul>
                <li>
                    <Link
                     to='/blog'
                     className={NavStyles.link}
                     activeClassName={NavStyles.activeLink}>
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav