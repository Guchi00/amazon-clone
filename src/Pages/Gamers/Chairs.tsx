import React from "react";
import { Product } from "../../Components/ProductsReusables/Products/Product";
import {
  Account,
  AmazonInfo,
  BackToTheTopPage,
  Buttons,
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
        {chairs.map((items) => (
          <Product
            key={items.id}
            id={items.id}
            image={items.imageUrl}
            title={items.title}
            cost={items.cost}
          />
        ))}
      </div>
      <Account />
      <BackToTheTopPage />
      <AmazonInfo />
      <Buttons />
    </>
  );
};
