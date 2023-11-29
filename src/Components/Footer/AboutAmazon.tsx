import React from "react";
import styles from "./styles.module.css";
import { AboutAmazonItems } from "./AboutAmazonItems";
import { data } from "../../../src/ProductsData/AboutAmazon"

export function AboutAmazon() {
  return (
    <>
      <div className={styles.parent}>
          {data.map((items) => (
            <AboutAmazonItems 
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
    </>
  );
}
