import useLocalStorageState from "use-local-storage-state";
import { NavBar } from "../../Components/Navigation/NavBar";
import { INewCartsProps } from "../../Components/ProductsReusables/Products/Product";
import { Quantifier, Operation } from "../../Components/Quantifier/Quantifier";
import { FormateCurrency } from "../../Utilities/FormateCurrency";
import { Actions, AboutAmazon, ActionButtons } from "../../Components/Footer";

import styles from "./styles.module.css";
import { TotalPrice } from "../../Components/TotalPrice/TotalPrice";
import { useMemo } from "react";

export function Cart() {
  const [cart, setCart] = useLocalStorageState<INewCartsProps>("cart", {});

  const handleRemoveProduct = (productId: number): void => {
    setCart((prevCart) => {
      const updateCart = { ...prevCart };
      delete updateCart[productId];
      return updateCart;
    });
  };

  const handleUpdateQuantity = (productId: number, operation: Operation) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        if (operation === "increase") {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: (updatedCart?.[productId].quantity ?? 0) + 1,
          };
        } else {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: (updatedCart?.[productId].quantity ?? 0) - 1,
          };
        }
      }
      return updatedCart;
    });
  };

  const getProducts = () => Object.values(cart || {});

  console.log(cart, "cart");

  // const totalPrice = getProducts().reduce(
  //   (accumulator, product) =>
  //     accumulator + product.cost * (product?.quantity as number),
  //   0
  // );

  const totalPrice = useMemo(() => {
    return Object.values(cart || {}).reduce(
      (accumulator, product) =>
        accumulator + product.cost * (product?.quantity as number),
      0
    );
  }, [cart]);

  console.log(totalPrice, "total ss.....");

  const productsCount = useMemo(() => {
    return Object.values(cart || {}).reduce(
      (accumulator, product) => (accumulator += product.quantity as number),
      0
    );
  }, [cart]);

  const handleDeleteProduct = (productId: number) => {
    const existing = cart?.[productId];
    if (existing) {
      delete cart?.[productId];
      setCart({ ...cart });
    }
  };

  return (
    <>
      <NavBar />
      <div className={styles.parent}>
        <div className={styles.left}>
          <div className={styles.shopping_cart}>
            <div className={styles.titles}>
              <span className={styles.shopping_cart_text}>Shopping Cart</span>
              <span className={styles.price}>Price</span>
            </div>

            {getProducts().map((product) => (
              <div className={styles.contents} key={product.id}>
                <img
                  src={product.image}
                  alt={"images"}
                  className={styles.img}
                />

                <div className={styles.middle_contents}>
                  <span className={styles.title}>{product.title}</span>
                  <div className={styles.action}>
                    <Quantifier
                      removeProductCallback={() =>
                        handleRemoveProduct(product.id)
                      }
                      handleUpdateQuantity={handleUpdateQuantity}
                      productId={product.id}
                    />
                    <span
                      className={styles.delete_cart}
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Delete
                    </span>
                  </div>
                </div>

                <span className={styles.product_price}>
                  {FormateCurrency(product.cost)}
                </span>
              </div>
            ))}

            <div className={styles.sub_total}>
              <TotalPrice amount={totalPrice} productsCount={productsCount} />
            </div>
          </div>

          <div className={styles.divider}></div>
          <p className={styles.p}>
            The price and availability of items at Amazon.com are subject to
            change. The Cart is a temporary place to store a list of your items
            and reflects each item's most recent price. <br></br>Do you have a
            gift card or promotional code? We'll ask you to enter your claim
            code when it's time to pay.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.checkout}>
            <span className={styles.checkout_subtotal}>Subtotal</span>
            <button className={styles.checkout_btn}>Proceed to checkout</button>
          </div>
        </div>
      </div>

      <Actions />
      <AboutAmazon />
      <ActionButtons />
    </>
  );
}
