import Image from "next/legacy/image";
import Link from "next/link";
import { delegateInterface } from "../interfaces";
import styles from "./Delegate.module.css";

type Props = {
  delegate: delegateInterface;
  priorityImgLoading?: boolean;
};

export const DelegateComponent = ({
  delegate,
  priorityImgLoading = false,
}: Props) => {
  return (
    <li className={styles.delegate}>
      <Link href={`/delegates/${delegate.firstName}-${delegate.lastName}`}>
        <a className={styles.card}>
          <div className={styles.imgContainer}>
            {delegate.imgPath ? (
              <Image
                src={delegate.imgPath}
                alt={`${delegate} profile picture`}
                width={150}
                height={150}
                className={styles.imgProfile}
                priority={priorityImgLoading}
                placeholder='blur'
              />
            ) : (
              <div className={styles.imgPlaceolder}></div>
            )}
          </div>
          <p
            className={styles.name}
          >{`${delegate.firstName} ${delegate.lastName}`}</p>
          <p className={styles.organization}>{delegate.organization}</p>
          <p className={styles.country}>{delegate.country}</p>
          <p className={styles.description}>{delegate.description}</p>
        </a>
      </Link>
    </li>
  );
};
