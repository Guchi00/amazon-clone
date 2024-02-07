import React from "react";
import styles from "./styles.module.css";
import { AmazonInfoItems } from "./AmazonInfoItems";
import { data } from "../../Data/AboutAmazon";

export const AmazonInfo = () => {
  return (
    <div className={styles.parent}>
      {data.map((items) => (
        <AmazonInfoItems
          key={items.title}
          title={items.title}
          subTitleOne={items.subTitleOne}
          subTitleTwo={items.subTitleTwo}
          subTitleThree={items.subTitleThree}
          subTitleFour={items.subTitleFour}
          subTitleFive={items.subTitleFive}
          subTitleSix={items.subTitleSix}
          subTitleSeven={items.subTitleSeven}
          subTitleEight={items.subTitleEight}
        />
      ))}
    </div>
  );
};
