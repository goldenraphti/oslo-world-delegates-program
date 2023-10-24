import Head from "next/head";
import styles from "../styles/GreenRider.module.css";
import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import { Utensils, Trash2, Train, Leaf, Sprout } from "lucide-react";
import { HeadCommon } from "../components/HeadCommon";

const GreenRyderPage: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Green Rider - Oslo World Delegates Program</title>
        <meta
          name='description'
          content='Oslo World Delegates Program proudly supports the "green rider"'
        />
        <HeadCommon />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>
          <Leaf size={30} className={styles.titleIcon} />
          <span>Green Rider</span>
          <Sprout size={30} className={styles.titleIcon} />
        </h1>

        <p className={styles.description}>
          <span className={styles.colored}>
            We need to take better care of our common mother, Mother Earth.{" "}
          </span>
          We need to change so that future generations will inherit a better
          world then the one we live in today. That’s why we encourage you to
          use the green rider to help create a green change in the music
          industry.
        </p>
        <p>
          Our intention as a festival is to have as low of an impact as
          possible, and we want to ask you to help us continuing this work by
          making some greener choices while visiting us in Oslo. It can be small
          or big choices, the important thing is to think greener.
        </p>
        <h2 className={styles.sectionTitle}>
          <Utensils size={20} className={styles.sectionTitleIcon} />
          Food
        </h2>
        <ul className={styles.sectionList}>
          <li className={styles.listItem}>
            👩‍🌾 We encourage you to ask for locally produced and if possible
            organic food. Please note that organic food can often be imported to
            Norway.
          </li>
          <li className={styles.listItem}>
            🌱 We all love our meats, but try to ask for a menu consisting
            mainly of plant-based food. Good for you and the environment.
          </li>
          <li className={styles.listItem}>🍽 Keep food waste to a minimum.</li>
        </ul>
        <h2 className={styles.sectionTitle}>
          <Train size={20} className={styles.sectionTitleIcon} />
          Transport
        </h2>
        <ul className={styles.sectionList}>
          <li className={styles.listItem}>
            🧳 For smaller bands with less luggage we encourage you to take the
            Airport Express train from Oslo Airport to Oslo Central Station.
          </li>
          <li className={styles.listItem}>
            🚶‍♀️ For venues within walking distance we hope that you accept to be
            taken there by foot. Note that Oslo has a green urban development
            plan and it can often be more challenging going by car than by foot.
          </li>
          <li className={styles.listItem}>
            🚋 If you want to explore Oslo, we encourage you to try our
            excellent public transportation system.
          </li>
        </ul>
        <h2 className={styles.sectionTitle}>
          <Trash2 size={20} className={styles.sectionTitleIcon} />
          Waste
        </h2>
        <ul className={styles.sectionList}>
          <li className={styles.listItem}>
            ♻ Bottles and beer cans get recycled and reused in Norway do not
            throw them in the trash.
          </li>
          <li className={styles.listItem}>
            💧 Tap water in Norway is excellent, please drink from a glass when
            possible.
          </li>
          <li className={styles.listItem}>
            🚬 Please throw cigarette butts in the designated ashtrays outside
            and not on the ground. They contain plastic, takes ten years to
            break down and usually ends up in the ocean.
          </li>
        </ul>
      </div>
    </div>
  );
};

GreenRyderPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default GreenRyderPage;
