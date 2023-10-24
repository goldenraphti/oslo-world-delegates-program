import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/DelegateProfilePage.module.css";
import type { ReactElement } from "react";
import Image from "next/legacy/image";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";
import { delegatesList } from "../../assets/delegates-list";

const DelegateProfile: NextPageWithLayout = () => {
  const router = useRouter();
  const { pid } = router.query;

  const delegate = Object.values(delegatesList)
    .flat()
    .filter(
      (delegate) => `${delegate.firstName}-${delegate.lastName}` === pid
    )[0];
  return (
    <div className={styles.container}>
      <Head>
        <title>{`${delegate?.firstName} ${delegate?.lastName}, participant of the Oslo World Delegates Program`}</title>
        <meta
          name='description'
          content={`profile page of ${delegate?.firstName} ${delegate?.lastName}, one of the brilliant delegates attending the Oslo World Delegates Program`}
        />
        <link rel='icon' href='/oslo_world_favicon_2023.png' />
      </Head>

      {delegate && (
        <main className={styles.main}>
          <h1 className={styles.title}>
            {delegate.firstName} {delegate.lastName}
          </h1>
          <div className={styles.imgContainer}>
            {delegate.imgPath !== "" ? (
              <Image
                src={delegate.imgPath}
                alt={`${delegate} profile picture`}
                width='300'
                height='300'
                className={styles.imgProfile}
                priority={true}
                placeholder='blur'
              />
            ) : (
              <div className={styles.imgPlaceolder}></div>
            )}
          </div>
          <p className={styles.organization}>{delegate.organization}</p>
          <p className={styles.country}>{delegate.country}</p>
          <p className={styles.job}>{delegate.jobPositionTitle}</p>
          <p className={styles.description}>{delegate.description}</p>
        </main>
      )}
    </div>
  );
};

DelegateProfile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default DelegateProfile;
