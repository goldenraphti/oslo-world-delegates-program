import Image from "next/image";
import Link from "next/link";
import styles from "./LogosStripe.module.css";

import talentNorgeLogo from "../public/logos/talent-norge.png";
import foreignAffairMinistryLogo from "../public/logos/norwegian-ministry-of-foreign-affairs-vector-logo.png";
import frittOrdLogo from "../public/logos/fritt-ord-logo-svart-liggende-1000x456.jpg";
import keyChangeLogo from "../public/logos/Keychange and CE Lockup.jpg";
import musicNorwayLogo from "../public/logos/music_norway_big.png";
import saunaLogo from "../public/logos/SAUNA.png";
import goetheLogo from "../public/logos/Logo_Goethe-Institut.png";

export const LogosStripe = () => {
  return (
    <ul className={styles.logosContainer}>
      <li className={styles.partnersLogoContainer}>
        <Image
          src={musicNorwayLogo}
          alt='Music Norway logo'
          height={100}
          width={150}
          placeholder='blur'
          priority={false}
          className={`${styles.partnersLogo} ${styles.logoLowIntensity}`}
        />
      </li>
      <li className={styles.partnersLogoContainer}>
        <Image
          src={foreignAffairMinistryLogo}
          alt='Norwegian Foreign Affair ministry logo'
          height={100}
          width={150}
          placeholder='blur'
          priority={false}
          className={styles.partnersLogo}
        />
      </li>
      <li className={styles.partnersLogoContainer}>
        <Image
          src={frittOrdLogo}
          alt='frittOrd'
          height={100}
          width={150}
          placeholder='blur'
          priority={false}
          className={`${styles.partnersLogo} ${styles.logoLowIntensity}`}
        />
      </li>
      <li className={styles.partnersLogoContainer}>
        <Image
          src={talentNorgeLogo}
          alt='Talent Norge logo'
          height={100}
          placeholder='blur'
          priority={false}
          className={`${styles.partnersLogo} ${styles.logoLowIntensity}`}
        />
      </li>
      <li className={styles.partnersLogoContainer}>
        <Image
          src={keyChangeLogo}
          alt='Key Change logo'
          height={50}
          width={300}
          placeholder='blur'
          priority={false}
          className={styles.partnersLogo}
        />
      </li>
      <li className={styles.partnersLogoContainer}>
        <Image
          src={saunaLogo}
          alt='Oslo Badstuforening logo'
          height={50}
          width={100}
          placeholder='blur'
          priority={false}
          className={`${styles.partnersLogo} ${styles.logoLowIntensity}`}
        />
      </li>
    </ul>
  );
};
