import React from "react";
import { AmazonAdvertItems } from "./AmazonAdvertItems";
import data from "../../Data/amazonAdverts.json";
import styles from "./styles.module.css";

export const AmazonAdvert = () => {
  return (
    <div className={styles.wrapper}>
      {data.map((item) => (
        <AmazonAdvertItems
          key={item.id}
          items={[
            item.advertOne,
            item.advertTwo,
            item.advertThree,
            ...(item.advertFour ? [item.advertFour] : []),
          ]}
          // advertTwo={items.advertTwo}
          // advertThree={items.advertThree}
          // advertFour={items.advertFour}
        />
      ))}
    </div>
  );
};
