import React from "react";
import useLocalStorageState from "use-local-storage-state";
import { Link } from "react-router-dom";
import { FormateCurrency } from "../../../Utilities/FormateCurrency";
import styles from "./styles.module.css";

export type ProductProps = {
  id: number;
  image: string;
  title: string;
  cost: number;
  quantity?: number;
};

export interface INewCartsProps {
  [ProductId: string]: ProductProps;
}

export function Product(props: ProductProps) {
  const { image, title, cost } = props;

  //The cart has the entire product props which is an object of product type
  const [cart, setCart] = useLocalStorageState<INewCartsProps>("cart", {});

  const addToCart = (product: ProductProps): void => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: { ...product, quantity: 1 },
    }));
  };

  return (
    <>
      <div className={styles.holder}>
        <Link to="" className={styles.image_container}>
          <img src={image} alt={"product image"} />
        </Link>
        <div className={styles.other_items_holder}>
          <p className={styles.item_title}>{title}</p>
          <span className={styles.cost}>{FormateCurrency(cost)}</span>

          <button className={styles.action} onClick={() => addToCart(props)}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
