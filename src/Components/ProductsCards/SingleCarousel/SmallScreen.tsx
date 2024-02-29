import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const SmallScreen = () => {
  return (
    <div className={styles.con}>
      <Link to="/" className={styles.small_screen}>
        <img
          src="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71nwqPZaNRL._SX3000_.jpg"
          className={styles.image}
          alt="valentine_image_product"
        />
      </Link>
    </div>
  );
};
