import React from "react";
import { SeeMoreProducts } from "../../Components/ProductsReusables/SeeMore/SeeMoreProducts";
import { data } from "../../Data/GamesEssentials";
import { Actions } from "../../Components/Footer/Actions";
import { AboutAmazon } from "../../Components/Footer/AboutAmazon";
import { ActionButtons } from "../../Components/Footer/ActionButtons";
import { NavBar } from "../../Components/Navigation/NavBar";
import styles from "./styles.module.css";

export function GamesEssentials() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.main_title}>Essentials For Gamers</div>
        <span className={styles.title}>Featured Categories</span>
        <div className={styles.wrapper}>
          {data.map((items) => (
            <SeeMoreProducts
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
