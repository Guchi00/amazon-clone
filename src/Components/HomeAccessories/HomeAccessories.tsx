import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export interface INewHomeAccessories {
  image: React.ReactNode;
  title: string;
}

export function HomeAccessories(props: INewHomeAccessories) {
  const { image, title } = props;

  return (
    <>
      <div className={styles.contents}>

        <div className={styles.middle_contents}>
        <div className={styles.image}>{image}</div>
        <span className={styles.title}>{title}</span>
      </div>

        <div>
          <Link to=""></Link>
        </div>
      </div>
    </>
  );
}
