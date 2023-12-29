import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export interface INewGamingAccessories {
  image: React.ReactNode;
  subTitle: React.ReactNode;
}

export function Gaming(props: INewGamingAccessories) {
  const { image, subTitle } = props;

  return (
    <>
      <div className={styles.contents}>
        <Link to="" className={styles.image}>
          {image}
        </Link>
        <span className={styles.subTitle}>{subTitle}</span>
      </div>
    </>
  );
}
