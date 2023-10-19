import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useThemeDetector } from "../hooks/getDarkTheme";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import { LogosStripe } from "../components/logosStripe";
import { Info, Plane, CalendarDays, Contact, Star } from "lucide-react";
import { LogoOsloWorld } from "../components/LogoOsloWorld";

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oslo World Delegates Program</title>
        <meta name='description' content='Oslo World Delegates Program' />
        <link rel='icon' href='/oslo_world_favicon_2022.png' />
      </Head>

      <div className={styles.main}>
        <LogoOsloWorld />
        <h1 className={styles.title}>Delegates Program</h1>

        <div className={styles.grid}>
          <Link href='/common-infos'>
            <a className={styles.card}>
              <h2>
                <Info size={20} className={styles.iconLinkCard} />
                Common Info &rarr;
              </h2>
              <p>Find general informations for delegates</p>
            </a>
          </Link>

          <Link href='/international-infos'>
            <a className={styles.card}>
              <h2>
                <Plane size={20} className={styles.iconLinkCard} />
                International Info &rarr;
              </h2>
              <p>For international delegates: Transport in Oslo, Hotel, ...</p>
            </a>
          </Link>

          <Link href='/delegates'>
            <a className={styles.card}>
              <h2>
                <Contact size={20} className={styles.iconLinkCard} />
                Delegates &rarr;
              </h2>
              <p>Profile description of the full list of delegates</p>
            </a>
          </Link>

          <Link href='/schedule'>
            <a className={styles.card}>
              <h2>
                <CalendarDays size={20} className={styles.iconLinkCard} />
                Schedule &rarr;
              </h2>
              <p>The festival&apos;s week program. Seminars, concerts, ..</p>
            </a>
          </Link>

          <Link href='/meet-the-team'>
            <a className={styles.card}>
              <h2>
                <Star size={20} className={styles.iconLinkCard} />
                Meet the team&rarr;
              </h2>
              <p>Meet the people behind the curtain, ..</p>
            </a>
          </Link>
        </div>
        <LogosStripe />
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout hasHeader={false}>{page}</Layout>;
};

export default Home;
