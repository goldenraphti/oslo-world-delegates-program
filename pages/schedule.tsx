import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Schedule.module.css";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import { schedule } from "../assets/schedule-list";

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
          This is your schedule for the festival week. We strongly encourage you
          to follow the entirety of the day program (except the events in a
          language you do not understand 😉).
          <br />
          We have highlighted the activities you should <i>definitely</i> not
          miss.
        </p>

        <ul className={styles.scheduleList}>
          {schedule.map((day) => (
            <li className={styles.cardShell} key={day.day}>
              <Link href={`/schedule/${day.dayStringForDate}`}>
                <a className={styles.cardLink}>{day.day}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

SchedulePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SchedulePage;
