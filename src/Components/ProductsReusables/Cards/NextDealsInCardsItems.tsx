import React from "react";
import styles from "./styles.module.css";

export interface INewNextDealsInCardsItems {
  title: string;
  image: React.ReactNode;
  action: React.ReactNode;
}

export const NextDealsInCardsItems = (props: INewNextDealsInCardsItems) => {
  const { title, image, action } = props;

  return (
    <>
      <div className={styles.allcards}>
        <div className={styles.cards_title}>
          <span>{title}</span>
        </div>
        <div className={styles.cards_image}>
          <div className={styles.image}>{image}</div>
        </div>
        <div className={styles.cards_action}>
          <span>{action}</span>
        </div>
      </div>
    </>
  );
};
