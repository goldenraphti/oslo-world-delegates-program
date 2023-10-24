import Link from "next/link";
import styles from "./Header.module.css";
import { LogoOsloWorld } from "./LogoOsloWorld";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href='/'>

          <span className='screen-reader'>homepage</span>
          <LogoOsloWorld />

        </Link>
        <ul>
          <li>
            <Link href='/common-infos'>
              Common info
            </Link>
          </li>
          <li>
            <Link href='/international-infos'>
              International
            </Link>
          </li>
          <li>
            <Link href='/delegates'>
              Delegates
            </Link>
          </li>
          <li>
            <Link href='/schedule'>
              Schedule
            </Link>
          </li>
          <li>
            <Link href='/meet-the-team'>
              Staff
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
