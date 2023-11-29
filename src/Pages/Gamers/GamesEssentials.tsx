import React from "react";
import styles from "./styles.module.css";
import { ProductSeeMoreReusable } from "../../Components/Reusables/ProductSeeMore/ProductSeeMoreReusable";
import { data } from "../../../src/ProductsData/GamesEssentials";
import { Actions } from "../../Components/Footer/Actions";
import { AboutAmazon } from "../../Components/Footer/AboutAmazon";
import { ActionButtons } from "../../Components/Footer/ActionButtons";

//Remember to save this data as a diff. file and import it here.

export function GamesEssentials() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main_title}>Essentials For Gamers</div>
        <span className={styles.title}>Featured Categories</span>
        <div className={styles.wrapper}>
          {data.map((items) => (
            <ProductSeeMoreReusable
              key={items.imageTitles}
              image={<img src={items.imagesUrl} alt={"images"} />}
              imageTitles={items.imageTitles}
              cost={items.cost}
              action={items.action}
              numberOfProd={items.numberOfProd}
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
