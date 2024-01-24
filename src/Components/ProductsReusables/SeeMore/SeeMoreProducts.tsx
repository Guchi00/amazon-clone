import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export interface INewProductSeeMoreReusable {
  image: React.ReactNode;
  title: string;
  id: number;
}

export function SeeMoreProducts(props: INewProductSeeMoreReusable) {
  const { image, title } = props;

  return (
    <>
      <div className={styles.products_parent}>
        <Link to={`/product/${props.id}`} className={styles.images}>
          {image}
        </Link>
        <div className={styles.sub_parent}>
          <Link to={`/product/${props.id}`} className={styles.title}>
            {title}
          </Link>
        </div>
      </div>
    </>
  );
}
