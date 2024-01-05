import React from "react";
import { useNavigate } from "react-router-dom";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "./styles.module.css";

export interface INewProductsCountProps {
  productsCount: number;
}

export const CartWidget = (props: INewProductsCountProps) => {
  const { productsCount } = props;

  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <button className={styles.parent} onClick={navigateToCart}>
        <div className={styles.left}>
          <span className={styles.number_of_items}>{productsCount}</span>
          <ShoppingCartOutlinedIcon className={styles.shopping_cart} />
        </div>
        <div className={styles.right}>
          <span className={styles.cart_text}>Cart</span>
        </div>
      </button>
    </>
  );
};
