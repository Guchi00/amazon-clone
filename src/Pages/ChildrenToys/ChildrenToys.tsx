import React from "react";
import { ShopNow } from "../../Components/ProductsReusables/ShopNow/ShopNow";
import childrenToyData from "../../Data/childrenToys.json";
import { NavBar } from "../../Components/Navigation/NavBar";
import {
  Account,
  AmazonInfo,
  BackToTheTopPage,
  LanguageButtons,
} from "../../Components/Footer";
import styles from "./styles.module.css";

export const ChildrenToys = () => {
  return (
    <>
      <NavBar />
      <div className={styles.parent}>
        <div className={styles.text_parent}>
          <h3>Results</h3>
          <span className={styles.product_detail}>
            Price and other details may vary based on products price and color.
          </span>
        </div>
        <div className={styles.wrapper}>
          {childrenToyData.map((product) => (
            <ShopNow
              key={product.id}
              title={product.title}
              image={<img src={product.imageUrl} alt={"pcs_image"} />}
              cost={product.cost}
              id={product.id}
            />
          ))}
        </div>
      </div>
      <Account />
      <BackToTheTopPage />
      <AmazonInfo />
      <LanguageButtons />
    </>
  );
};
