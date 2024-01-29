import React, { useState, useMemo, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { INewCartsProps } from "../../Components/ProductsReusables/Products/Product";
import styles from "./styles.module.css";
import useLocalStorageState from "use-local-storage-state";
import { NavBar } from "../../Components/Navigation/NavBar";
import {
  Account,
  AmazonInfo,
  BackToTheTopPage,
  LanguageButtons,
} from "../../Components/Footer";
import { TotalPrice } from "../../Components/TotalPrice/TotalPrice";
import { FormateCurrency } from "../../Utilities/FormateCurrency";

const initialUserInforState = {
  fullName: "",
  email: "",
  address: "",
  cardInformation: "",
};

export type InitialUserInforStateType = {
  fullName: string;
  email: string;
  address: string;
  cardInformation: string;
};

export const Checkout = (props: INewCartsProps) => {
  const navigate = useNavigate();
  const [cart, setCart] = useLocalStorageState<INewCartsProps>("cart" || {});
  const [userInfor, setUserInfor] = useState(initialUserInforState);
  const [key, setKey] = useState(0);

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

  const resetUserInfor = () => {
    console.log(userInfor, "userInforBefore");
    setUserInfor(initialUserInforState);
    setKey((prevKey) => prevKey + 1);
    console.log(userInfor, "userInforAfter");
  };

  const handlePayment = () => {
    if (
      userInfor.fullName === "" ||
      userInfor.email === "" ||
      userInfor.address === "" ||
      userInfor.cardInformation === ""
    ) {
      message.error("All input field is required");
      // return;
    } else {
      message.success("Payment made successfully");
      setCart({});
      resetUserInfor();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserInfor((userInfor) => ({
      ...userInfor,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div key={key}>
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
              <div key={product.id}>
                <div className={styles.title_and_itemprice}>
                  <span className={styles.product_title}>{product.title}</span>
                  <span className={styles.product_cost}>
                    {FormateCurrency(product?.cost)}
                  </span>
                </div>

                <div className={styles.quantity}>
                  <span className={styles.quantity_text}>Quantity</span>
                  <span>{product.quantity}</span>
                </div>
              </div>
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
                  name="fullName"
                  className={styles.input}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.wrap}>
                <label className={styles.label}>Email</label>
                <input
                  placeholder="Email"
                  type="text"
                  name="email"
                  className={styles.input}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.wrap}>
                <label className={styles.label}>Shipping Address</label>
                <input
                  placeholder="Address"
                  type="text"
                  name="address"
                  className={styles.input}
                  onChange={handleChange}
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
                    name="cardInformation"
                    onChange={handleChange}
                    className={styles.input_card_information}
                  />
                  <div className={styles.last_inputs_div}>
                    <input
                      placeholder="10/24"
                      type="text"
                      name="cardInformation"
                      onChange={handleChange}
                      className={styles.last_inputs}
                    />
                    <input
                      placeholder="242"
                      type="text"
                      name="cardInformation"
                      onChange={handleChange}
                      className={styles.last_inputs}
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                className={styles.payment_btn}
                onClick={handlePayment}
              >
                Pay
              </button>
            </form>
          </div>
        </div>
      </div>
      <Account />
      <BackToTheTopPage />
      <AmazonInfo />
      <LanguageButtons />
    </div>
  );
};
