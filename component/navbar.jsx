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
        <Link href={`/`}>
        <Image src="/guu-logo.png" alt="Guu Logo" width={35} height={35} className={styles.guuLogoImage} />
        </Link>
        </div>

        <div className={styles.centernav}>

                <nav className={styles.navbar}> 
                 
        <ul className={isOpen === false ? 
                        styles.navmenu : styles.navmenu +' '+ styles.active}> 

                    <span className={styles.navitem}>
            <Link href={`/`}>
            <span className={isOpen === false ? 
                styles.navlink : styles.navlink+' '+ styles.active}
                onClick={openMenu}>Home</span>
            </Link>
</span>

        <li className={styles.dropup}>

  <button className={styles.dropbtn}>Contact us!</button>

  <div className={styles.dropupcontact}>

    <a href="#"><strong>Need more than 5 days?</strong></a><hr/>

    <a href="#">

      <Image src="/user-regular.svg" alt="Vercel Logo" width={15} height={15} /> scholar's affairs
    </a>

    <a href="#">
        <Image src="/phone.svg" alt="Vercel Logo" width={16} height={16} /> +234905466942
    </a>

    <a href="#">
      <Image src="/envelope-regular.svg" alt="Vercel Logo" width={15} height={15} /> Deansoffice@guu.com
    </a>

  </div>

</li>

        <li className={styles.dropup}>
  <button className={styles.dropbtn}>How it Works?</button>
  <div className={styles.dropupcontent}>
    <li href="#">
      <Image src="/creative-commons-nd.svg" alt="info" width={15} height={15} /> Fill the form correctly and honestly.</li>
    <li href="#">
    <Image src="/creative-commons-nd.svg" alt="info" width={15} height={15} /> Wait for approval.</li>
    <li href="#">
    <Image src="/creative-commons-nd.svg" alt="info" width={15} height={15} /> Have the approval sent to you mail.</li>

  </div>
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
