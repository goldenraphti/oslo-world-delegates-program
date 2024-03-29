import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import { LogosStripe } from "../components/logosStripe";
import { Info, Plane, CalendarDays, Contact, Star } from "lucide-react";
import { LogoOsloWorld } from "../components/LogoOsloWorld";
import { HeadCommon } from "../components/HeadCommon";

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oslo World Delegates Program</title>
        <meta name='description' content='Oslo World Delegates Program' />
        <HeadCommon />
      </Head>

      <div className={styles.main}>
        <LogoOsloWorld />
        <h1 className={styles.title}>Delegates Program</h1>

        <div className={styles.grid}>
          <Link href='/common-infos' className={styles.card}>
            <h2>
              <Info size={20} className={styles.iconLinkCard} />
              Common Info &rarr;
            </h2>
            <p>Find general informations for delegates</p>
          </Link>

          <Link href='/international-infos' className={styles.card}>
            <h2>
              <Plane size={20} className={styles.iconLinkCard} />
              International Info &rarr;
            </h2>
            <p>For international delegates: Transport in Oslo, Hotel, ...</p>
          </Link>

          <Link href='/delegates' className={styles.card}>
            <h2>
              <Contact size={20} className={styles.iconLinkCard} />
              Delegates &rarr;
            </h2>
            <p>Profile description of the full list of delegates</p>
          </Link>

          <Link href='/schedule' className={styles.card}>
            <h2>
              <CalendarDays size={20} className={styles.iconLinkCard} />
              Schedule &rarr;
            </h2>
            <p>The festival&apos;s week program. Seminars, concerts, ..</p>
          </Link>

          <Link href='/meet-the-team' className={styles.card}>
            <h2>
              <Star size={20} className={styles.iconLinkCard} />
              Meet the team&rarr;
            </h2>
            <p>Meet the people behind the curtain, ..</p>
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
