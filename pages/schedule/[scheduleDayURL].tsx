import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/ScheduleDayPage.module.css";
import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";
import { schedule } from "../../assets/schedule-list";
import { sortEventByStartTime } from "../../utils/index";
import { EventCard } from "../../components/eventCard";
import { HeadCommon } from "../../components/HeadCommon";
import { MoveLeft } from "lucide-react";

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
        <HeadCommon />
      </Head>

      <div className='back-link-row'>
        <Link href={`/schedule`} className='back-link-button'>
          <MoveLeft size={20} className={styles.iconLinkCard} />
          Back to schedule overview
        </Link>
      </div>
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
            <h2 className={styles.nightTitle}>Concerts / Night program</h2>
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
