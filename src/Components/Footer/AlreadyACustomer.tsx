import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const AlreadyACustomer = () => {
  return (
    <Link to="/login" className={styles.customer_sign_in}>
      Already a customer? Sign in
    </Link>
  );
};
