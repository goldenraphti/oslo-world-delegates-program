import Image from "next/image";
import Link from "next/link";
import { delegateInterface } from "../interfaces";
import styles from "./Delegate.module.css";

type Props = {
  delegate: delegateInterface;
};

export const DelegateComponent = ({ delegate }: Props) => {
  return (
    <li className={styles.delegate}>
      <Link href={`/delegates/${delegate.firstName}-${delegate.lastName}`}>
        <a className={styles.card}>
          <div className={styles.imgContainer}>
            {delegate.imgPath !== "" ? (
              <Image
                src={`/photos/${delegate.category}-delegates-pictures/${delegate.imgPath}`}
                alt={`${delegate} profile picture`}
                width='150'
                height='150'
                className={styles.imgProfile}
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
