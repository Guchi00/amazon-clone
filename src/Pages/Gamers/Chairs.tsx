import React from "react";
import { Product } from "../../Components/ProductsReusables/Products/Product";
import {
  Account,
  AmazonAdvert,
  AmazonInfo,
  BackToTheTopPage,
  Buttons,
  UserConditionOfUse,
} from "../../Components/Footer";
import chairs from "../../Data/chairs.json";
import styles from "./styles.module.css";
import { NavBar } from "../../Components/Navigation/NavBar";

export const Chairs = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <span className={styles.title}>Gaming Chairs</span>
        <div className={styles.text_parent}>
          <h3>Results</h3>
          <span className={styles.product_detail}>
            Price and other details may vary based on products price and color.
          </span>
        </div>
        {chairs.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            image={item.imageUrl}
            title={item.title}
            cost={item.cost}
          />
        ))}
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
