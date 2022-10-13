import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Footer() {
  return (

      <footer className={styles.footer}>
        <a
          href="https://priestly-cv.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.logo}>
            <Image src="/user-secret-solid.svg" alt="secret user" width={72} height={16} />
          </span>
        </a>
      </footer>
  )
}
