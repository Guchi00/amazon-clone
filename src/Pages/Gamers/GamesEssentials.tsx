import React from "react";
import styles from "./styles.module.css";
import { ProductSeeMoreReusable } from "../../Components/Reusables/ProductSeeMore/ProductSeeMoreReusable";
import { data } from "../../Data/GamesEssentials";
import { Actions } from "../../Components/Footer/Actions";
import { AboutAmazon } from "../../Components/Footer/AboutAmazon";
import { ActionButtons } from "../../Components/Footer/ActionButtons";

export function GamesEssentials() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main_title}>Essentials For Gamers</div>
        <span className={styles.title}>Featured Categories</span>
        <div className={styles.wrapper}>
          {data.map((items) => (
            <ProductSeeMoreReusable
              key={items.title}
              image={<img src={items.imagesUrl} alt={"images"} />}
              title={items.title}
            />
          ))}
        </div>
      </div>
      <Actions />
      <AboutAmazon />
      <ActionButtons />
    </>
  );
}
