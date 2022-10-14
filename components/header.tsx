import Link from "next/link";
import styles from "./Header.module.css";
import { useThemeDetector } from "../hooks/getDarkTheme";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href='/'>
          <a>
            <span className='screen-reader'>homepage</span>
            <Image
              src={
                useThemeDetector()
                  ? "/oslo-world-logo-white.svg"
                  : "/oslo-world-logo.svg"
              }
              alt='Oslo World Logo'
              width={200}
              height={100}
            />
          </a>
        </Link>
        <ul>
          <li>
            <Link href='/common-infos'>
              <a>Common info</a>
            </Link>
          </li>
          <li>
            <Link href='/international-infos'>
              <a>International</a>
            </Link>
          </li>
          <li>
            <Link href='/delegates'>
              <a>Delegates</a>
            </Link>
          </li>
          <li>
            <Link href='/schedule'>
              <a>Schedule</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
