import React from "react";
import { Product } from "../../Components/ProductsReusables/Products/Product";
import { NavBar } from "../../Components/Navigation/NavBar";
import {
  Account,
  AmazonAdvert,
  AmazonInfo,
  BackToTheTopPage,
  Buttons,
  UserConditionOfUse,
} from "../../Components/Footer";
import watchData from "../../Data/watches.json";
import styles from "./styles.module.css";

export const Watches = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <span className={styles.title}>Activity trackers and smartwatches</span>
        <div className={styles.text_parent}>
          <h3>Results</h3>
          <span className={styles.product_detail}>
            Price and other details may vary based on products price and color.
          </span>
        </div>
        {watchData.map((product: any) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.imageUrl}
            title={product.title}
            cost={product.cost}
          />
        ))}
      </div>
      {/* <div style={{ height: "100px", width: "80%" }}></div> */}
      <Account />
      <BackToTheTopPage />
      <AmazonInfo />
      <Buttons />
      <AmazonAdvert />
      <UserConditionOfUse />
    </>
  );
};
