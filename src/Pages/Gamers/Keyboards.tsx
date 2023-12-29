import React from "react";
import { ProductViewReusable } from "../../Components/Reusables/ProductView/ProductViewReusable";
import { Actions, AboutAmazon, ActionButtons } from "../../Components/Footer";
import keyboards from "../../Data/keyboard.json";
import styles from "./styles.module.css";

export function Keyboards() {
  return (
    <>
      <div className={styles.headset_container}>
        <span className={styles.headset_title}>Gaming Keyboards</span>
        {keyboards.map((items: any) => (
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
