import Head from "next/head";
import styles from "../styles/CommonInfos.module.css";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import Link from "next/link";
import { venueList } from "../assets/venue-list";
import { VenueCard } from "../components/venueCard";

const CommonInfosPage: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Info - Oslo World Delegates Program</title>
        <meta
          name='description'
          content='The common information regarding the Oslo World Delegates Program'
        />
        <link rel='icon' href='/oslo_world_favicon_2022.png' />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>Common info</h1>
        <p className={styles.description}>
          Common informations regarding the Oslo World Delegates Program
        </p>
        <p>
          We hope each delegate will be able to join as many events of the day
          program as possible. If you are not attending some of the obligatory
          events, please let us know as soon as possible.
        </p>
        <h2>FESTIVAL HUB</h2>
        <p>
          Even if Oslo World will take over venues all around the city, during
          the day the festival HUB will be located at the heart of Oslo: FEBER (
          <a
            className={styles.feberLinks}
            href={
              venueList.find(
                (venue) =>
                  venue.name.includes("Feber") &&
                  venue.address.includes("Youngstorget 6")
              )?.googleMapsURL
            }
            target='_blank'
            rel='noreferrer'
          >
            Youngstorget 6
          </a>
          ). Feel free to visit and meet the Oslo World Team, to share a smile
          during the hectic days.
          <br />
          Opening hours festival office:
          <ul>
            <li>Monday: 10:00- 17:00</li>
            <li>Tuesday- Friday: 10:00- 18:00</li>
            <li>Saturday: 10:00- 15:00</li>
          </ul>
        </p>
        <h2>Food</h2>
        <p>
          Thanks to the Ministry of Foreign Affairs, Music Norway and the
          Diversity network we will host special networking dinners (on Tuesday
          and Thursday) and lunches (Thursday and Friday). Check the schedule
          for more information.
        </p>
        <p>
          In addition, delegates will get discount from:
          <br /> 15% at{" "}
          <Link href='https://vinvinoslo.no/'>
            <a>Vin Vin</a>
          </Link>{" "}
          (Torggata 18, Entrance at Badstugata 0181 Oslo)
        </p>
        <h2>CONCERTS</h2>
        <p>
          You will get the Delegates wristband and name badge upon registration.
          This will be your accreditation during the festival so always keep it
          with you. The accreditation will grant you access to all the events.
          Yet, for capacity and safety reasons we cannot guarantee access if the
          concert is sold-out.
        </p>
        <p>
          If you have specific requirements and you really need to see a show,
          due to press coverage, future booking plans, etc. Let us know asap via
          the wishlist at the registration form or via e-mail (
          <a href='mailto:laura@osloworld.no'>laura@osloworld.no</a>) and we
          will do our best to secure your entrance.
        </p>
        <h2>FESTIVAL VENUES</h2>
        <ul className={styles.venueList}>
          {venueList &&
            venueList.map((venue) => (
              <VenueCard venue={venue} key={venue.name} />
            ))}
        </ul>
      </div>
    </div>
  );
};

CommonInfosPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CommonInfosPage;
