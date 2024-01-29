import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { message } from "antd";
import useLocalStorageState from "use-local-storage-state";
import { INewCartsProps } from "../../Components/ProductsReusables/Products/Product";
import { NavBar } from "../../Components/Navigation/NavBar";
import {
  BackToTheTopPage,
  Account,
  AmazonInfo,
  LanguageButtons,
} from "../../Components/Footer";
import { FormateCurrency } from "../../Utilities/FormateCurrency";
import all from "../../Data/all.json";
import styles from "./styles.module.css";

type Product = (typeof all)[number];

export const SeeAProduct = () => {
  const { id } = useParams<{ id: string }>();

  //The cart has the entire product props which is an object of product type
  const [cart, setCart] = useLocalStorageState<INewCartsProps>("cart", {});

  //use this ! or this as Product or this if (!product) return <>Product not found</>;
  const product = all.find((p) => p.id === Number(id));

  if (!product) return <>Product not found</>;

  //check if product id exist in the cart key, if it does, update
  //quantity and if not just add 1.
  const addToCart = (product: Product): void => {
    if (cart?.hasOwnProperty(product.id)) {
      const existingProduct = cart[product.id];
      const updatedExistingProduct = {
        ...existingProduct,
        quantity: (existingProduct.quantity as number) + 1,
      };
      setCart((prevCart) => ({
        ...prevCart,
        [product.id]: updatedExistingProduct,
      }));
    } else {
      const { imageUrl, ...restOfProduct } = product;
      setCart((prevCart) => ({
        ...prevCart,
        [product.id]: {
          ...restOfProduct,
          image: imageUrl,
          quantity: 1,
        },
      }));
    }
    message.success("item added to cart");
  };

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.title_parent}>
          <span className={styles.title}>Keep Shopping</span>
        </div>

        <div className={styles.middle_contents}>
          <img
            src={product.imageUrl}
            alt="product_img"
            className={styles.img}
          />

          <div className={styles.contents}>
            <p className={styles.product_title}>{product?.title}</p>
            <span className={styles.cost}>{FormateCurrency(product.cost)}</span>
            <button
              className={styles.action}
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Account />
      <BackToTheTopPage />
      <AmazonInfo />
      <LanguageButtons />
    </>
  );
};
