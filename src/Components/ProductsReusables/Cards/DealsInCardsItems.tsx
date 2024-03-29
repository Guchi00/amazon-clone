import React from "react";
import styles from "./styles.module.css";

export interface INewOtherCardsItems {
  title: string;
  image: React.ReactNode;
  action: React.ReactNode;
}

export function DealsInCardsItems(props: INewOtherCardsItems) {
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
}
