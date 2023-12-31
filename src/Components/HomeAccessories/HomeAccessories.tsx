import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export interface INewHomeAccessories {
  image: React.ReactNode;
  subTitle: React.ReactNode;
}

export function HomeAccessories(props: INewHomeAccessories) {
  const { image, subTitle } = props;

  return (
    <>
      <div className={styles.contents}>
        <div className={styles.image}>{image}</div>
        <span className={styles.subTitle}>{subTitle}</span>
        <div>
          <Link to=""></Link>
        </div>
      </div>
    </>
  );
}

