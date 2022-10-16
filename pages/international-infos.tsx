import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/InternationalInfos.module.css";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";

const InternationalInfosPage: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>International Info - Oslo World Delegates Program</title>
        <meta
          name='description'
          content='Information for the international delegates attending the Oslo World Delegates Program'
        />
        <link rel='icon' href='/oslo_world_favicon_2022.png' />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>International info</h1>

        <p className={styles.description}>
          Information for the international delegates attending the Oslo World
          Delegates Program
        </p>

        <h2>Arrival to Oslo</h2>

        <p>
          How to reach the city center from Oslo Gardemoen airport (OSL)?
          <br />
          You have 2 options:
          <ul>
            <li>
              FLYTOGET (Airport Express)
              <br />
              PRICE: 204 NOK
              <br />
              The train departs every 10 minutes (and every 20 minutes on
              Saturdays and early morning/late night). The journey takes 19-22
              minutes.
              <br />
              Ticketless travel: The simplest option is to swipe your
              credit/debit card at the barrier and select your destination.
              There is no need to swipe your card again on arrival.
              <br />
              For more information check :{" "}
              <a href='http://www.flytoget.no/flytoget_eng/'>
                http://www.flytoget.no/flytoget_eng/
              </a>
            </li>
            <li>
              VY
              <br />
              PRICE: 110 NOK
              <br />
              The journey takes 25 minutes. Timetable:{" "}
              <a href='https://www.vy.no/'>https://www.vy.no/</a>
            </li>
          </ul>
        </p>

        <h2>Festival Hotel</h2>

        <p>
          If you have booked the hotel through us. You will be staying at the
          Clarion Collection Hotel Folketeateret (Storgata 21-23). Your room
          includes breakfast, after- noon sweets and a light dinner.
        </p>

        <h2>Public transportation</h2>

        <p>
          We will be using the very nice and efficient public transport. The
          metro, buses, trams and ferries to the islands all use the same
          tickets.
        </p>

        <p>
          The price for one ticket is 38 NOK (lasts one hour) you can buy it via
          the Ruter app, or at 7-Eleven, Narvesen, Deli de Luca or on the ticket
          vending machines.
          <br />
          24h tickets costs 114 NOK and 7 days tickets costs 320 NOK.
          <br />
          Infos : <a href='https://ruter.no/en'>https://ruter.no/en</a>
        </p>

        <h2>What to bring?</h2>

        <h2>Tourist attractions</h2>
        <p>
          If you would like to discover even more the city, you could visit the
          official tourist information (Visit Oslo) that is located at Oslo S.
        </p>

        <p>
          Stop by for touristic tips and local knowledge about the city. Or
          download their free app:{" "}
          <a href='http://www.visitoslo.com/en/oslo/apps/'>
            http://www.visitoslo.com/en/oslo/apps/
          </a>
          <br />
          (Also you could ask us for our own favourites places to go!)
        </p>
      </div>
    </div>
  );
};

InternationalInfosPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default InternationalInfosPage;
