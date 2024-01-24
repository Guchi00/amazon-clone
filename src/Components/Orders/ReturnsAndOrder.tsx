import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function ReturnsAndOrder() {
  return (
    <Link to="/checkout" className={styles.link_to_checkout}>
      <div className={styles.parent}>
        <span className={styles.returns}>Returns</span>
        <span className={styles.orders}>& Orders</span>
      </div>
    </Link>
  );
}
