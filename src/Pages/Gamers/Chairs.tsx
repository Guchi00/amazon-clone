import React from "react";
import { ProductViewReusable } from "../../Components/Reusables/ProductView/ProductViewReusable";
import { Actions, AboutAmazon, ActionButtons } from "../../Components/Footer";
import chairs from "../../Data/chairs.json";
import styles from "./styles.module.css";

export function Chairs() {
  return (
    <>
      <div className={styles.headset_container}>
        <span className={styles.headset_title}>Gaming Chairs</span>
        {chairs.map((items: any) => (
          <ProductViewReusable
            key={items.id}
            id={items.id}
            image={<img src={items.imageUrl} alt={"images"} />}
            title={items.title}
            cost={items.cost}
            action={items.action}
          />
        ))}
      </div>
      <Actions />
      <AboutAmazon />
      <ActionButtons />
    </>
  );
}
