import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './navbar.module.css';
import NavItem from './NavItem';

const MENU_LIST = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "Bio",
    href: "/bio"
  },
  {
    text: "Media",
    href: "/media"
  },
  {
    text: "Schedule",
    href: "/schedule"
  },
  {
    text: "Contact",
    href: "/contact"
  },
]

const Navbar = () => {

  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <header>
        <nav className='nav'>
        <Link 
          className={styles.navbar_icon}
          onClick={() => setActiveIdx(0)}
          href='/'>
          <Image 
          src={'/images/iconSol.png'}
          width={100 / 5}
          height={215 / 5}
          alt='Icono clave de Sol'
          />
        </Link>

        <div 
            onClick={() => setNavActive(!navActive)}
            className='nav__menu-bar'>
            <div></div>
            <div></div>
            <div></div>
          </div>

        <div 
          className={`${navActive ? "active" : ""}
           nav__menu-list`}
          >
            {MENU_LIST.map((menu, idx) =>{
              return (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}>
                  <NavItem
                    active={activeIdx === idx}
                    {...menu} />
                </div>
              )
            })}
        </div>
        </nav>
      </header>      
    </>
  )
}

export default Navbar