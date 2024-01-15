import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Cart } from "../Cart";
import {
  INewCartsProps,
  ProductProps,
} from "../../Components/ProductsReusables/Products/Product";
import styles from "./styles.module.css";
import useLocalStorageState from "use-local-storage-state";
import { NavBar } from "../../Components/Navigation/NavBar";
import { Actions, AboutAmazon, ActionButtons } from "../../Components/Footer";
import { TotalPrice } from "../../Components/TotalPrice/TotalPrice";
import { FormateCurrency } from "../../Utilities/FormateCurrency";

export const Checkout = (props: INewCartsProps) => {
  const [cart, setCart] = useLocalStorageState<INewCartsProps>("cart" || {});

  const getProducts = () => Object.values(cart || {});

  const totalPrice = useMemo(() => {
    return Object.values(cart || {}).reduce(
      (accumulator, product) =>
        accumulator + product.cost * (product?.quantity as number),
      0
    );
  }, [cart]);

  const productsCount = useMemo(() => {
    return Object.values(cart || {}).reduce(
      (accumulator, product) => (accumulator += product.quantity as number),
      0
    );
  }, [cart]);

  return (
    <>
      <NavBar />
      <div className={styles.parent}>
        <div className={styles.left}>
          <div className={styles.left_feature}>
            <div className={styles.back_to_cart}>
              <Link to="/cart" className={styles.edit_to_cart}>
                <ArrowBackIosIcon className={styles.arrow_back_to} />
                Edit
              </Link>
              <span className={styles.bag}>IN YOUR BAG</span>
            </div>

            {getProducts().map((product) => (
              <>
                <div className={styles.title_and_itemprice} key={product.id}>
                  <span className={styles.product_title}>{product.title}</span>
                  <span className={styles.product_cost}>
                    {FormateCurrency(product?.cost)}
                  </span>
                </div>

                <div className={styles.quantity}>
                  <span className={styles.quantity_text}>Quantity</span>
                  <span>{product.quantity}</span>
                </div>
              </>
            ))}
            <div className={styles.sub_cost}>
              <TotalPrice amount={totalPrice} productsCount={productsCount} />
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.right_feature}>
            <span className={styles.text_pay_with_card}>Pay with card</span>
            <span className={styles.text_shipping_info}>
              Shipping information
            </span>

            <form>
              <div className={styles.wrap}>
                <label className={styles.label}>Full Name</label>
                <input
                  placeholder="Enter a fullname"
                  type="text"
                  className={styles.input}
                />
              </div>

              <div className={styles.wrap}>
                <label className={styles.label}>Email</label>
                <input
                  placeholder="Email"
                  type="text"
                  className={styles.input}
                />
              </div>

              <div className={styles.wrap}>
                <label className={styles.label}>Shipping Address</label>
                <input
                  placeholder="Address"
                  type="text"
                  className={styles.input}
                />
              </div>

              <div className={styles.wrap}>
                <span className={styles.payment_details}>Payment Details</span>
                <label className={styles.label_card_information}>
                  Card information
                </label>

                <div className={styles.a}>
                  <input
                    placeholder="XXXX XXXX XXXX XXXX"
                    type="text"
                    className={styles.input_card_information}
                  />
                  <div className={styles.last_inputs_div}>
                    <input
                      placeholder="10/24"
                      type="text"
                      className={styles.last_inputs}
                    />
                    <input
                      placeholder="242"
                      type="text"
                      className={styles.last_inputs}
                    />
                  </div>
                </div>
              </div>

              <button className={styles.payment_btn}>Pay</button>
            </form>
          </div>
        </div>
      </div>
      <Actions />
      <AboutAmazon />
      <ActionButtons />
    </>
  );
};
