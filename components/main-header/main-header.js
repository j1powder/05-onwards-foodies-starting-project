'use client'

import React from 'react'
import Link from 'next/link'
import logoImg from '../../assets/logo.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import classes from './main-header.module.css'

const MainHeader = () => {
 const path = usePathname();

  return (
    <header className={classes.header}>
        
        <Link className={classes.logo} href='/'>
            <Image src={logoImg} alt='pizza pie' priority/>
            NextLevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li><Link 
                    className={path.startsWith('/meals') ? classes.active : undefined}
                    href="/meals">Browse Meals</Link></li>
                <li><Link 
                    className={path.startsWith('/community') ? classes.active : undefined} 
                    href="/community">Foodies Community</Link></li>
            </ul>
        </nav>
        </header>
  )
}
export default MainHeader;