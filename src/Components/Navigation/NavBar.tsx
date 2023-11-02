import React from 'react'
import styles from "./styles.module.css";
import { AddressButton } from '../Location/AddressButton';
import { AmazonSearch } from '../Filter/AmazonSearch';
import { ProductsDropdownMenu } from '../Filter/ProductsDropdownMenu';
import { LanguagePopover } from '../Popovers/LanguageSettings/LanguagePopover';
import { AccountsPopover } from '../Popovers/Accounts/AccountsPopover';
import { ReturnsAndOrder } from '../Orders/ReturnsAndOrder';
import { Cart } from '../Carts/Cart';

export const NavBar = () => {

  return (
    <div>
      <div className={styles.first_nav}>
        <div  className={styles.parent_amazon_logo}>
          <img src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" alt="amazon-logo" className={styles.amazon_logo}/>
        </div>
        <AddressButton />
        <ProductsDropdownMenu />
        <AmazonSearch />
        <LanguagePopover />
        <AccountsPopover />
        <ReturnsAndOrder />
        <Cart />
      </div>

      <div className={styles.second_nav}>helloe</div>
    </div>

  )
}
