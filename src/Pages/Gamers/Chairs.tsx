import React from "react";
import { Product } from "../../Components/ProductsReusables/Products/Product";
import {
  Account,
  AmazonInfo,
  BackToTheTopPage,
  LanguageButtons,
} from "../../Components/Footer";
import chairs from "../../Data/chairs.json";
import styles from "./styles.module.css";
import { NavBar } from "../../Components/Navigation/NavBar";

export const Chairs = () => {
  return (
    <>
      <NavBar />
      <div className={styles.headset_container}>
        <span className={styles.headset_title}>Gaming Chairs</span>
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
      <LanguageButtons />
    </>
  );
};
