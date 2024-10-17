import React from "react";
import styles from "./styles.module.css";

export const BackToTheTopPage = () => {
  return (
    <>
      <a href="/#top" className={styles.user_back_to_top}>
        <span className={styles.back_to_top}>Back to top</span>
      </a>
    </>
  );
};
