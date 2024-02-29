import React from "react";
import { SeeMoreProducts } from "../../Components/ProductsReusables/SeeMore/SeeMoreProducts";
import { data } from "../../Data/GamesEssentialsData";
import { NavBar } from "../../Components/Navigation/NavBar";
import {
  Account,
  AmazonAdvert,
  AmazonInfo,
  BackToTheTopPage,
  Buttons,
  UserConditionOfUse,
} from "../../Components/Footer";
import styles from "./styles.module.css";

export const GamesEssentials = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.main_title}>Essentials For Gamers</div>
        <span className={styles.title}>Featured Categories</span>
        <div className={styles.wrapper}>
          {data.map((item) => (
            <SeeMoreProducts
              key={item.id}
              id={item.id}
              image={<img src={item.imageUrl} alt={"images"} />}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <Account />
      <BackToTheTopPage />
      <AmazonInfo />
      <Buttons />
      <AmazonAdvert />
      <UserConditionOfUse />
    </>
  );
};
