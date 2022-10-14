import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";

const DelegatesPage: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Delegates - Oslo World Delegates Program</title>
        <meta
          name='description'
          content='List of the delegates attending the Oslo World Delegates Program'
        />
        <link rel='icon' href='/oslo_world_favicon_2022.png' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Delegates</h1>

        <p className={styles.description}>
          Full list and informations about the delegates attending the Oslo
          World Delegates Program
        </p>
      </main>
    </div>
  );
};

DelegatesPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default DelegatesPage;
