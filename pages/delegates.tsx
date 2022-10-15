import Head from "next/head";
import styles from "../styles/Delegates.module.css";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import { delegatesList } from "../assets/delegates-list";
import { DelegateComponent } from "../components/delegate";

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

        <h2>International delegates</h2>
        <ul className={styles.delegatesList}>
          {delegatesList.international.map((delegate) => (
            <DelegateComponent
              delegate={delegate}
              key={`${delegate.firstName}-${delegate.lastName}`}
            />
          ))}
        </ul>
        <h2>Norwegian delegates</h2>
        <ul className={styles.delegatesList}>
          {delegatesList.norway.map((delegate) => (
            <DelegateComponent
              delegate={delegate}
              key={`${delegate.firstName}-${delegate.lastName}`}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

DelegatesPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default DelegatesPage;
