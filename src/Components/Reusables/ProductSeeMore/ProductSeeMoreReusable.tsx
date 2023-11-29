import React from "react";
import styles from "./styles.module.css";

interface INewGamesEssentials {
  image: React.ReactNode;
  imageTitles: React.ReactNode;
  cost: string;
  action: React.ReactNode;
  numberOfProd?: React.ReactNode;
}

export function ProductSeeMoreReusable(props: INewGamesEssentials) {
  const { image, imageTitles, cost, action, numberOfProd } = props;

  return (
    <>
      <div className={styles.products_parent}>
        <div className={styles.images}>{image}</div>
        <div className={styles.sub_parent}>
          <span className={styles.image_title}>{imageTitles}</span>
          <span className={styles.prod_cost}>{cost}</span>

          <div>
            <button className={styles.action}>{action}</button>
            <button>{numberOfProd}</button>
          </div>
        </div>
      </div>
    </>
  );
}
