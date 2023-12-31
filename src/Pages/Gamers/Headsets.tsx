import React from "react";
import { Product } from "../../Components/ProductsReusables/Products/Product";
import { NavBar } from "../../Components/Navigation/NavBar";
import { Actions, AboutAmazon, ActionButtons } from "../../Components/Footer";
import headsets from "../../Data/headsets.json";
import styles from "./styles.module.css";

console.log(Array.isArray(headsets), "mmmmm");

export function Headsets() {
  return (
    <>
      <NavBar />
      <div className={styles.headset_container}>
        <span className={styles.headset_title}>Gaming Headsets</span>
        {headsets.map((product: any) => (
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
      <Actions />
      <AboutAmazon />
      <ActionButtons />
    </>
  );
}
