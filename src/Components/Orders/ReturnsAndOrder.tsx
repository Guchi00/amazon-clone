import React from 'react';
import styles from "./styles.module.css";

export function ReturnsAndOrder() {
  
  return (
    <>
      <div className={styles.parent}>
        <span className={styles.returns}>Returns</span>
        <span className={styles.orders}>& Orders</span>
      </div>
    </>
  )
}
