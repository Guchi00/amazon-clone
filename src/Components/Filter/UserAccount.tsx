import React from "react";
import { Link } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./styles.module.css";

export const UserAccount = () => {
  return (
    <Link to="/login" className={styles.signin_btn}>
      <span> Sign in</span>
      <KeyboardArrowRightIcon className={styles.arrow_right_icon} />
      <PermIdentityIcon className={styles.account_icon} />
    </Link>
  );
};
