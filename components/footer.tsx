import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.linkLine}>
        From{" "}
        <a
          href='https://osloworld.no/en'
          target='_blank'
          rel='noopener noreferrer'
        >
          Oslo World
        </a>{" "}
        with <span className='pink'>♥</span> for the delegates
      </p>
      <p className={styles.linkLine}>
        Happily designed and coded by yours truly{" "}
        <a
          href='https://raphaelferrand.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Raphaël Ferrand
        </a>{" "}
      </p>
    </footer>
  );
}
