import Image from 'next/image'
import Link from 'next/link';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import styles from '../styles/loginpage.module.css'

export default function Loginpage() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.formcover}>
        <span className={styles.loginTitle}>Staff Only</span>
      <form className={styles.loginForm}>
        <label>Username</label>
        <input
          type="text"
          className={styles.loginInput}
          placeholder="Enter your username..."
        />
        <label>Password</label>
        <input
          type="password"
          className={styles.loginInput}
          placeholder="Enter your password..."
        />
        <button className={styles.loginButton} type="submit" >
          Sign-in
        </button>
      </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
