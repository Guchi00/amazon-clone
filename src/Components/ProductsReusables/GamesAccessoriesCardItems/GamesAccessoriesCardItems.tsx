import React from "react";
import styles from "./styles.module.css";

export interface INewGameAccessoriesCardProps {
  image: React.ReactNode;
  subTitle: React.ReactNode;
}

export const GamesAccessoriesCardItems = (
  props: INewGameAccessoriesCardProps
) => {
  const { image, subTitle } = props;

  return (
    <div className={styles.contents}>
      <div className={styles.image}>{image}</div>
      <span className={styles.subTitle}>{subTitle}</span>
    </div>
  );
};
