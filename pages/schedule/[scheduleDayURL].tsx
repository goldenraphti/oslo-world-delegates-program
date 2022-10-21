import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/ScheduleDayPage.module.css";
import type { ReactElement } from "react";
import Image from "next/image";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";
import { schedule } from "../../assets/schedule-list";
import { sortEventByStartTime } from "../../utils/index";
import { EventCard } from "../../components/eventCard";

const ScheduleDay: NextPageWithLayout = () => {
  const router = useRouter();
  const { scheduleDayURL } = router.query;

  const scheduleDay = Object.values(schedule).find(
    (day) => day.dayStringForDate === scheduleDayURL
  );

  const scheduleDate = scheduleDay
    ? new Date(scheduleDay.dayStringForDate)
    : null;

  return (
    <div className={styles.container}>
      <Head>
        <title>{`program for ${scheduleDay?.day} of the  Oslo World Delegates Program`}</title>
        <meta
          name='description'
          content={`program for ${scheduleDay?.day} of the  Oslo World Delegates Program`}
        />
        <link rel='icon' href='/oslo_world_favicon_2022.png' />
      </Head>

      <h1 className={styles.title}>
        {scheduleDate?.toLocaleString(undefined, {
          timeZone: "CET",
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h1>
      {scheduleDay &&
        scheduleDay?.events.filter((event) => !event.isNightProgram) && (
          <ul className={styles.eventsList}>
            {scheduleDay?.events
              .filter((event) => !event.isNightProgram)
              .sort(sortEventByStartTime)
              .map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
          </ul>
        )}
      {scheduleDay &&
        scheduleDay?.events?.filter((event) => event.isNightProgram)?.length >
          0 && (
          <div className={styles.nightProgram}>
            <h2 className={styles.nightTitle}>Night program</h2>
            <ul className={styles.eventsList}>
              {scheduleDay?.events
                .filter((event) => event.isNightProgram)
                .sort(sortEventByStartTime)
                .map((event) => (
                  <EventCard key={event.title} event={event} />
                ))}
            </ul>
          </div>
        )}
    </div>
  );
};

ScheduleDay.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default ScheduleDay;
