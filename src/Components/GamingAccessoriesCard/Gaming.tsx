import React from "react";
import styles from "./styles.module.css";

export interface INewGamingAccessories {
  image: React.ReactNode;
  title: string;
}

export function Gaming(props: INewGamingAccessories) {
  const { image, title } = props;

  return (
    <>
      <div className={styles.contents}>
      <div className={styles.image}>{image}</div>
        <span className={styles.title}>{title}</span>
      </div>
    </>
  );
}

