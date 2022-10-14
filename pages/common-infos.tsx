import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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

      <main className={styles.main}>
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
          <li>Monday: 10:00- 20:00</li>
          <li>Tuesday- Friday: 10:00- 18:00</li>
          <li>Saturday: 10:00- 15:00</li>
        </ul>
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
        <ul className="venue-list">
          <li>
            <span className='venue-name'>Blå</span>
            <br/><span className='venue-address'>Brenneriveien 9C</span>
          </li>
          <li>
            <span className='venue-name'>Cosmopolite</span>
            <br/><span className='venue-address'>Vogts gate 64</span>
          </li>
          <li>
            <span className='venue-name'>Dansens Hus</span>
            <br/><span className='venue-address'>Vulkan 1</span>
          </li>
          <li>
            <span className='venue-name'>Den Norske Opera & Ballett</span>
            <br/><span className='venue-address'>Kirsten Flagstads Plass</span>
          </li>
          <li>
            <span className='venue-name'>Vigelandsmuseet</span>
            <br/><span className='venue-address'>Nobels gate 32</span>
          </li>
          <li>
            <span className='venue-name'>Grønland kulturstasjon</span>
            <br/><span className='venue-address'>Tøyenbekken 5</span>
          </li>
          <li>
            <span className='venue-name'>Jaeger</span>
            <br/><span className='venue-address'>Grensen 9</span>
          </li>
          <li>
            <span className='venue-name'>Kulturkirken Jakob</span>
            <br/><span className='venue-address'>Hausmanns gate 14</span>
          </li>
          <li>
            <span className='venue-name'>Munch Museum</span>
            <br/><span className='venue-address'>Edvard Munchs Plass 1</span>
          </li>
          <li>
            <span className='venue-name'>Internasjonalen</span>
            <br/><span className='venue-address'>Youngstorget 2</span>
          </li>
          <li>
            <span className='venue-name'>Feber (Festivalkontor)</span>
            <br/><span className='venue-address'>Youngstorget 6</span>
          </li>
          <li>
            <span className='venue-name'>Nobels fredssenter</span>
            <br/><span className='venue-address'>Brynjulf Buls plass 1</span>
          </li>
          <li>
            <span className='venue-name'>Sentralen</span>
            <br/><span className='venue-address'>Øvre Slottsgate 3</span>
          </li>
          <li>
            <span className='venue-name'>Becco</span>
            <br/><span className='venue-address'>Kristian Augusts gate 11</span>
          </li>
          <li>
            <span className='venue-name'>
              Nordic Black Theatre & Cafeteatret
            </span>
            <br/><span className='venue-address'>Hollendergata 8</span>
          </li>
          <li>
            <span className='venue-name'>Oslo Konserthus</span>
            <br/><span className='venue-address'>Munkedamsveien 14</span>
          </li>
          <li>
            <span className='venue-name'>Parkteatret</span>
            <br/><span className='venue-address'>Olaf Ryes plass 11</span>
          </li>
          <li>
            <span className='venue-name'>Riksscenen</span>
            <br/><span className='venue-address'>Trondheimsveien 2</span>
          </li>
          <li>
            <span className='venue-name'>Rockefeller Music Hall</span>
            <br/><span className='venue-address'>Badstugata 2</span>
          </li>
          <li>
            <span className='venue-name'>Sentrum Scene</span>
            <br/><span className='venue-address'>Arbeidersamfunnets plass 1</span>
          </li>
          <li>
            <span className='venue-name'>Victoria Nasjonal Jazzscene</span>
            <br/><span className='venue-address'>Karl Johans gate 35</span>
          </li>
          <li>
            <span className='venue-name'>Hærverk</span>
            <br/><span className='venue-address'>Hausmanns gate 34</span>
          </li>
          <li>
            <span className='venue-name'>Trekanten</span>
            <br/><span className='venue-address'>St. Olavs Plass 5</span>
          </li>
          <li>
            <span className='venue-name'>Pressens Hus</span>
            <br/><span className='venue-address'>Skippergata 24</span>
          </li>
          <li>
            <span className='venue-name'>Melahuset</span>
            <br/><span className='venue-address'>Mariboes gate 8</span>
          </li>
          <li>
            <span className='venue-name'>Asylet</span>
            <br/><span className='venue-address'>Grønland 28</span>
          </li>
          <li>
            <span className='venue-name'>Hammerhai</span>
            <br/>><span className='venue-address'>Opergata 77</span>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>
          From{" "}
          <a
            href='https://osloworld.no/en'
            target='_blank'
            rel='noopener noreferrer'
          >
            Oslo World
          </a>{" "}
          with <span className='pink'>♥</span> for the delegates
        </p>
      </footer>
    </div>
  );
};

export default Home;
