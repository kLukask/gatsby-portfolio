import * as React from 'react'
import { ReactNode } from 'react'
import * as LayoutStyles from './layout.module.scss'
import { Link } from 'gatsby'
import Nav from '../nav/nav'
import Footer from '../footer/footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={LayoutStyles.container}>
      <header className={LayoutStyles.container__header}>
        <Link to='/' className={LayoutStyles.header__name}>Lukas</Link>
        <Nav />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout