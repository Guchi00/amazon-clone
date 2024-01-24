import React, { useMemo } from "react";
import useLocalStorageState from "use-local-storage-state";
import { AddressButton } from "../Location/AddressButton";
import { AmazonSearch } from "../Filter/AmazonSearch";
import { ProductsMenu } from "../Filter/ProductsMenu";
import { Language } from "../Popovers/LanguageSettings/Language";
import { Accounts } from "../Popovers/Accounts/Accounts";
import { ReturnsAndOrder } from "../Orders/ReturnsAndOrder";
import { CartWidget } from "../CartWidget/CartWidget";
import { INewCartsProps } from "../ProductsReusables/Products/Product";

import styles from "./styles.module.css";

export const NavBar: React.FunctionComponent = () => {
  const [cart] = useLocalStorageState<INewCartsProps>("cart", {});

  // console.log(cart, "cart >>>>");

  const productsCount = useMemo(() => {
    return Object.values(cart || {}).reduce(
      (accumulator, product) => (accumulator += product.quantity as number),
      0
    );
  }, [cart]);

  return (
    <div className={`${styles.parent} my-app-nav`}>
      <div className={styles.first_nav}>
        <div className={styles.parent_amazon_logo}>
          <img
            src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
            alt="amazon-logo"
            className={styles.amazon_logo}
          />
        </div>
        <AddressButton />
        <ProductsMenu />
        <AmazonSearch />
        <Language />
        <Accounts />
        <ReturnsAndOrder />
        <CartWidget productsCount={productsCount} />
      </div>

      <div className={styles.second_nav}>helloe</div>
    </div>
  );
};
