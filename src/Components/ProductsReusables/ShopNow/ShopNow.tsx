import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormateCurrency } from "../../../Utilities/FormateCurrency";
import styles from "./styles.module.css";
import { Rating } from "../../Filter/Rating";

export interface INewShopNowProps {
  title: string;
  image: React.ReactNode;
  cost: number;
  id: number;
}
export const ShopNow = (props: INewShopNowProps) => {
  // const { title, image, cost, id } = props;
  const [userRating, setUserRating] = useState<number>(0);

  const handleRatingChange = (newRating: number) => {
    setUserRating(newRating);
  };
  return (
    <div className={styles.parent_container}>
      <Link to={`/product/${props.id}`} className={styles.image_container}>
        {props.image}
      </Link>
      <div className={styles.contents_container}>
        <Link to={`/product/${props.id}`} className={styles.product_title}>
          {props.title}
        </Link>
        <Rating
          productId={props.id}
          maxStar={5}
          initialRating={userRating}
          onRatingChange={handleRatingChange}
        />
        <span className={styles.product_cost}>
          {FormateCurrency(props.cost)}
        </span>
      </div>
    </div>
  );
};
