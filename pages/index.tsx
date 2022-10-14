import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useThemeDetector } from "../hooks/getDarkTheme";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oslo World Delegates Program</title>
        <meta name='description' content='Oslo World Delegates Program' />
        <link rel='icon' href='/oslo_world_favicon_2022.png' />
      </Head>

      <main className={styles.main}>
        <Image
          src={
            useThemeDetector()
              ? "/oslo-world-logo-white.svg"
              : "/oslo-world-logo.svg"
          }
          alt='Oslo World Logo'
          width={400}
          height={200}
        />
        <h1 className={styles.title}>Oslo World Delegates Program</h1>

        <div className={styles.grid}>
          <Link href='/common-infos'>
            <a className={styles.card}>
              <h2>Common Info &rarr;</h2>
              <p>Find general informations for delegates</p>
            </a>
          </Link>

          <Link href='/international-infos'>
            <a className={styles.card}>
              <h2>International Info &rarr;</h2>
              <p>For international delegates: Transport in Oslo, Hotel, ...</p>
            </a>
          </Link>

          <Link href='/delegates'>
            <a className={styles.card}>
              <h2>Delegates &rarr;</h2>
              <p>Profile description of the full list of delegates</p>
            </a>
          </Link>

          <Link href='/schedule'>
            <a className={styles.card}>
              <h2>Schedule &rarr;</h2>
              <p>The festival&apos;s week program. Seminars, concerts, ..</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout hasHeader={false}>{page}</Layout>;
};

export default Home;
