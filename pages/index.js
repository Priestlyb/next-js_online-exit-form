import Link from 'next/link';
import Image from 'next/image'
import Footer from '../component/footer';
import Navbar from '../component/navbar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Online Exit Form <br/><a href="https://www.gregoryuniversityuturu.edu.ng/" target="blank">Gregory University, Uturu!</a>
        </h1>

        <h6 className={styles.sub}>
          Leaving School Just Got Easier
        </h6>

        <p className={styles.description}>
          Get started by filling <br />
        <Link href={`/formpage`}>
        <span className={styles.code}>Exit Form</span>
        </Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
