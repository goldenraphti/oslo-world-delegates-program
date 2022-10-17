import Link from "next/link";
import { eventInterface } from "../interfaces";
import styles from "./Event.module.css";

type Props = {
  event: eventInterface;
};

export const EventCard = ({ event }: Props) => {
  return (
    <li
      className={`${styles.card} ${
        event.isNightProgram ? styles.nightCard : ""
      }`}
    >
      <p className={styles.time}>
        {event.startTime}
        {event.endTime ? " - " + event.endTime : ""}
      </p>

      <p className={styles.title}>{event.title}</p>

      {(event.venue || event.language) && (
        <p>
          {event.venue && !event.isNightProgram && (
            <span className={styles.venue}>🏠 {event.venue}</span>
          )}
          {event.venue && event.language && " - "}
          {event.language && (
            <span className={styles.language}>{event.language}</span>
          )}
        </p>
      )}
      {event.description && (
        <p className={styles.description}>
          <b>speakers</b>: {event.description}
        </p>
      )}
      {event.speakers && <p className={styles.speakers}>{event.speakers}</p>}
      {event.moderators && (
        <p className={styles.moderators}>
          <b>moderators</b>: {event.moderators}
        </p>
      )}
    </li>
  );
};
