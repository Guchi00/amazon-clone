import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

interface INewProductSeeMoreReusable {
  image: React.ReactNode;
  title: string;
}

export function SeeMoreProducts(props: INewProductSeeMoreReusable) {
  const { image, title } = props;

  return (
    <>
      <div className={styles.products_parent}>
        <Link to="" className={styles.images}>
          {image}
        </Link>
        <div className={styles.sub_parent}>
          <Link to="" className={styles.title}>
            {title}
          </Link>
        </div>
      </div>
    </>
  );
}
