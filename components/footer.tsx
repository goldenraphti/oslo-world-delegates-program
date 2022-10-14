import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
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
    </footer>
  );
}
