import React from "react";
import { ProductViewReusable } from "../../Components/Reusables/ProductView/ProductViewReusable";
import { Actions, AboutAmazon, ActionButtons } from "../../Components/Footer";
import headsets from "../../Data/headsets.json";
import styles from "./styles.module.css";

console.log(Array.isArray(headsets), "mmmmm");

export function Headsets() {
  return (
    <>
      <div className={styles.headset_container}>
        <span className={styles.headset_title}>Gaming Headsets</span>
        {headsets.map((items: any) => (
          <ProductViewReusable
            key={items.id}
            id={items.id}
            image={<img src={items.imageUrl} alt={"images"} />}
            title={items.title}
            cost={items.cost}
            action={items.action}
            // plus={items.add}
            // minus={items.minus}
            // delete={items.delete}
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
