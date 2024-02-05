import React, { useMemo, useState } from "react";
import styles from "./styles.module.css";
import useLocalStorageState from "use-local-storage-state";
import allProducts from "../../Data/all.json";

interface INewRatingProps {
  productId: number;
  maxStar: number;
  initialRating: number;
  onRatingChange: (rating: number) => void;
}

const productRatings = allProducts.reduce((acc, curr) => {
  acc[`${curr.id}`] = 0;
  return acc;
}, {} as Record<string, number>);

export const Rating = (props: INewRatingProps) => {
  const { maxStar, onRatingChange, productId } = props;
  // const [rating, setRating] = useState(productRatings[productId]);
  const [ratings, setRatings] = useLocalStorageState<Record<string, number>>(
    "productRatings",
    { defaultValue: productRatings }
  );

  const rating = useMemo(() => {
    return ratings[productId];
  }, [ratings]);

  const handleStarClick = (starIndex: number) => {
    const newRating = starIndex + 1;
    // setRating(newRating);

    console.log(productId, ratings, "args >>>>");
    console.log(newRating, "new rsitign");
    setRatings((previous) => ({ ...previous, [productId]: newRating }));
    console.log(productId, ratings, "args >>>>");
    onRatingChange(newRating);
  };
  return (
    <div className={styles.product_rating}>
      {[...Array(maxStar)].map((_, index: number) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{
            cursor: "pointer",
            color: index < rating ? "rgb(255, 164, 28)" : "rgb(226, 227, 233)",
          }}
        >
          {" "}
          &#9733;
        </span>
      ))}
    </div>
  );
};
