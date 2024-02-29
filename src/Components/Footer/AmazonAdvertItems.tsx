import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export interface INewAdvertItems {
  items: string[];
}

export const AmazonAdvertItems = (props: INewAdvertItems) => {
  const { items } = props;
  const formatAdvert = (value: string) => value.split("\n");
  return (
    <>
      <div className={styles.row}>
        {items.map((item, index) => (
          <Link to="" className={styles.adverts} key={index}>
            {formatAdvert(item).map((formattedItem, index) => (
              <span className={index === 0 ? styles.advertHeading : ""}>
                {formattedItem}
              </span>
            ))}
          </Link>
        ))}
        {/* <Link to="" className={styles.adverts}>
          {advertOne}
        </Link>
        <Link to="" className={styles.adverts}>
          {advertTwo}
        </Link>
        <Link to="" className={styles.adverts}>
          {advertThree}
        </Link>
        <Link to="" className={styles.adverts}>
          {advertFour}
        </Link> */}
      </div>
    </>
  );
};
