import Head from "next/head";
import styles from "../styles/MeetTheTeam.module.css";
import { Fragment, ReactElement } from "react";
import Image from "next/legacy/image";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import { staff, staffCategories } from "../assets/staff-list";
import { HeadCommon } from "../components/HeadCommon";

const MeetTheTeamPage: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meet the Team - Oslo World Delegates Program</title>
        <meta
          name='description'
          content='Team of Oslo World Delegates Program'
        />
        <HeadCommon />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>Meet the Team</h1>
        {staff &&
          staffCategories &&
          staffCategories.map((category) => (
            <Fragment key={category.id}>
              {category.title && <h2>{category.title}</h2>}
              <ul className={styles.staffList}>
                {staff
                  .filter(
                    (member) =>
                      !member?.hidden && member.category === category.id
                  )
                  .map((member) => (
                    <li
                      className={styles.staffCard}
                      key={`${member.firstName}-${member.lastName}`}
                    >
                      {member.img ? (
                        <div className={styles.imgContainer}>
                          <Image
                            src={member.img}
                            alt={`${member.firstName} ${member.lastName} photo`}
                            width={150}
                            height={150}
                            placeholder='blur'
                            priority={category.order < 2 ? true : false}
                            className={styles.profilePic}
                          />
                        </div>
                      ) : (
                        <div className={styles.imgPlaceholder}></div>
                      )}
                      <div className={styles.memberTextContent}>
                        <h3 className={styles.name}>
                          {member.firstName} {member.lastName}
                        </h3>
                        <p className={styles.position}>{member.position}</p>
                        {member?.phoneNumber && (
                          <p className={styles.position}>
                            {member.phoneNumber}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
              </ul>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

MeetTheTeamPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MeetTheTeamPage;
