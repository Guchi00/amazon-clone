import React from "react";
import { AmazonAdvertItems } from "./AmazonAdvertItems";
import data from "../../Data/amazonAdverts.json";
import styles from "./styles.module.css";

export const AmazonAdvert = () => {
  return (
    <div className={styles.wrapper}>
      {data.map((items) => (
        <AmazonAdvertItems
          key={items.id}
          items={[
            items.advertOne,
            items.advertTwo,
            items.advertThree,
            ...(items.advertFour ? [items.advertFour] : []),
          ]}
          // advertTwo={items.advertTwo}
          // advertThree={items.advertThree}
          // advertFour={items.advertFour}
        />
      ))}
    </div>
  );
};
