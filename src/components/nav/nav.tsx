import * as React from 'react'
import * as NavStyles from './nav.module.scss';

const Nav = () => {
    return (
        <nav className={NavStyles.nav_wrapper}>
            <ul>
                <li>
                    <a
                     href='https://lukaskur.hashnode.dev/'
                     target='_blank'
                     className={NavStyles.link}>
                        Blog
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav