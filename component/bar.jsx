import Head from 'next/head'
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Navbar() {

  const [isOpen,setIsOpen] = useState(false);
  const openMenu= ()=> setIsOpen(!isOpen);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Gregory University Uturu | Online Exit Form</title>
        <meta name="description" content="Leaving School Just Got Easier" />
        <link rel="icon" href="/guu-logo.png" />
      </Head>

      <nav className={styles.nav}>

        <div className={styles.guuLogo}>
        <Image src="/guu-logo.png" alt="Guu Logo" width={50} height={50} className={styles.guuLogoImage} />
        </div>

        <div className={styles.centernav}>

                <nav className={styles.navbar}> 
                 
        <ul className={isOpen === false ? 
                        styles.navmenu : styles.navmenu +' '+ styles.active}>

                    <li className={styles.navitem}>

                       <Link href='/about'>

                         <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+ styles.active}
                                    onClick={openMenu}>Home</a>

                        </Link>

                    </li>

                </ul>

                <button className={isOpen === false ? 
                                    styles.hamburger : styles.hamburger+' '+ styles.active}
                                    onClick={openMenu}
                                    >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                </nav>
                </div>

    <Link href="/loginpage">
    <button className={styles.adminbtn}>Staff login</button>
    </Link>

      </nav>

    </div>
  )
}
