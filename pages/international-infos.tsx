import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>International Info - Oslo World Delegates Program</title>
        <meta
          name='description'
          content='Information for the international delegates attending the Oslo World Delegates Program'
        />
        <link rel='icon' href='/oslo_world_favicon_2022.png' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>International info</h1>

        <p className={styles.description}>
          Information for the international delegates attending the Oslo World
          Delegates Program
        </p>
      </main>

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
    </div>
  );
};

export default Home;
