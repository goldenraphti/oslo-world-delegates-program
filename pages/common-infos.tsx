import Head from "next/head";
import styles from "../styles/CommonInfos.module.css";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import Link from "next/link";

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
        Even if Oslo World will take over venues all around the city, during the
        day the festival HUB will be located at the heart of Oslo: FEBER
        (Youngstorget 6). Feel free to visit and meet the Oslo World Team, to
        share a smile during the hectic days.
        <br />
        Opening hours festival office:
        <ul>
          <li>Monday: 10:00- 17:00</li>
          <li>Tuesday- Friday: 10:00- 18:00</li>
          <li>Saturday: 10:00- 15:00</li>
        </ul>
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
          <li className={styles.venue}>
            <span className={styles.venueName}>Blå</span>
            <br />
            <span className={styles.venueAddress}>Brenneriveien 9C</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Cosmopolite</span>
            <br />
            <span className={styles.venueAddress}>Vogts gate 64</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Dansens Hus</span>
            <br />
            <span className={styles.venueAddress}>Vulkan 1</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Den Norske Opera & Ballett</span>
            <br />
            <span className={styles.venueAddress}>Kirsten Flagstads Plass</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Vigelandsmuseet</span>
            <br />
            <span className={styles.venueAddress}>Nobels gate 32</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Grønland kulturstasjon</span>
            <br />
            <span className={styles.venueAddress}>Tøyenbekken 5</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Jaeger</span>
            <br />
            <span className={styles.venueAddress}>Grensen 9</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Kulturkirken Jakob</span>
            <br />
            <span className={styles.venueAddress}>Hausmanns gate 14</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Munch Museum</span>
            <br />
            <span className={styles.venueAddress}>Edvard Munchs Plass 1</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Internasjonalen</span>
            <br />
            <span className={styles.venueAddress}>Youngstorget 2</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Feber (Festivalkontor)</span>
            <br />
            <span className={styles.venueAddress}>Youngstorget 6</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Nobels fredssenter</span>
            <br />
            <span className={styles.venueAddress}>Brynjulf Buls plass 1</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Sentralen</span>
            <br />
            <span className={styles.venueAddress}>Øvre Slottsgate 3</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Becco</span>
            <br />
            <span className={styles.venueAddress}>
              Kristian Augusts gate 11
            </span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>
              Nordic Black Theatre & Cafeteatret
            </span>
            <span className={styles.venueAddress}>Hollendergata 8</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Oslo Konserthus</span>
            <br />
            <span className={styles.venueAddress}>Munkedamsveien 14</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Parkteatret</span>
            <br />
            <span className={styles.venueAddress}>Olaf Ryes plass 11</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Riksscenen</span>
            <br />
            <span className={styles.venueAddress}>Trondheimsveien 2</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Rockefeller Music Hall</span>
            <br />
            <span className={styles.venueAddress}>Badstugata 2</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Sentrum Scene</span>
            <br />
            <span className={styles.venueAddress}>
              Arbeidersamfunnets plass 1
            </span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>
              Victoria Nasjonal Jazzscene
            </span>
            <br />
            <span className={styles.venueAddress}>Karl Johans gate 35</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Hærverk</span>
            <br />
            <span className={styles.venueAddress}>Hausmanns gate 34</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Trekanten</span>
            <br />
            <span className={styles.venueAddress}>St. Olavs Plass 5</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Pressens Hus</span>
            <br />
            <span className={styles.venueAddress}>Skippergata 24</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Melahuset</span>
            <br />
            <span className={styles.venueAddress}>Mariboes gate 8</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Asylet</span>
            <br />
            <span className={styles.venueAddress}>Grønland 28</span>
          </li>
          <li className={styles.venue}>
            <span className={styles.venueName}>Hammerhai</span>
            <br />
            <span className={styles.venueAddress}>Opergata 77</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

CommonInfosPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CommonInfosPage;
