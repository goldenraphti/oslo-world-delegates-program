import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Schedule - Oslo World Delegates Program</title>
        <meta
          name='description'
          content='Schedule for the delegates attending the Oslo World Delegates Program'
        />
        {/* TODO: update /favicon.ico with Oslo World favicon */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Schedule</h1>

        <p className={styles.description}>
          Schedule for the delegates attending the Oslo World Delegates Program
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
