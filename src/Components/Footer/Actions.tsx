import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export function Actions() {
  return (
    <>
      <div className={styles.user_signup_parent_div}>
        <span className={styles.personalize_recon}>
          See personalize recommendations
        </span>

        <Link to="/login">
          <button className={styles.signin_btn}>Sign in</button>
        </Link>

        <div>
          <span className={styles.new_customer}>New Customer? </span>
          <Link to="/register" className={styles.start_here}>
            Start here.
          </Link>
        </div>
      </div>

      <a href="#top" className={styles.user_back_to_top}>
        <span className={styles.back_to_top}>Back to top</span>
      </a>
    </>
  );
}
