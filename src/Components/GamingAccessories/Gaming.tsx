import React from "react";
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
        <div className={styles.image}>{image}</div>
        <span className={styles.subTitle}>{subTitle}</span>
      </div>
    </>
  );
}
