import Link from "next/link";
import { venueInterface } from "../interfaces";
import styles from "./VenueCard.module.css";
import { Home, MapPin } from "lucide-react";

type Props = {
  venue: venueInterface;
};

export const VenueCard = ({ venue }: Props) => {
  return (
    <li className={styles.venue}>
      <p className={styles.textContent}>
        <span className={styles.venueName}>{venue.name}</span>
        <br />
        <span className={styles.venueAddress}>{venue.address}</span>
      </p>
      {(venue.googleMapsURL || venue.website) && (
        <div className={styles.linksContainer}>
          {venue.googleMapsURL && (
            <a
              href={venue.googleMapsURL}
              target='_blank'
              rel='noreferrer'
              className={styles.linkIcon}
            >
              <span className='screen-reader'>{`Open ${venue.name} google Maps location in a new tab`}</span>
              <MapPin size={20} className={styles.iconInLink} />
            </a>
          )}
          {venue.website && (
            <a
              href={venue.website}
              target='_blank'
              rel='noreferrer'
              className={styles.linkIcon}
            >
              <span className='screen-reader'>{`Open ${venue.name} website in a new tab`}</span>
              <Home size={20} className={styles.iconInLink} />
            </a>
          )}
        </div>
      )}
    </li>
  );
};
