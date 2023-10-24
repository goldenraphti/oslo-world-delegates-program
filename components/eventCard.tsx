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
        {event.obligatoryTarget && event.obligatoryTarget === "all" && (
          <span className={styles.obligatory}>attendance expected</span>
        )}
        {event.obligatoryTarget && event.obligatoryTarget === "keychange" && (
          <span className={styles.obligatory}>
            Obligatory for keychange participant
          </span>
        )}
      </p>

      <p className={styles.title}>
        {event.title}
        {event.venue && event.isNightProgram && ` @ ${event.venue}`}
      </p>

      {(event.venue || event.language) && (
        <p className={styles.venueLanguageContainer}>
          {event.venue && !event.isNightProgram && (
            <span className={styles.venue}>🏠 {event.venue}</span>
          )}
          {event.language && (
            <span className={styles.language}>{event.language}</span>
          )}
        </p>
      )}
      {event.description && (
        <p className={styles.description}>{event.description}</p>
      )}
      {event.speakers && (
        <p className={styles.speakers}>
          <b>speakers</b>: {event.speakers}
        </p>
      )}
      {event.moderators && (
        <p className={styles.moderators}>
          <b>moderators</b>: {event.moderators}
        </p>
      )}

      {event.eventPageURL && (
        <a
          href={event.eventPageURL}
          target='_blank'
          className='no-external-link-icon'
        >
          🔗 Concert page
        </a>
      )}
    </li>
  );
};
