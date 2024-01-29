import React, { useState } from "react";
import styles from "./styles.module.css";

interface INewRatingProps {
  maxStar: number;
  initialRating: number;
  onRatingChange: (rating: number) => void;
}

export const Rating = (props: INewRatingProps) => {
  const { maxStar, initialRating = 0, onRatingChange } = props;
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (starIndex: number) => {
    const newRating = starIndex + 1;
    setRating(newRating);
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
