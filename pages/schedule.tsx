import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Schedule.module.css";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";

const SchedulePage: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Schedule - Oslo World Delegates Program</title>
        <meta
          name='description'
          content='Schedule for the delegates attending the Oslo World Delegates Program'
        />
        <link rel='icon' href='/oslo_world_favicon_2022.png' />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>Schedule</h1>

        <p className={styles.description}>
          Schedule for the delegates attending the Oslo World Delegates Program
        </p>
      </div>
    </div>
  );
};

SchedulePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SchedulePage;
