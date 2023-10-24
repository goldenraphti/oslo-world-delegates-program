import type { ReactElement } from "react";
import Head from "next/head";
import styles from "../styles/InternationalInfos.module.css";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import {
  Plane,
  BedDouble,
  Bus,
  ThermometerSnowflake,
  Camera,
  Tag,
} from "lucide-react";

const InternationalInfosPage: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>International Info - Oslo World Delegates Program</title>
        <meta
          name='description'
          content='Information for the international delegates attending the Oslo World Delegates Program'
        />
        <link rel='icon' href='/oslo_world_favicon_2023.png' />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>International info</h1>

        <p className={styles.description}>
          Information for the international delegates attending the Oslo World
          Delegates Program
        </p>

        <h2 className={styles.subTitle}>
          <Plane size={30} className={styles.iconSubTitle} />
          Arrival to Oslo
        </h2>

        <p>How to reach the city center from Oslo Gardemoen airport (OSL)?</p>
        <p>
          We suggest taking the train and get off at <b>Oslo Central Station</b>{" "}
          (<i>also called Oslo S or Oslo Jernbanetorget</i>).
        </p>
        <p>You have 2 options:</p>
        <ul className={`${styles.list} ${styles.transportOptionsList}`}>
          <li className={`${styles.listItem} ${styles.transportOptions}`}>
            <p>
              <b>FLYTOGET</b> (Airport Express)
            </p>
            <p>
              <Tag size={15} className={styles.icon} />
              230 NOK
            </p>
            <p>
              The train departs every 10 minutes (and every 20 minutes on
              Saturdays and early morning/late night). The journey takes 19-22
              minutes.
            </p>
            <p>
              Ticketless travel: The simplest option is to swipe your
              credit/debit card at the barrier and select your destination.
              There is no need to swipe your card again on arrival.
            </p>
            <p>
              For more information check :{" "}
              <a href='http://www.flytoget.no/flytoget_eng/'>
                http://www.flytoget.no/flytoget_eng/
              </a>
            </p>
          </li>
          <li className={`${styles.listItem} ${styles.transportOptions}`}>
            <p>
              <b>VY</b>
            </p>
            <p>
              <Tag size={15} className={styles.icon} />
              118 NOK
            </p>
            <p>The journey takes 25 minutes</p>
            <p>
              On average, there are three departures per hour in both
              directions. You can buy tickets at all Entur ticketing machines or
              in Vy’s app.
            </p>
            <p>
              For more information and timeable check :{" "}
              <a href='https://www.vy.no/'>https://www.vy.no/</a>
            </p>
          </li>
        </ul>
      </div>

      <h2 className={styles.subTitle}>
        <BedDouble size={30} className={styles.iconSubTitle} />
        Festival Hotel
      </h2>

      <p>
        If you have booked the hotel through us. You will be staying at the
        <b>Clarion Collection Hotel Folketeateret</b> (Storgata 21-23). Your
        room includes breakfast, afternoon sweets and a light dinner.
      </p>
      <p>
        <b>Note</b>: From the train station (Oslo S) is only 5 minutes walking.
      </p>
      <p>
        <b>
          Text us (<a href='tel:+47 98199502'>+47 98199502</a>) as soon as you
          have arrived at the hotel.
        </b>
      </p>

      <h2 className={styles.subTitle}>
        <Bus size={30} className={styles.iconSubTitle} />
        Local transportation
      </h2>

      <p>
        Distances between the festival venues and the hotel are often quite
        short, so <b>mainly we will navigate the city walking</b>.
      </p>

      <p>
        If not, we will be using the efficient <b>public transport</b>. The
        metro, buses, trams and ferries to the islands all use the same tickets.
      </p>

      <p>
        The price for one ticket is 40 NOK (lasts one hour) . You can buy it via
        the Ruter app, or at 7-Eleven, Narvesen, Deli de Luca or on the ticket
        vending machines. 24h tickets cost 121 NOK and 7 days tickets cost 335
        NOK.
      </p>

      <p>
        Infos : <a href='https://ruter.no/en'>https://ruter.no/en</a>
      </p>

      <h2 className={styles.subTitle}>
        <ThermometerSnowflake size={30} className={styles.iconSubTitle} />
        What to bring?
      </h2>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          🔳 Your swimsuit. One of the highlights of the delegates program is
          “Short talks at high temperatures” that will happen inside of the
          floating saunas at the Oslo Fjord.
        </li>
        <li className={styles.listItem}>
          🔳 Warm clothes. As you might expect, Oslo can be chilly in fall. The
          average temperatures during Oslo World are between 3 and 10 degrees.
        </li>
      </ul>

      <h2 className={styles.subTitle}>
        <Camera size={30} className={styles.iconSubTitle} />
        Tourist attractions
      </h2>

      <p>
        If you would like to discover even more the city, you could visit the
        official tourist information (Visit Oslo) that is located at Oslo S. Or
        download their free app:
        <a href='http://www.visitoslo.com/en/oslo/apps/'>
          http://www.visitoslo.com/en/oslo/apps/
        </a>
      </p>
      <p>(Also you could ask us for our own favourites places to go!)</p>
    </div>
  );
};

InternationalInfosPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default InternationalInfosPage;
