import React from "react";
import { Link } from "react-router-dom";
import { FormateCurrency } from "../../../Utilities/FormateCurrency";
import styles from "./styles.module.css";

interface INewProductViewReusable {
  id: number;
  image: React.ReactNode;
  title: string;
  cost: number;
  action: React.ReactNode;
  // plus: React.ReactNode;
  // minus: React.ReactNode;
  // delete: React.ReactNode;
}

export function ProductViewReusable(props: INewProductViewReusable) {
  const { image, title, cost, action } = props;

  const quantity = 1;
  const quantity2 = 0;

  return (
    <>
      <div className={styles.holder}>
        <Link to="" className={styles.image_container}>
          {image}
        </Link>
        <div className={styles.other_items_holder}>
          <p className={styles.item_title}>
            <Link to="" className={styles.link_to_addto_cart}>
              {title}
            </Link>
          </p>
          <span className={styles.cost}>{FormateCurrency(cost)}</span>
          {quantity === 1 ? (
            <button className={styles.action}>{action}</button>
          ) : (
            <div>
              <button>+</button>
              <button>-</button>
              <button>Remove</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
