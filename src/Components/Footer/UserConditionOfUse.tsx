import React from "react";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles.module.css";
import { AlreadyACustomer } from "./AlreadyACustomer";

export const UserConditionOfUse = () => {
  return (
    <div className={styles.parent_div_user_condition}>
      <AlreadyACustomer />
      <div className={styles.terms_and_conditions}>
        <Link to="" className={styles.link_terms_and_condition}>
          Conditions of Use
        </Link>
        <Link to="" className={styles.link_terms_and_condition}>
          Privacy Policy
        </Link>
        <Link to="" className={styles.link_terms_and_condition}>
          Your Ads Privacy Choices
        </Link>
        <div className={styles.rules}>
          <CheckIcon className={styles.check} />
          <CloseIcon className={styles.close} />
        </div>
      </div>

      <span className={styles.at_amazon_dot_com}>
        © 1996-2024, Amazon.com, Inc. or its affiliates
      </span>

      <div className={styles.at_amazon_dot_com_ugochi}>
        <span>Replicated and developed by Ugochi Iwuchukwu.</span>
      </div>
    </div>
  );
};
