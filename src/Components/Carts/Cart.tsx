import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from "./styles.module.css";


export function Cart() {
  return (
    <>
      <div className={styles.parent}>
        <AddShoppingCartIcon className={styles.shopping_cart}/>
        <span className={styles.cart}>Cart</span>
      </div>
    </>
  )
}
